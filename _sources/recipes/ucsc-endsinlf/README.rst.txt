.. title:: Package Recipe 'ucsc-endsinlf'
.. highlight: bash


ucsc-endsinlf
=============

.. conda:recipe:: ucsc-endsinlf
   :replaces_section_title:

   Check that last letter in files is end of line

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-endsinlf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-endsinlf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-endsinlf/meta.yaml>`_

   


.. conda:package:: ucsc-endsinlf

   |downloads_ucsc-endsinlf| |docker_ucsc-endsinlf|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-endsinlf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-endsinlf

   and update with::

      conda update ucsc-endsinlf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-endsinlf


.. |required_by_ucsc-endsinlf| conda:required_by:: ucsc-endsinlf
.. |downloads_ucsc-endsinlf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-endsinlf.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-endsinlf| image:: https://quay.io/repository/biocontainers/ucsc-endsinlf/status
   :target: https://quay.io/repository/biocontainers/ucsc-endsinlf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-endsinlf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-endsinlf/README.html

