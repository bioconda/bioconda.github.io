:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcwlpipelines'
.. highlight: bash

bioconductor-rcwlpipelines
==========================

.. conda:recipe:: bioconductor-rcwlpipelines
   :replaces_section_title:
   :noindex:

   Bioinformatics pipelines based on Rcwl

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RcwlPipelines.html
   :license: GPL-2
   :recipe: /`bioconductor-rcwlpipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwlpipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwlpipelines/meta.yaml>`_

   A collection of Bioinformatics tools and pipelines based on R and the Common Workflow Language.


.. conda:package:: bioconductor-rcwlpipelines

   |downloads_bioconductor-rcwlpipelines| |docker_bioconductor-rcwlpipelines|

   :versions:
      
      

      ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rcwl: ``>=1.6.0,<1.7.0``
   :depends nodejs: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcwlpipelines

   and update with::

      conda update bioconductor-rcwlpipelines

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcwlpipelines:<tag>

   (see `bioconductor-rcwlpipelines/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcwlpipelines| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcwlpipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcwlpipelines
   :alt:   (downloads)
.. |docker_bioconductor-rcwlpipelines| image:: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines
.. _`bioconductor-rcwlpipelines/tags`: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcwlpipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcwlpipelines/README.html