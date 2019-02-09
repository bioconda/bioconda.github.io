.. title:: Package Recipe 'ucsc-hgloadoutjoined'
.. highlight: bash


ucsc-hgloadoutjoined
====================

.. conda:recipe:: ucsc-hgloadoutjoined
   :replaces_section_title:

   load new style \(2014\) RepeatMasker .out files into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadoutjoined <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadoutjoined>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadoutjoined/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadoutjoined

   |downloads_ucsc-hgloadoutjoined| |docker_ucsc-hgloadoutjoined|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadoutjoined|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadoutjoined

   and update with::

      conda update ucsc-hgloadoutjoined

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadoutjoined


.. |required_by_ucsc-hgloadoutjoined| conda:required_by:: ucsc-hgloadoutjoined
.. |downloads_ucsc-hgloadoutjoined| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadoutjoined.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadoutjoined| image:: https://quay.io/repository/biocontainers/ucsc-hgloadoutjoined/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadoutjoined







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadoutjoined/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadoutjoined/README.html

