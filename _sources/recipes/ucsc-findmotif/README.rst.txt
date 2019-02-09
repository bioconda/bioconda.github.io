.. title:: Package Recipe 'ucsc-findmotif'
.. highlight: bash


ucsc-findmotif
==============

.. conda:recipe:: ucsc-findmotif
   :replaces_section_title:

   find specified motif in sequence

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-findmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-findmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-findmotif/meta.yaml>`_

   


.. conda:package:: ucsc-findmotif

   |downloads_ucsc-findmotif| |docker_ucsc-findmotif|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-findmotif|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-findmotif

   and update with::

      conda update ucsc-findmotif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-findmotif


.. |required_by_ucsc-findmotif| conda:required_by:: ucsc-findmotif
.. |downloads_ucsc-findmotif| image:: https://img.shields.io/conda/dn/bioconda/ucsc-findmotif.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-findmotif| image:: https://quay.io/repository/biocontainers/ucsc-findmotif/status
   :target: https://quay.io/repository/biocontainers/ucsc-findmotif







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-findmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-findmotif/README.html

