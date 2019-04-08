:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-brio'
.. highlight: bash

r-brio
======

.. conda:recipe:: r-brio
   :replaces_section_title:

   Biological R input\/output. This package is part of the basejump toolkit.

   :homepage: https://github.com/steinbaugh/brio
   :license: MIT / MIT
   :recipe: /`r-brio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-brio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-brio/meta.yaml>`_

   


.. conda:package:: r-brio

   |downloads_r-brio| |docker_r-brio|

   :versions: 0.1.8-0, 0.1.6-0
   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bioverbs: >=0.1.8
   :depends r-curl: >=1.95
   :depends r-data.table: >=1.11
   :depends r-goalie: >=0.2.9
   :depends r-jsonlite: >=1.6
   :depends r-matrix: >=1.2
   :depends r-r.utils: >=2.7
   :depends r-readr: >=1.3
   :depends r-rio: >=0.5
   :depends r-stringr: >=1.3
   :depends r-tibble: >=2.0
   :depends r-transformer: >=0.1.6
   :depends r-yaml: >=2.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-brio

   and update with::

      conda update r-brio

   or use the docker container::

      docker pull quay.io/biocontainers/r-brio:<tag>

   (see `r-brio/tags`_ for valid values for ``<tag>``)


.. |downloads_r-brio| image:: https://img.shields.io/conda/dn/bioconda/r-brio.svg?style=flat
   :alt:   (downloads)
.. |docker_r-brio| image:: https://quay.io/repository/biocontainers/r-brio/status
   :target: https://quay.io/repository/biocontainers/r-brio
.. _`r-brio/tags`: https://quay.io/repository/biocontainers/r-brio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-brio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-brio/README.html