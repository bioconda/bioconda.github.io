:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'advntr'
.. highlight: bash

advntr
======

.. conda:recipe:: advntr
   :replaces_section_title:
   :noindex:

   A tool for genotyping Variable Number Tandem Repeats \(VNTR\) from sequence data

   :homepage: https://github.com/mehrdadbakhtiari/adVNTR
   :license: BSD 3-Clause
   :recipe: /`advntr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr/meta.yaml>`_

   


.. conda:package:: advntr

   |downloads_advntr| |docker_advntr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cython: 
   :depends htslib: ``1.9.*``
   :depends joblib: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends matplotlib: 
   :depends muscle: 
   :depends networkx: ``1.11.*``
   :depends numpy: ``>=1.14.6,<2.0a0``
   :depends pysam: ``0.15.1.*``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: 
   :depends scipy: ``>=1.4.1,<2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install advntr

   and update with::

      conda update advntr

   or use the docker container::

      docker pull quay.io/biocontainers/advntr:<tag>

   (see `advntr/tags`_ for valid values for ``<tag>``)


.. |downloads_advntr| image:: https://img.shields.io/conda/dn/bioconda/advntr.svg?style=flat
   :target: https://anaconda.org/bioconda/advntr
   :alt:   (downloads)
.. |docker_advntr| image:: https://quay.io/repository/biocontainers/advntr/status
   :target: https://quay.io/repository/biocontainers/advntr
.. _`advntr/tags`: https://quay.io/repository/biocontainers/advntr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/advntr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/advntr/README.html