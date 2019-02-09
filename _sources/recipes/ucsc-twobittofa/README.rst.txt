.. title:: Package Recipe 'ucsc-twobittofa'
.. highlight: bash


ucsc-twobittofa
===============

.. conda:recipe:: ucsc-twobittofa
   :replaces_section_title:

   Convert all or part of .2bit file to fasta

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobittofa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobittofa/meta.yaml>`_

   


.. conda:package:: ucsc-twobittofa

   |downloads_ucsc-twobittofa| |docker_ucsc-twobittofa|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-twobittofa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-twobittofa

   and update with::

      conda update ucsc-twobittofa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-twobittofa


.. |required_by_ucsc-twobittofa| conda:required_by:: ucsc-twobittofa
.. |downloads_ucsc-twobittofa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobittofa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-twobittofa| image:: https://quay.io/repository/biocontainers/ucsc-twobittofa/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobittofa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobittofa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobittofa/README.html

