.. title:: Package Recipe 'ucsc-paranodestatus'
.. highlight: bash


ucsc-paranodestatus
===================

.. conda:recipe:: ucsc-paranodestatus
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paranodestatus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestatus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestatus/meta.yaml>`_

   


.. conda:package:: ucsc-paranodestatus

   |downloads_ucsc-paranodestatus| |docker_ucsc-paranodestatus|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-paranodestatus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paranodestatus

   and update with::

      conda update ucsc-paranodestatus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-paranodestatus


.. |required_by_ucsc-paranodestatus| conda:required_by:: ucsc-paranodestatus
.. |downloads_ucsc-paranodestatus| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paranodestatus.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paranodestatus| image:: https://quay.io/repository/biocontainers/ucsc-paranodestatus/status
   :target: https://quay.io/repository/biocontainers/ucsc-paranodestatus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paranodestatus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paranodestatus/README.html

