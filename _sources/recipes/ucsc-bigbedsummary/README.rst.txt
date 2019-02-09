.. title:: Package Recipe 'ucsc-bigbedsummary'
.. highlight: bash


ucsc-bigbedsummary
==================

.. conda:recipe:: ucsc-bigbedsummary
   :replaces_section_title:

   Extract summary information from a bigBed file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbedsummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary/meta.yaml>`_

   


.. conda:package:: ucsc-bigbedsummary

   |downloads_ucsc-bigbedsummary| |docker_ucsc-bigbedsummary|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigbedsummary|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigbedsummary

   and update with::

      conda update ucsc-bigbedsummary

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigbedsummary


.. |required_by_ucsc-bigbedsummary| conda:required_by:: ucsc-bigbedsummary
.. |downloads_ucsc-bigbedsummary| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbedsummary.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigbedsummary| image:: https://quay.io/repository/biocontainers/ucsc-bigbedsummary/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbedsummary







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html

