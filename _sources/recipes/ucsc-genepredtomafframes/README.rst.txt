.. title:: Package Recipe 'ucsc-genepredtomafframes'
.. highlight: bash


ucsc-genepredtomafframes
========================

.. conda:recipe:: ucsc-genepredtomafframes
   :replaces_section_title:

   create mafFrames tables from a genePreds

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtomafframes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtomafframes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtomafframes/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtomafframes

   |downloads_ucsc-genepredtomafframes| |docker_ucsc-genepredtomafframes|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-genepredtomafframes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredtomafframes

   and update with::

      conda update ucsc-genepredtomafframes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-genepredtomafframes


.. |required_by_ucsc-genepredtomafframes| conda:required_by:: ucsc-genepredtomafframes
.. |downloads_ucsc-genepredtomafframes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtomafframes.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredtomafframes| image:: https://quay.io/repository/biocontainers/ucsc-genepredtomafframes/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtomafframes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtomafframes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtomafframes/README.html

