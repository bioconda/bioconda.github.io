.. title:: Package Recipe 'ucsc-gmtime'
.. highlight: bash


ucsc-gmtime
===========

.. conda:recipe:: ucsc-gmtime
   :replaces_section_title:

   convert unix timestamp to date string

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gmtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gmtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gmtime/meta.yaml>`_

   


.. conda:package:: ucsc-gmtime

   |downloads_ucsc-gmtime| |docker_ucsc-gmtime|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-gmtime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-gmtime

   and update with::

      conda update ucsc-gmtime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-gmtime


.. |required_by_ucsc-gmtime| conda:required_by:: ucsc-gmtime
.. |downloads_ucsc-gmtime| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gmtime.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-gmtime| image:: https://quay.io/repository/biocontainers/ucsc-gmtime/status
   :target: https://quay.io/repository/biocontainers/ucsc-gmtime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gmtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gmtime/README.html

