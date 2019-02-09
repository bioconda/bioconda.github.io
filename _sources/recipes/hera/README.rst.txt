.. title:: Package Recipe 'hera'
.. highlight: bash


hera
====

.. conda:recipe:: hera
   :replaces_section_title:

   hera is a bioinformatics tool that helps analyze RNA\-seq data\, providing base\-to\-base alignment BAM files\, transcript abundance estimation\, and fusion gene detection.

   :homepage: https://github.com/bioturing/hera
   :license: MIT
   :recipe: /`hera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera/meta.yaml>`_

   


.. conda:package:: hera

   |downloads_hera| |docker_hera|

   :versions: 1.1, 1.0.1, 1.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`hdf5` >=1.10.2,<1.10.3.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`jemalloc` >=4.5.0 :conda:package:`libdivsufsort`  :conda:package:`python`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_hera|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hera

   and update with::

      conda update hera

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hera


.. |required_by_hera| conda:required_by:: hera
.. |downloads_hera| image:: https://img.shields.io/conda/dn/bioconda/hera.svg?style=flat
   :alt:   (downloads)
.. |docker_hera| image:: https://quay.io/repository/biocontainers/hera/status
   :target: https://quay.io/repository/biocontainers/hera







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hera/README.html

