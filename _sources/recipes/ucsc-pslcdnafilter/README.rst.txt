.. title:: Package Recipe 'ucsc-pslcdnafilter'
.. highlight: bash


ucsc-pslcdnafilter
==================

.. conda:recipe:: ucsc-pslcdnafilter
   :replaces_section_title:

    Filter cDNA alignments in psl format.  Filtering criteria are comparative\, selecting near best in genome alignments for each given cDNA and non\-comparative\, based only on the quality of an individual alignment. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslcdnafilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslcdnafilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslcdnafilter/meta.yaml>`_

   


.. conda:package:: ucsc-pslcdnafilter

   |downloads_ucsc-pslcdnafilter| |docker_ucsc-pslcdnafilter|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslcdnafilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslcdnafilter

   and update with::

      conda update ucsc-pslcdnafilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslcdnafilter


.. |required_by_ucsc-pslcdnafilter| conda:required_by:: ucsc-pslcdnafilter
.. |downloads_ucsc-pslcdnafilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslcdnafilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslcdnafilter| image:: https://quay.io/repository/biocontainers/ucsc-pslcdnafilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslcdnafilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslcdnafilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslcdnafilter/README.html

