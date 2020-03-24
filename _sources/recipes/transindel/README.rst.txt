:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transindel'
.. highlight: bash

transindel
==========

.. conda:recipe:: transindel
   :replaces_section_title:

   transIndel is used to detect indels \(insertions and deletions\) from DNA\-seq or RNA\-seq data by parsing chimeric alignments from BWA\-MEM..

   :homepage: https://github.com/cauyrd/transIndel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`transindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel/meta.yaml>`_

   


.. conda:package:: transindel

   |downloads_transindel| |docker_transindel|

   :versions: 1.0-0
   
   :depends htseq: >=0.6.1
   :depends pysam: >=0.13.0
   :depends python: <=3
   :depends samtools: >=1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transindel

   and update with::

      conda update transindel

   or use the docker container::

      docker pull quay.io/biocontainers/transindel:<tag>

   (see `transindel/tags`_ for valid values for ``<tag>``)


.. |downloads_transindel| image:: https://img.shields.io/conda/dn/bioconda/transindel.svg?style=flat
   :target: https://anaconda.org/bioconda/transindel
   :alt:   (downloads)
.. |docker_transindel| image:: https://quay.io/repository/biocontainers/transindel/status
   :target: https://quay.io/repository/biocontainers/transindel
.. _`transindel/tags`: https://quay.io/repository/biocontainers/transindel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transindel/README.html