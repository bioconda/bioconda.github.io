.. title:: Package Recipe 'ucsc-subchar'
.. highlight: bash


ucsc-subchar
============

.. conda:recipe:: ucsc-subchar
   :replaces_section_title:

   Substitute one character for another throughout a file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-subchar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-subchar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-subchar/meta.yaml>`_

   


.. conda:package:: ucsc-subchar

   |downloads_ucsc-subchar| |docker_ucsc-subchar|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-subchar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-subchar

   and update with::

      conda update ucsc-subchar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-subchar


.. |required_by_ucsc-subchar| conda:required_by:: ucsc-subchar
.. |downloads_ucsc-subchar| image:: https://img.shields.io/conda/dn/bioconda/ucsc-subchar.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-subchar| image:: https://quay.io/repository/biocontainers/ucsc-subchar/status
   :target: https://quay.io/repository/biocontainers/ucsc-subchar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-subchar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-subchar/README.html

