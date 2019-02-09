.. title:: Package Recipe 'ucsc-bedgeneparts'
.. highlight: bash


ucsc-bedgeneparts
=================

.. conda:recipe:: ucsc-bedgeneparts
   :replaces_section_title:

   Given a bed\, spit out promoter\, first exon\, or all introns.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedgeneparts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgeneparts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgeneparts/meta.yaml>`_

   


.. conda:package:: ucsc-bedgeneparts

   |downloads_ucsc-bedgeneparts| |docker_ucsc-bedgeneparts|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedgeneparts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedgeneparts

   and update with::

      conda update ucsc-bedgeneparts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedgeneparts


.. |required_by_ucsc-bedgeneparts| conda:required_by:: ucsc-bedgeneparts
.. |downloads_ucsc-bedgeneparts| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedgeneparts.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedgeneparts| image:: https://quay.io/repository/biocontainers/ucsc-bedgeneparts/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedgeneparts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedgeneparts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedgeneparts/README.html

