.. title:: Package Recipe 'ucsc-toupper'
.. highlight: bash


ucsc-toupper
============

.. conda:recipe:: ucsc-toupper
   :replaces_section_title:

   Convert lower case to upper case in file. Leave other chars alone

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-toupper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-toupper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-toupper/meta.yaml>`_

   


.. conda:package:: ucsc-toupper

   |downloads_ucsc-toupper| |docker_ucsc-toupper|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-toupper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-toupper

   and update with::

      conda update ucsc-toupper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-toupper


.. |required_by_ucsc-toupper| conda:required_by:: ucsc-toupper
.. |downloads_ucsc-toupper| image:: https://img.shields.io/conda/dn/bioconda/ucsc-toupper.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-toupper| image:: https://quay.io/repository/biocontainers/ucsc-toupper/status
   :target: https://quay.io/repository/biocontainers/ucsc-toupper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-toupper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-toupper/README.html

