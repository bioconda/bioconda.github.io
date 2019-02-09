.. title:: Package Recipe 'ucsc-hgloadout'
.. highlight: bash


ucsc-hgloadout
==============

.. conda:recipe:: ucsc-hgloadout
   :replaces_section_title:

   load RepeatMasker .out files into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadout/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadout

   |downloads_ucsc-hgloadout| |docker_ucsc-hgloadout|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadout|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadout

   and update with::

      conda update ucsc-hgloadout

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadout


.. |required_by_ucsc-hgloadout| conda:required_by:: ucsc-hgloadout
.. |downloads_ucsc-hgloadout| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadout.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadout| image:: https://quay.io/repository/biocontainers/ucsc-hgloadout/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadout







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadout/README.html

