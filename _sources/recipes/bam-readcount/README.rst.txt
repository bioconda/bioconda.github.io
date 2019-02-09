.. title:: Package Recipe 'bam-readcount'
.. highlight: bash


bam-readcount
=============

.. conda:recipe:: bam-readcount
   :replaces_section_title:

   bam\-readcount generates metrics at single nucleotide positions.

   :homepage: https://github.com/genome/bam-readcount
   :license: MIT
   :recipe: /`bam-readcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount/meta.yaml>`_

   


.. conda:package:: bam-readcount

   |downloads_bam-readcount| |docker_bam-readcount|

   :versions: 0.8

   :depends: :conda:package:`ncurses`  :conda:package:`perl` 5.22.0* :conda:package:`python` 2.7* :conda:package:`zlib`  

   :required~by: |required_by_bam-readcount|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bam-readcount

   and update with::

      conda update bam-readcount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bam-readcount


.. |required_by_bam-readcount| conda:required_by:: bam-readcount
.. |downloads_bam-readcount| image:: https://img.shields.io/conda/dn/bioconda/bam-readcount.svg?style=flat
   :alt:   (downloads)
.. |docker_bam-readcount| image:: https://quay.io/repository/biocontainers/bam-readcount/status
   :target: https://quay.io/repository/biocontainers/bam-readcount







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam-readcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam-readcount/README.html

