.. title:: Package Recipe 'ucsc-trfbig'
.. highlight: bash


ucsc-trfbig
===========

.. conda:recipe:: ucsc-trfbig
   :replaces_section_title:

   Mask tandem repeats on a big sequence file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-trfbig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-trfbig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-trfbig/meta.yaml>`_

   


.. conda:package:: ucsc-trfbig

   |downloads_ucsc-trfbig| |docker_ucsc-trfbig|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-trfbig|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-trfbig

   and update with::

      conda update ucsc-trfbig

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-trfbig


.. |required_by_ucsc-trfbig| conda:required_by:: ucsc-trfbig
.. |downloads_ucsc-trfbig| image:: https://img.shields.io/conda/dn/bioconda/ucsc-trfbig.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-trfbig| image:: https://quay.io/repository/biocontainers/ucsc-trfbig/status
   :target: https://quay.io/repository/biocontainers/ucsc-trfbig







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-trfbig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-trfbig/README.html

