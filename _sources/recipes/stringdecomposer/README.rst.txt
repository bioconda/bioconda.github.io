:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringdecomposer'
.. highlight: bash

stringdecomposer
================

.. conda:recipe:: stringdecomposer
   :replaces_section_title:
   :noindex:

   A tool for decomposing of strings into a set of given monomers

   :homepage: https://github.com/ablab/stringdecomposer
   :license: GPL / GPLv2
   :recipe: /`stringdecomposer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringdecomposer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringdecomposer/meta.yaml>`_

   StringDecomposer \(SD\) algorithm takes the set of monomers and a long error\-prone read \(or a genomic segment\) and partitions this read into distinct monomers.


.. conda:package:: stringdecomposer

   |downloads_stringdecomposer| |docker_stringdecomposer|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends pandas: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-edlib: 
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stringdecomposer

   and update with::

      conda update stringdecomposer

   or use the docker container::

      docker pull quay.io/biocontainers/stringdecomposer:<tag>

   (see `stringdecomposer/tags`_ for valid values for ``<tag>``)


.. |downloads_stringdecomposer| image:: https://img.shields.io/conda/dn/bioconda/stringdecomposer.svg?style=flat
   :target: https://anaconda.org/bioconda/stringdecomposer
   :alt:   (downloads)
.. |docker_stringdecomposer| image:: https://quay.io/repository/biocontainers/stringdecomposer/status
   :target: https://quay.io/repository/biocontainers/stringdecomposer
.. _`stringdecomposer/tags`: https://quay.io/repository/biocontainers/stringdecomposer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringdecomposer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringdecomposer/README.html