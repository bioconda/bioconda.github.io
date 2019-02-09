.. title:: Package Recipe 'ucsc-oligomatch'
.. highlight: bash


ucsc-oligomatch
===============

.. conda:recipe:: ucsc-oligomatch
   :replaces_section_title:

   find perfect matches in sequence.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-oligomatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-oligomatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-oligomatch/meta.yaml>`_

   


.. conda:package:: ucsc-oligomatch

   |downloads_ucsc-oligomatch| |docker_ucsc-oligomatch|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-oligomatch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-oligomatch

   and update with::

      conda update ucsc-oligomatch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-oligomatch


.. |required_by_ucsc-oligomatch| conda:required_by:: ucsc-oligomatch
.. |downloads_ucsc-oligomatch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-oligomatch.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-oligomatch| image:: https://quay.io/repository/biocontainers/ucsc-oligomatch/status
   :target: https://quay.io/repository/biocontainers/ucsc-oligomatch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-oligomatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-oligomatch/README.html

