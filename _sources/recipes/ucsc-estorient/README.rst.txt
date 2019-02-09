.. title:: Package Recipe 'ucsc-estorient'
.. highlight: bash


ucsc-estorient
==============

.. conda:recipe:: ucsc-estorient
   :replaces_section_title:

    Read ESTs from a database and determine orientation based on estOrientInfo table or direction in gbCdnaInfo table.  Update PSLs so that the strand reflects the direction of transcription. By default\, PSLs where the direction can\'t be determined are dropped. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-estorient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient/meta.yaml>`_

   


.. conda:package:: ucsc-estorient

   |downloads_ucsc-estorient| |docker_ucsc-estorient|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-estorient|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-estorient

   and update with::

      conda update ucsc-estorient

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-estorient


.. |required_by_ucsc-estorient| conda:required_by:: ucsc-estorient
.. |downloads_ucsc-estorient| image:: https://img.shields.io/conda/dn/bioconda/ucsc-estorient.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-estorient| image:: https://quay.io/repository/biocontainers/ucsc-estorient/status
   :target: https://quay.io/repository/biocontainers/ucsc-estorient







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-estorient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-estorient/README.html

