.. title:: Package Recipe 'ucsc-checkcoveragegaps'
.. highlight: bash


ucsc-checkcoveragegaps
======================

.. conda:recipe:: ucsc-checkcoveragegaps
   :replaces_section_title:

   Check for biggest gap in coverage for a list of tracks.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-checkcoveragegaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-checkcoveragegaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-checkcoveragegaps/meta.yaml>`_

   


.. conda:package:: ucsc-checkcoveragegaps

   |downloads_ucsc-checkcoveragegaps| |docker_ucsc-checkcoveragegaps|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-checkcoveragegaps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-checkcoveragegaps

   and update with::

      conda update ucsc-checkcoveragegaps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-checkcoveragegaps


.. |required_by_ucsc-checkcoveragegaps| conda:required_by:: ucsc-checkcoveragegaps
.. |downloads_ucsc-checkcoveragegaps| image:: https://img.shields.io/conda/dn/bioconda/ucsc-checkcoveragegaps.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-checkcoveragegaps| image:: https://quay.io/repository/biocontainers/ucsc-checkcoveragegaps/status
   :target: https://quay.io/repository/biocontainers/ucsc-checkcoveragegaps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-checkcoveragegaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-checkcoveragegaps/README.html

