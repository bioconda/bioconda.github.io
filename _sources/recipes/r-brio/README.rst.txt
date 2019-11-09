:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-brio'
.. highlight: bash

r-brio
======

.. conda:recipe:: r-brio
   :replaces_section_title:

   Biological R input\/output.

   :homepage: https://brio.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/brio
   :license: MIT
   :recipe: /`r-brio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-brio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-brio/meta.yaml>`_

   


.. conda:package:: r-brio

   |downloads_r-brio| |docker_r-brio|

   :versions: 0.3.15-0, 0.3.14-0, 0.3.13-0, 0.3.12-0, 0.3.11-0, 0.3.10-0, 0.3.9-0, 0.3.8-0, 0.3.7-1, 0.3.7-0, 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.3.2-0, 0.2.2-0, 0.2.1-0, 0.1.8-0, 0.1.6-0
   
   :depends bioconductor-genomicranges: >=1.38
   :depends bioconductor-rtracklayer: >=1.46
   :depends bioconductor-s4vectors: >=0.24
   :depends bioconductor-singlecellexperiment: >=1.8
   :depends bioconductor-summarizedexperiment: >=1.16
   :depends r-acidbase: >=0.1.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bioverbs: >=0.2.10
   :depends r-curl: >=1.95
   :depends r-data.table: >=1.12.6
   :depends r-gdata: >=2.18
   :depends r-goalie: >=0.4.0
   :depends r-jsonlite: >=1.6
   :depends r-matrix: >=1.2
   :depends r-r.utils: >=2.9
   :depends r-readxl: >=1.3.1
   :depends r-rio: >=0.5.16
   :depends r-stringr: >=1.4
   :depends r-transformer: >=0.2.10
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
   :target: https://anaconda.org/bioconda/r-brio
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