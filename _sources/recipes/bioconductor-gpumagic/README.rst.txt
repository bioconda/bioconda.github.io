:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpumagic'
.. highlight: bash

bioconductor-gpumagic
=====================

.. conda:recipe:: bioconductor-gpumagic
   :replaces_section_title:
   :noindex:

   An openCL compiler with the capacity to compile R functions and run the code on GPU

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/gpuMagic.html
   :license: GPL-3
   :recipe: /`bioconductor-gpumagic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic/meta.yaml>`_

   The package aims to help users write openCL code with little or no effort. It is able to compile an user\-defined R function and run it on a device such as a CPU or a GPU. The user can also write and run their openCL code directly by calling .kernel function.


.. conda:package:: bioconductor-gpumagic

   |downloads_bioconductor-gpumagic| |docker_bioconductor-gpumagic|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends ocl-icd: ``>=2.3.0,<3.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-deriv: 
   :depends r-desctools: 
   :depends r-digest: 
   :depends r-pryr: 
   :depends r-rcpp: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpumagic

   and update with::

      conda update bioconductor-gpumagic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpumagic:<tag>

   (see `bioconductor-gpumagic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpumagic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpumagic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpumagic
   :alt:   (downloads)
.. |docker_bioconductor-gpumagic| image:: https://quay.io/repository/biocontainers/bioconductor-gpumagic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpumagic
.. _`bioconductor-gpumagic/tags`: https://quay.io/repository/biocontainers/bioconductor-gpumagic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html