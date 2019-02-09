.. title:: Package Recipe 'ucsc-faonerecord'
.. highlight: bash


ucsc-faonerecord
================

.. conda:recipe:: ucsc-faonerecord
   :replaces_section_title:

   Extract a single record from a .FA file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-faonerecord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-faonerecord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-faonerecord/meta.yaml>`_

   


.. conda:package:: ucsc-faonerecord

   |downloads_ucsc-faonerecord| |docker_ucsc-faonerecord|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-faonerecord|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-faonerecord

   and update with::

      conda update ucsc-faonerecord

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-faonerecord


.. |required_by_ucsc-faonerecord| conda:required_by:: ucsc-faonerecord
.. |downloads_ucsc-faonerecord| image:: https://img.shields.io/conda/dn/bioconda/ucsc-faonerecord.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-faonerecord| image:: https://quay.io/repository/biocontainers/ucsc-faonerecord/status
   :target: https://quay.io/repository/biocontainers/ucsc-faonerecord







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-faonerecord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-faonerecord/README.html

