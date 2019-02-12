:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metarnaseq'
.. highlight: bash

r-metarnaseq
============

.. conda:recipe:: r-metarnaseq
   :replaces_section_title:

   Implementation of two p\-value combination techniques \(inverse normal and Fisher methods\). A vignette is provided to explain how to perform a meta\-analysis from two independent RNA\-seq experiments.

   :homepage: https://CRAN.R-project.org/package=metaRNASeq
   :license: GPL / GPL
   :recipe: /`r-metarnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metarnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metarnaseq/meta.yaml>`_

   


.. conda:package:: r-metarnaseq

   |downloads_r-metarnaseq| |docker_r-metarnaseq|

   :versions: 1.0.2-0
   
   :depends r-base: 3.4.1*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metarnaseq

   and update with::

      conda update r-metarnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-metarnaseq:<tag>

   (see `r-metarnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metarnaseq| image:: https://img.shields.io/conda/dn/bioconda/r-metarnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_r-metarnaseq| image:: https://quay.io/repository/biocontainers/r-metarnaseq/status
   :target: https://quay.io/repository/biocontainers/r-metarnaseq
.. _`r-metarnaseq/tags`: https://quay.io/repository/biocontainers/r-metarnaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metarnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metarnaseq/README.html