.. title:: Package Recipe 'ucsc-rowstocols'
.. highlight: bash


ucsc-rowstocols
===============

.. conda:recipe:: ucsc-rowstocols
   :replaces_section_title:

   Convert rows to columns and vice versa in a text file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-rowstocols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rowstocols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rowstocols/meta.yaml>`_

   


.. conda:package:: ucsc-rowstocols

   |downloads_ucsc-rowstocols| |docker_ucsc-rowstocols|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-rowstocols|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-rowstocols

   and update with::

      conda update ucsc-rowstocols

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-rowstocols


.. |required_by_ucsc-rowstocols| conda:required_by:: ucsc-rowstocols
.. |downloads_ucsc-rowstocols| image:: https://img.shields.io/conda/dn/bioconda/ucsc-rowstocols.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-rowstocols| image:: https://quay.io/repository/biocontainers/ucsc-rowstocols/status
   :target: https://quay.io/repository/biocontainers/ucsc-rowstocols







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-rowstocols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-rowstocols/README.html

