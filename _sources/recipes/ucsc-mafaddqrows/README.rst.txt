.. title:: Package Recipe 'ucsc-mafaddqrows'
.. highlight: bash


ucsc-mafaddqrows
================

.. conda:recipe:: ucsc-mafaddqrows
   :replaces_section_title:

   Add quality data to a maf

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafaddqrows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddqrows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddqrows/meta.yaml>`_

   


.. conda:package:: ucsc-mafaddqrows

   |downloads_ucsc-mafaddqrows| |docker_ucsc-mafaddqrows|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafaddqrows|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafaddqrows

   and update with::

      conda update ucsc-mafaddqrows

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafaddqrows


.. |required_by_ucsc-mafaddqrows| conda:required_by:: ucsc-mafaddqrows
.. |downloads_ucsc-mafaddqrows| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafaddqrows.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafaddqrows| image:: https://quay.io/repository/biocontainers/ucsc-mafaddqrows/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafaddqrows







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafaddqrows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafaddqrows/README.html

