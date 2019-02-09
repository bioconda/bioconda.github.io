.. title:: Package Recipe 'ucsc-fapolyasizes'
.. highlight: bash


ucsc-fapolyasizes
=================

.. conda:recipe:: ucsc-fapolyasizes
   :replaces_section_title:

   get poly A sizes

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fapolyasizes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fapolyasizes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fapolyasizes/meta.yaml>`_

   


.. conda:package:: ucsc-fapolyasizes

   |downloads_ucsc-fapolyasizes| |docker_ucsc-fapolyasizes|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fapolyasizes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fapolyasizes

   and update with::

      conda update ucsc-fapolyasizes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fapolyasizes


.. |required_by_ucsc-fapolyasizes| conda:required_by:: ucsc-fapolyasizes
.. |downloads_ucsc-fapolyasizes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fapolyasizes.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fapolyasizes| image:: https://quay.io/repository/biocontainers/ucsc-fapolyasizes/status
   :target: https://quay.io/repository/biocontainers/ucsc-fapolyasizes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fapolyasizes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fapolyasizes/README.html

