.. title:: Package Recipe 'ucsc-pslstats'
.. highlight: bash


ucsc-pslstats
=============

.. conda:recipe:: ucsc-pslstats
   :replaces_section_title:

   collect statistics from a psl file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslstats/meta.yaml>`_

   


.. conda:package:: ucsc-pslstats

   |downloads_ucsc-pslstats| |docker_ucsc-pslstats|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslstats

   and update with::

      conda update ucsc-pslstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslstats


.. |required_by_ucsc-pslstats| conda:required_by:: ucsc-pslstats
.. |downloads_ucsc-pslstats| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslstats.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslstats| image:: https://quay.io/repository/biocontainers/ucsc-pslstats/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslstats/README.html

