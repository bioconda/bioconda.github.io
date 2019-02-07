.. title:: Package Recipe 'cgat-apps'
.. highlight: bash


cgat-apps
=========

.. conda:recipe:: cgat-apps
   :replaces_section_title:

   Computational Genomics Analysis Toolkit

   :homepage: https://www.cgat.org/downloads/public/cgat/documentation
   :license: MIT
   :recipe: /`cgat-apps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps/meta.yaml>`_

   


.. conda:package:: cgat-apps

   |downloads_cgat-apps| |docker_cgat-apps|

   :versions: 0.5.3

   :depends: :conda:package:`alignlib-lite`  :conda:package:`bedtools`  :conda:package:`biopython`  :conda:package:`cgatcore`  :conda:package:`coreutils`  :conda:package:`cython`  :conda:package:`future`  :conda:package:`grep`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pybigwig`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`python-lzo`  :conda:package:`pyyaml`  :conda:package:`quicksect`  :conda:package:`scipy`  :conda:package:`setuptools`  :conda:package:`six`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-wigtobigwig`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cgat-apps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-apps

   and update with::

      conda update cgat-apps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgat-apps


.. |required_by_cgat-apps| conda:required_by:: cgat-apps
.. |downloads_cgat-apps| image:: https://img.shields.io/conda/dn/bioconda/cgat-apps.svg?style=flat
   :alt:   (downloads)
.. |docker_cgat-apps| image:: https://quay.io/repository/biocontainers/cgat-apps/status
   :target: https://quay.io/repository/biocontainers/cgat-apps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-apps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-apps/README.html

