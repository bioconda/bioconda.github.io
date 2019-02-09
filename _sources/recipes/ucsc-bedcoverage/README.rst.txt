.. title:: Package Recipe 'ucsc-bedcoverage'
.. highlight: bash


ucsc-bedcoverage
================

.. conda:recipe:: ucsc-bedcoverage
   :replaces_section_title:

   Analyse coverage by bed files \- chromosome by 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedcoverage/meta.yaml>`_

   


.. conda:package:: ucsc-bedcoverage

   |downloads_ucsc-bedcoverage| |docker_ucsc-bedcoverage|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedcoverage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedcoverage

   and update with::

      conda update ucsc-bedcoverage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedcoverage


.. |required_by_ucsc-bedcoverage| conda:required_by:: ucsc-bedcoverage
.. |downloads_ucsc-bedcoverage| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedcoverage.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedcoverage| image:: https://quay.io/repository/biocontainers/ucsc-bedcoverage/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedcoverage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedcoverage/README.html

