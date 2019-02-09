.. title:: Package Recipe 'ucsc-fatotwobit'
.. highlight: bash


ucsc-fatotwobit
===============

.. conda:recipe:: ucsc-fatotwobit
   :replaces_section_title:

   Convert DNA from fasta to 2bit format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatotwobit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatotwobit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatotwobit/meta.yaml>`_

   


.. conda:package:: ucsc-fatotwobit

   |downloads_ucsc-fatotwobit| |docker_ucsc-fatotwobit|

   :versions: 366, 357, 353, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fatotwobit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fatotwobit

   and update with::

      conda update ucsc-fatotwobit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fatotwobit


.. |required_by_ucsc-fatotwobit| conda:required_by:: ucsc-fatotwobit
.. |downloads_ucsc-fatotwobit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatotwobit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fatotwobit| image:: https://quay.io/repository/biocontainers/ucsc-fatotwobit/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatotwobit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatotwobit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatotwobit/README.html

