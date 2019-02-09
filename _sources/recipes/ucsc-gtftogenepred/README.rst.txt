.. title:: Package Recipe 'ucsc-gtftogenepred'
.. highlight: bash


ucsc-gtftogenepred
==================

.. conda:recipe:: ucsc-gtftogenepred
   :replaces_section_title:

   convert a GTF file to a genePred

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gtftogenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred/meta.yaml>`_

   


.. conda:package:: ucsc-gtftogenepred

   |downloads_ucsc-gtftogenepred| |docker_ucsc-gtftogenepred|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-gtftogenepred|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-gtftogenepred

   and update with::

      conda update ucsc-gtftogenepred

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-gtftogenepred


.. |required_by_ucsc-gtftogenepred| conda:required_by:: ucsc-gtftogenepred
.. |downloads_ucsc-gtftogenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gtftogenepred.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-gtftogenepred| image:: https://quay.io/repository/biocontainers/ucsc-gtftogenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-gtftogenepred







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html

