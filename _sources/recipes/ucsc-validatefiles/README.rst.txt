.. title:: Package Recipe 'ucsc-validatefiles'
.. highlight: bash


ucsc-validatefiles
==================

.. conda:recipe:: ucsc-validatefiles
   :replaces_section_title:

   Validates the format of different genomic files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-validatefiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-validatefiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-validatefiles/meta.yaml>`_

   


.. conda:package:: ucsc-validatefiles

   |downloads_ucsc-validatefiles| |docker_ucsc-validatefiles|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-validatefiles|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-validatefiles

   and update with::

      conda update ucsc-validatefiles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-validatefiles


.. |required_by_ucsc-validatefiles| conda:required_by:: ucsc-validatefiles
.. |downloads_ucsc-validatefiles| image:: https://img.shields.io/conda/dn/bioconda/ucsc-validatefiles.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-validatefiles| image:: https://quay.io/repository/biocontainers/ucsc-validatefiles/status
   :target: https://quay.io/repository/biocontainers/ucsc-validatefiles







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-validatefiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-validatefiles/README.html

