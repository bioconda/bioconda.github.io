.. title:: Package Recipe 'ucsc-genepredsinglecover'
.. highlight: bash


ucsc-genepredsinglecover
========================

.. conda:recipe:: ucsc-genepredsinglecover
   :replaces_section_title:

   create single\-coverage genePred files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredsinglecover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredsinglecover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredsinglecover/meta.yaml>`_

   


.. conda:package:: ucsc-genepredsinglecover

   |downloads_ucsc-genepredsinglecover| |docker_ucsc-genepredsinglecover|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-genepredsinglecover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredsinglecover

   and update with::

      conda update ucsc-genepredsinglecover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-genepredsinglecover


.. |required_by_ucsc-genepredsinglecover| conda:required_by:: ucsc-genepredsinglecover
.. |downloads_ucsc-genepredsinglecover| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredsinglecover.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredsinglecover| image:: https://quay.io/repository/biocontainers/ucsc-genepredsinglecover/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredsinglecover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredsinglecover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredsinglecover/README.html

