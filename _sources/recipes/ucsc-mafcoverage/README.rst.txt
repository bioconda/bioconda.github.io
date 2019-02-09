.. title:: Package Recipe 'ucsc-mafcoverage'
.. highlight: bash


ucsc-mafcoverage
================

.. conda:recipe:: ucsc-mafcoverage
   :replaces_section_title:

   Analyse coverage by maf files \- chromosome by 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafcoverage/meta.yaml>`_

   


.. conda:package:: ucsc-mafcoverage

   |downloads_ucsc-mafcoverage| |docker_ucsc-mafcoverage|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafcoverage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafcoverage

   and update with::

      conda update ucsc-mafcoverage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafcoverage


.. |required_by_ucsc-mafcoverage| conda:required_by:: ucsc-mafcoverage
.. |downloads_ucsc-mafcoverage| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafcoverage.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafcoverage| image:: https://quay.io/repository/biocontainers/ucsc-mafcoverage/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafcoverage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafcoverage/README.html

