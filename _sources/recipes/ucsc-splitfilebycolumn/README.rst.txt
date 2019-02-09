.. title:: Package Recipe 'ucsc-splitfilebycolumn'
.. highlight: bash


ucsc-splitfilebycolumn
======================

.. conda:recipe:: ucsc-splitfilebycolumn
   :replaces_section_title:

   Split text input into files named by column value

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-splitfilebycolumn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-splitfilebycolumn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-splitfilebycolumn/meta.yaml>`_

   


.. conda:package:: ucsc-splitfilebycolumn

   |downloads_ucsc-splitfilebycolumn| |docker_ucsc-splitfilebycolumn|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-splitfilebycolumn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-splitfilebycolumn

   and update with::

      conda update ucsc-splitfilebycolumn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-splitfilebycolumn


.. |required_by_ucsc-splitfilebycolumn| conda:required_by:: ucsc-splitfilebycolumn
.. |downloads_ucsc-splitfilebycolumn| image:: https://img.shields.io/conda/dn/bioconda/ucsc-splitfilebycolumn.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-splitfilebycolumn| image:: https://quay.io/repository/biocontainers/ucsc-splitfilebycolumn/status
   :target: https://quay.io/repository/biocontainers/ucsc-splitfilebycolumn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-splitfilebycolumn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-splitfilebycolumn/README.html

