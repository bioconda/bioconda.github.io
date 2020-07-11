:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'concoct'
.. highlight: bash

concoct
=======

.. conda:recipe:: concoct
   :replaces_section_title:
   :noindex:

   Clustering cONtigs with COverage and ComposiTion

   :homepage: https://github.com/BinPro/CONCOCT
   :license: BSD / FreeBSD
   :recipe: /`concoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3103`

   


.. conda:package:: concoct

   |downloads_concoct| |docker_concoct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.62b``
   :depends blas: ``* mkl``
   :depends cython: ``>=0.19.1``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends nose: ``>=1.3.0``
   :depends numpy: ``>=1.7.1``
   :depends openmp: 
   :depends pandas: ``>=0.11.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scikit-learn: ``>=0.18.0``
   :depends scipy: ``>=0.12.0``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install concoct

   and update with::

      conda update concoct

   or use the docker container::

      docker pull quay.io/biocontainers/concoct:<tag>

   (see `concoct/tags`_ for valid values for ``<tag>``)


.. |downloads_concoct| image:: https://img.shields.io/conda/dn/bioconda/concoct.svg?style=flat
   :target: https://anaconda.org/bioconda/concoct
   :alt:   (downloads)
.. |docker_concoct| image:: https://quay.io/repository/biocontainers/concoct/status
   :target: https://quay.io/repository/biocontainers/concoct
.. _`concoct/tags`: https://quay.io/repository/biocontainers/concoct?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoct/README.html