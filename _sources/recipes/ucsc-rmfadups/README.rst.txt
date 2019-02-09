.. title:: Package Recipe 'ucsc-rmfadups'
.. highlight: bash


ucsc-rmfadups
=============

.. conda:recipe:: ucsc-rmfadups
   :replaces_section_title:

   remove duplicate records in FA file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-rmfadups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rmfadups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rmfadups/meta.yaml>`_

   


.. conda:package:: ucsc-rmfadups

   |downloads_ucsc-rmfadups| |docker_ucsc-rmfadups|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-rmfadups|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-rmfadups

   and update with::

      conda update ucsc-rmfadups

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-rmfadups


.. |required_by_ucsc-rmfadups| conda:required_by:: ucsc-rmfadups
.. |downloads_ucsc-rmfadups| image:: https://img.shields.io/conda/dn/bioconda/ucsc-rmfadups.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-rmfadups| image:: https://quay.io/repository/biocontainers/ucsc-rmfadups/status
   :target: https://quay.io/repository/biocontainers/ucsc-rmfadups







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-rmfadups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-rmfadups/README.html

