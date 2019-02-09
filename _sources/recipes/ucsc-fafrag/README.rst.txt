.. title:: Package Recipe 'ucsc-fafrag'
.. highlight: bash


ucsc-fafrag
===========

.. conda:recipe:: ucsc-fafrag
   :replaces_section_title:

   Extract a piece of DNA from a .fa file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fafrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafrag/meta.yaml>`_

   


.. conda:package:: ucsc-fafrag

   |downloads_ucsc-fafrag| |docker_ucsc-fafrag|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fafrag|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fafrag

   and update with::

      conda update ucsc-fafrag

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fafrag


.. |required_by_ucsc-fafrag| conda:required_by:: ucsc-fafrag
.. |downloads_ucsc-fafrag| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fafrag.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fafrag| image:: https://quay.io/repository/biocontainers/ucsc-fafrag/status
   :target: https://quay.io/repository/biocontainers/ucsc-fafrag







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fafrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fafrag/README.html

