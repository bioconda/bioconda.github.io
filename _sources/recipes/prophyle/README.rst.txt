:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophyle'
.. highlight: bash

prophyle
========

.. conda:recipe:: prophyle
   :replaces_section_title:
   :noindex:

   ProPhyle is an accurate\, resource\-frugal and deterministic phylogeny\-based metagenomic classifier.

   :homepage: https://github.com/karel-brinda/prophyle
   :license: MIT
   :recipe: /`prophyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle/meta.yaml>`_

   


.. conda:package:: prophyle

   |downloads_prophyle| |docker_prophyle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1.0-5</code>,  <code>0.3.1.0-4</code>,  <code>0.3.1.0-3</code>,  <code>0.3.1.0-2</code>,  <code>0.3.1.0-1</code>,  <code>0.3.0.3-3</code>,  <code>0.3.0.3-2</code>,  <code>0.3.0.3-1</code>,  <code>0.3.0.2-1</code>,  </span></summary>
      

      ``0.3.1.0-5``,  ``0.3.1.0-4``,  ``0.3.1.0-3``,  ``0.3.1.0-2``,  ``0.3.1.0-1``,  ``0.3.0.3-3``,  ``0.3.0.3-2``,  ``0.3.0.3-1``,  ``0.3.0.2-1``,  ``0.3.0.0-1``,  ``0.2.1.3-2``,  ``0.2.1.3-1``,  ``0.2.1.3-0``,  ``0.2.1.2-1``,  ``0.2.1.0-1``,  ``0.2.1.0-0``,  ``0.2.0.3-2``,  ``0.2.0.3-1``,  ``0.2.0.3-0``,  ``0.2.0.2-0``,  ``0.2.0-0``,  ``0.1.0.38-2``,  ``0.1.0.38-1``,  ``0.1.0.38-0``,  ``0.1.0.35-0``,  ``0.1.0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends bitarray: 
   :depends ete3: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends psutil: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :depends scipy: 
   :depends wheel: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophyle

   and update with::

      conda update prophyle

   or use the docker container::

      docker pull quay.io/biocontainers/prophyle:<tag>

   (see `prophyle/tags`_ for valid values for ``<tag>``)


.. |downloads_prophyle| image:: https://img.shields.io/conda/dn/bioconda/prophyle.svg?style=flat
   :target: https://anaconda.org/bioconda/prophyle
   :alt:   (downloads)
.. |docker_prophyle| image:: https://quay.io/repository/biocontainers/prophyle/status
   :target: https://quay.io/repository/biocontainers/prophyle
.. _`prophyle/tags`: https://quay.io/repository/biocontainers/prophyle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophyle/README.html