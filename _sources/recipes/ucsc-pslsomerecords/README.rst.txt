.. title:: Package Recipe 'ucsc-pslsomerecords'
.. highlight: bash


ucsc-pslsomerecords
===================

.. conda:recipe:: ucsc-pslsomerecords
   :replaces_section_title:

   Extract multiple psl records

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslsomerecords <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsomerecords>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsomerecords/meta.yaml>`_

   


.. conda:package:: ucsc-pslsomerecords

   |downloads_ucsc-pslsomerecords| |docker_ucsc-pslsomerecords|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslsomerecords|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslsomerecords

   and update with::

      conda update ucsc-pslsomerecords

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslsomerecords


.. |required_by_ucsc-pslsomerecords| conda:required_by:: ucsc-pslsomerecords
.. |downloads_ucsc-pslsomerecords| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslsomerecords.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslsomerecords| image:: https://quay.io/repository/biocontainers/ucsc-pslsomerecords/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslsomerecords







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslsomerecords/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslsomerecords/README.html

