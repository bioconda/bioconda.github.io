.. title:: Package Recipe 'ucsc-positionaltblcheck'
.. highlight: bash


ucsc-positionaltblcheck
=======================

.. conda:recipe:: ucsc-positionaltblcheck
   :replaces_section_title:

   check that positional tables are sorted

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-positionaltblcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-positionaltblcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-positionaltblcheck/meta.yaml>`_

   


.. conda:package:: ucsc-positionaltblcheck

   |downloads_ucsc-positionaltblcheck| |docker_ucsc-positionaltblcheck|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-positionaltblcheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-positionaltblcheck

   and update with::

      conda update ucsc-positionaltblcheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-positionaltblcheck


.. |required_by_ucsc-positionaltblcheck| conda:required_by:: ucsc-positionaltblcheck
.. |downloads_ucsc-positionaltblcheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-positionaltblcheck.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-positionaltblcheck| image:: https://quay.io/repository/biocontainers/ucsc-positionaltblcheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-positionaltblcheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-positionaltblcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-positionaltblcheck/README.html

