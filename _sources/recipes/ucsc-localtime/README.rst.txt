.. title:: Package Recipe 'ucsc-localtime'
.. highlight: bash


ucsc-localtime
==============

.. conda:recipe:: ucsc-localtime
   :replaces_section_title:

   convert unix timestamp to date string

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-localtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-localtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-localtime/meta.yaml>`_

   


.. conda:package:: ucsc-localtime

   |downloads_ucsc-localtime| |docker_ucsc-localtime|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-localtime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-localtime

   and update with::

      conda update ucsc-localtime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-localtime


.. |required_by_ucsc-localtime| conda:required_by:: ucsc-localtime
.. |downloads_ucsc-localtime| image:: https://img.shields.io/conda/dn/bioconda/ucsc-localtime.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-localtime| image:: https://quay.io/repository/biocontainers/ucsc-localtime/status
   :target: https://quay.io/repository/biocontainers/ucsc-localtime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-localtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-localtime/README.html

