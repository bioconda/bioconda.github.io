.. title:: Package Recipe 'ucsc-nettoaxt'
.. highlight: bash


ucsc-nettoaxt
=============

.. conda:recipe:: ucsc-nettoaxt
   :replaces_section_title:

   Convert net \(and chain\) to axt.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-nettoaxt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-nettoaxt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-nettoaxt/meta.yaml>`_

   


.. conda:package:: ucsc-nettoaxt

   |downloads_ucsc-nettoaxt| |docker_ucsc-nettoaxt|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-nettoaxt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-nettoaxt

   and update with::

      conda update ucsc-nettoaxt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-nettoaxt


.. |required_by_ucsc-nettoaxt| conda:required_by:: ucsc-nettoaxt
.. |downloads_ucsc-nettoaxt| image:: https://img.shields.io/conda/dn/bioconda/ucsc-nettoaxt.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-nettoaxt| image:: https://quay.io/repository/biocontainers/ucsc-nettoaxt/status
   :target: https://quay.io/repository/biocontainers/ucsc-nettoaxt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-nettoaxt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-nettoaxt/README.html

