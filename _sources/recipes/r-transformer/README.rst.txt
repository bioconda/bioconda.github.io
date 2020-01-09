:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-transformer'
.. highlight: bash

r-transformer
=============

.. conda:recipe:: r-transformer
   :replaces_section_title:

   Additional S3 and S4 coercion methods for easy interconversion between Bioconductor and tidyverse data classes.

   :homepage: https://transformer.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/transformer
   :license: MIT
   :recipe: /`r-transformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-transformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-transformer/meta.yaml>`_

   


.. conda:package:: r-transformer

   |downloads_r-transformer| |docker_r-transformer|

   :versions: 0.2.11-0, 0.2.10-0, 0.2.9-0, 0.2.8-0, 0.2.7-0, 0.2.6-0, 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.2.0-0, 0.1.12-0, 0.1.11-0, 0.1.6-0, 0.1.4-0
   
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-genomicranges: >=1.36
   :depends bioconductor-iranges: >=2.18.2
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends r-acidbase: >=0.1.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bioverbs: >=0.2.10
   :depends r-data.table: >=1.12.6
   :depends r-goalie: >=0.4.0
   :depends r-matrix: >=1.2
   :depends r-tibble: >=2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-transformer

   and update with::

      conda update r-transformer

   or use the docker container::

      docker pull quay.io/biocontainers/r-transformer:<tag>

   (see `r-transformer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-transformer| image:: https://img.shields.io/conda/dn/bioconda/r-transformer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-transformer
   :alt:   (downloads)
.. |docker_r-transformer| image:: https://quay.io/repository/biocontainers/r-transformer/status
   :target: https://quay.io/repository/biocontainers/r-transformer
.. _`r-transformer/tags`: https://quay.io/repository/biocontainers/r-transformer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-transformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-transformer/README.html