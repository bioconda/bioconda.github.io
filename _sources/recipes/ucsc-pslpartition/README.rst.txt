.. title:: Package Recipe 'ucsc-pslpartition'
.. highlight: bash


ucsc-pslpartition
=================

.. conda:recipe:: ucsc-pslpartition
   :replaces_section_title:

   split PSL files into non\-overlapping sets

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslpartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpartition/meta.yaml>`_

   


.. conda:package:: ucsc-pslpartition

   |downloads_ucsc-pslpartition| |docker_ucsc-pslpartition|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslpartition|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslpartition

   and update with::

      conda update ucsc-pslpartition

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslpartition


.. |required_by_ucsc-pslpartition| conda:required_by:: ucsc-pslpartition
.. |downloads_ucsc-pslpartition| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslpartition.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslpartition| image:: https://quay.io/repository/biocontainers/ucsc-pslpartition/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslpartition







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslpartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslpartition/README.html

