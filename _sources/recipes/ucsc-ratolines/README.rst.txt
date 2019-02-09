.. title:: Package Recipe 'ucsc-ratolines'
.. highlight: bash


ucsc-ratolines
==============

.. conda:recipe:: ucsc-ratolines
   :replaces_section_title:

   Output .ra file stanzas as single lines\, with pipe\-separated fields.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-ratolines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ratolines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ratolines/meta.yaml>`_

   


.. conda:package:: ucsc-ratolines

   |downloads_ucsc-ratolines| |docker_ucsc-ratolines|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-ratolines|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-ratolines

   and update with::

      conda update ucsc-ratolines

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-ratolines


.. |required_by_ucsc-ratolines| conda:required_by:: ucsc-ratolines
.. |downloads_ucsc-ratolines| image:: https://img.shields.io/conda/dn/bioconda/ucsc-ratolines.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-ratolines| image:: https://quay.io/repository/biocontainers/ucsc-ratolines/status
   :target: https://quay.io/repository/biocontainers/ucsc-ratolines







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-ratolines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-ratolines/README.html

