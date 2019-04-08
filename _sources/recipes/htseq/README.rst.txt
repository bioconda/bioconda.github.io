:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseq'
.. highlight: bash

htseq
=====

.. conda:recipe:: htseq
   :replaces_section_title:

   HTSeq is a Python library to facilitate processing and analysis of data from high\-throughput sequencing \(HTS\) experiments.

   :homepage: https://github.com/simon-anders/htseq
   :license: GPL-3.0
   :recipe: /`htseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq/meta.yaml>`_
   :links: biotools: :biotools:`htseq`, doi: :doi:`10.1093/bioinformatics/btu638`

   


.. conda:package:: htseq

   |downloads_htseq| |docker_htseq|

   :versions: 0.11.2-1, 0.11.2-0, 0.11.1-0, 0.11.0-1, 0.11.0-0, 0.9.1-2, 0.9.1-1, 0.9.1-0, 0.7.2-2, 0.7.2-1, 0.7.2-0, 0.6.1.post1-3, 0.6.1.post1-2, 0.6.1.post1-1, 0.6.1.post1-0, 0.6.1-2, 0.6.1-1, 0.6.1-0, 0.6.1p1-1, 0.6.1p1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends matplotlib: >=1.4
   :depends numpy: >=1.9.3,<2.0a0
   :depends pysam: >=0.9.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htseq

   and update with::

      conda update htseq

   or use the docker container::

      docker pull quay.io/biocontainers/htseq:<tag>

   (see `htseq/tags`_ for valid values for ``<tag>``)


.. |downloads_htseq| image:: https://img.shields.io/conda/dn/bioconda/htseq.svg?style=flat
   :alt:   (downloads)
.. |docker_htseq| image:: https://quay.io/repository/biocontainers/htseq/status
   :target: https://quay.io/repository/biocontainers/htseq
.. _`htseq/tags`: https://quay.io/repository/biocontainers/htseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseq/README.html