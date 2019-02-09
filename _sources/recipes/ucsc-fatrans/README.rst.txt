.. title:: Package Recipe 'ucsc-fatrans'
.. highlight: bash


ucsc-fatrans
============

.. conda:recipe:: ucsc-fatrans
   :replaces_section_title:

   Translate DNA .fa file to peptide

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatrans/meta.yaml>`_

   


.. conda:package:: ucsc-fatrans

   |downloads_ucsc-fatrans| |docker_ucsc-fatrans|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fatrans|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fatrans

   and update with::

      conda update ucsc-fatrans

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fatrans


.. |required_by_ucsc-fatrans| conda:required_by:: ucsc-fatrans
.. |downloads_ucsc-fatrans| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatrans.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fatrans| image:: https://quay.io/repository/biocontainers/ucsc-fatrans/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatrans







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatrans/README.html

