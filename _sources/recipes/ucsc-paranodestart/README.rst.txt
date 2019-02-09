.. title:: Package Recipe 'ucsc-paranodestart'
.. highlight: bash


ucsc-paranodestart
==================

.. conda:recipe:: ucsc-paranodestart
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paranodestart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestart/meta.yaml>`_

   


.. conda:package:: ucsc-paranodestart

   |downloads_ucsc-paranodestart| |docker_ucsc-paranodestart|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-paranodestart|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paranodestart

   and update with::

      conda update ucsc-paranodestart

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-paranodestart


.. |required_by_ucsc-paranodestart| conda:required_by:: ucsc-paranodestart
.. |downloads_ucsc-paranodestart| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paranodestart.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paranodestart| image:: https://quay.io/repository/biocontainers/ucsc-paranodestart/status
   :target: https://quay.io/repository/biocontainers/ucsc-paranodestart







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paranodestart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paranodestart/README.html

