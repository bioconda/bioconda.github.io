.. title:: Package Recipe 'ucsc-hgloadbed'
.. highlight: bash


ucsc-hgloadbed
==============

.. conda:recipe:: ucsc-hgloadbed
   :replaces_section_title:

   Load a generic bed file into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadbed/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadbed

   |downloads_ucsc-hgloadbed| |docker_ucsc-hgloadbed|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadbed

   and update with::

      conda update ucsc-hgloadbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadbed


.. |required_by_ucsc-hgloadbed| conda:required_by:: ucsc-hgloadbed
.. |downloads_ucsc-hgloadbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadbed| image:: https://quay.io/repository/biocontainers/ucsc-hgloadbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadbed/README.html

