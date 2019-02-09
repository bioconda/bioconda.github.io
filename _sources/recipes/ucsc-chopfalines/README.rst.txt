.. title:: Package Recipe 'ucsc-chopfalines'
.. highlight: bash


ucsc-chopfalines
================

.. conda:recipe:: ucsc-chopfalines
   :replaces_section_title:

   Read in FA file with long lines and rewrite it with shorter lines

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chopfalines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chopfalines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chopfalines/meta.yaml>`_

   


.. conda:package:: ucsc-chopfalines

   |downloads_ucsc-chopfalines| |docker_ucsc-chopfalines|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chopfalines|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chopfalines

   and update with::

      conda update ucsc-chopfalines

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chopfalines


.. |required_by_ucsc-chopfalines| conda:required_by:: ucsc-chopfalines
.. |downloads_ucsc-chopfalines| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chopfalines.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chopfalines| image:: https://quay.io/repository/biocontainers/ucsc-chopfalines/status
   :target: https://quay.io/repository/biocontainers/ucsc-chopfalines







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chopfalines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chopfalines/README.html

