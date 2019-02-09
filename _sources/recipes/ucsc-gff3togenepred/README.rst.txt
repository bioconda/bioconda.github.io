.. title:: Package Recipe 'ucsc-gff3togenepred'
.. highlight: bash


ucsc-gff3togenepred
===================

.. conda:recipe:: ucsc-gff3togenepred
   :replaces_section_title:

   convert a GFF3 file to a genePred file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gff3togenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gff3togenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gff3togenepred/meta.yaml>`_

   


.. conda:package:: ucsc-gff3togenepred

   |downloads_ucsc-gff3togenepred| |docker_ucsc-gff3togenepred|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-gff3togenepred|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-gff3togenepred

   and update with::

      conda update ucsc-gff3togenepred

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-gff3togenepred


.. |required_by_ucsc-gff3togenepred| conda:required_by:: ucsc-gff3togenepred
.. |downloads_ucsc-gff3togenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gff3togenepred.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-gff3togenepred| image:: https://quay.io/repository/biocontainers/ucsc-gff3togenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-gff3togenepred







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gff3togenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gff3togenepred/README.html

