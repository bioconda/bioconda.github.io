.. title:: Package Recipe 'ucsc-hgbbidblink'
.. highlight: bash


ucsc-hgbbidblink
================

.. conda:recipe:: ucsc-hgbbidblink
   :replaces_section_title:

   Add table that just contains a pointer to a bbiFile to database.  This program 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgbbidblink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgbbidblink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgbbidblink/meta.yaml>`_

   


.. conda:package:: ucsc-hgbbidblink

   |downloads_ucsc-hgbbidblink| |docker_ucsc-hgbbidblink|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgbbidblink|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgbbidblink

   and update with::

      conda update ucsc-hgbbidblink

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgbbidblink


.. |required_by_ucsc-hgbbidblink| conda:required_by:: ucsc-hgbbidblink
.. |downloads_ucsc-hgbbidblink| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgbbidblink.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgbbidblink| image:: https://quay.io/repository/biocontainers/ucsc-hgbbidblink/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgbbidblink







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgbbidblink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgbbidblink/README.html

