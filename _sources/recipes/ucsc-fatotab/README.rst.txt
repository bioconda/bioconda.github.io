.. title:: Package Recipe 'ucsc-fatotab'
.. highlight: bash


ucsc-fatotab
============

.. conda:recipe:: ucsc-fatotab
   :replaces_section_title:

   convert fa file to tab separated file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatotab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatotab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatotab/meta.yaml>`_

   


.. conda:package:: ucsc-fatotab

   |downloads_ucsc-fatotab| |docker_ucsc-fatotab|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fatotab|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fatotab

   and update with::

      conda update ucsc-fatotab

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fatotab


.. |required_by_ucsc-fatotab| conda:required_by:: ucsc-fatotab
.. |downloads_ucsc-fatotab| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatotab.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fatotab| image:: https://quay.io/repository/biocontainers/ucsc-fatotab/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatotab







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatotab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatotab/README.html

