:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sceasy'
.. highlight: bash

r-sceasy
========

.. conda:recipe:: r-sceasy
   :replaces_section_title:
   :noindex:

   A package providing functions to convert between different single\-cell data formats.

   :homepage: https://github.com/cellgeni/sceasy
   :license: GPL / GPL3
   :recipe: /`r-sceasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy/meta.yaml>`_

   


.. conda:package:: r-sceasy

   |downloads_r-sceasy| |docker_r-sceasy|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends anndata: ``<=0.6.19``
   :depends bioconductor-loomexperiment: ``>=1.1.5``
   :depends bioconductor-singlecellexperiment: ``>=1.4.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-reticulate: 
   :depends r-seurat: ``>=3.0.1``
   :depends scipy: ``<1.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sceasy

   and update with::

      conda update r-sceasy

   or use the docker container::

      docker pull quay.io/biocontainers/r-sceasy:<tag>

   (see `r-sceasy/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sceasy| image:: https://img.shields.io/conda/dn/bioconda/r-sceasy.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sceasy
   :alt:   (downloads)
.. |docker_r-sceasy| image:: https://quay.io/repository/biocontainers/r-sceasy/status
   :target: https://quay.io/repository/biocontainers/r-sceasy
.. _`r-sceasy/tags`: https://quay.io/repository/biocontainers/r-sceasy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sceasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sceasy/README.html