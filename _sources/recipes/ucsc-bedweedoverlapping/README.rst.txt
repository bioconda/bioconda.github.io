.. title:: Package Recipe 'ucsc-bedweedoverlapping'
.. highlight: bash


ucsc-bedweedoverlapping
=======================

.. conda:recipe:: ucsc-bedweedoverlapping
   :replaces_section_title:

   Filter out beds that overlap a \'weed.bed\' file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedweedoverlapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedweedoverlapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedweedoverlapping/meta.yaml>`_

   


.. conda:package:: ucsc-bedweedoverlapping

   |downloads_ucsc-bedweedoverlapping| |docker_ucsc-bedweedoverlapping|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedweedoverlapping|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedweedoverlapping

   and update with::

      conda update ucsc-bedweedoverlapping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedweedoverlapping


.. |required_by_ucsc-bedweedoverlapping| conda:required_by:: ucsc-bedweedoverlapping
.. |downloads_ucsc-bedweedoverlapping| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedweedoverlapping.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedweedoverlapping| image:: https://quay.io/repository/biocontainers/ucsc-bedweedoverlapping/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedweedoverlapping







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedweedoverlapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedweedoverlapping/README.html

