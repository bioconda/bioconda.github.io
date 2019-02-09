.. title:: Package Recipe 'ucsc-maffetch'
.. highlight: bash


ucsc-maffetch
=============

.. conda:recipe:: ucsc-maffetch
   :replaces_section_title:

   get overlapping records from an MAF using an index table

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maffetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffetch/meta.yaml>`_

   


.. conda:package:: ucsc-maffetch

   |downloads_ucsc-maffetch| |docker_ucsc-maffetch|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-maffetch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maffetch

   and update with::

      conda update ucsc-maffetch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maffetch


.. |required_by_ucsc-maffetch| conda:required_by:: ucsc-maffetch
.. |downloads_ucsc-maffetch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maffetch.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maffetch| image:: https://quay.io/repository/biocontainers/ucsc-maffetch/status
   :target: https://quay.io/repository/biocontainers/ucsc-maffetch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maffetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maffetch/README.html

