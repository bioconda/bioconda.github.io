:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bax2bam'
.. highlight: bash

bax2bam
=======

.. conda:recipe:: bax2bam
   :replaces_section_title:

   bax2bam converts the legacy PacBio basecall format \(bax.h5\) into the BAM basecall format

   :homepage: https://github.com/PacificBiosciences/bax2bam
   :license: BSD-3-Clause-Clear
   :recipe: /`bax2bam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam/meta.yaml>`_

   


.. conda:package:: bax2bam

   |downloads_bax2bam| |docker_bax2bam|

   :versions: 0.0.9-5, 0.0.9-4, 0.0.9-3, 0.0.9-1, 0.0.9-0
   
   :depends blasr_libcpp: 5.3.1.*
   
   :depends hdf5: >=1.10.3,<1.10.4.0a0
   
   :depends pbbam: 0.19.0.*
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bax2bam

   and update with::

      conda update bax2bam

   or use the docker container::

      docker pull quay.io/biocontainers/bax2bam:<tag>

   (see `bax2bam/tags`_ for valid values for ``<tag>``)


.. |downloads_bax2bam| image:: https://img.shields.io/conda/dn/bioconda/bax2bam.svg?style=flat
   :alt:   (downloads)
.. |docker_bax2bam| image:: https://quay.io/repository/biocontainers/bax2bam/status
   :target: https://quay.io/repository/biocontainers/bax2bam
.. _`bax2bam/tags`: https://quay.io/repository/biocontainers/bax2bam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bax2bam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bax2bam/README.html