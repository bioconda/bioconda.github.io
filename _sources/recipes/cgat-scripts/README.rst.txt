.. title:: Package Recipe 'cgat-scripts'
.. highlight: bash


cgat-scripts
============

.. conda:recipe:: cgat-scripts
   :replaces_section_title:

   Computational Genomics Analysis Toolkit

   :homepage: https://www.cgat.org/downloads/public/cgat/documentation
   :license: BSD
   :recipe: /`cgat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts/meta.yaml>`_

   


.. conda:package:: cgat-scripts

   |downloads_cgat-scripts| |docker_cgat-scripts|

   :versions: 0.3.2, 0.3.1, 0.3.0, 0.2.7, 0.2.6

   :depends: :conda:package:`alignlib-lite` 0.3.* :conda:package:`bedtools` 2.26.* :conda:package:`biopython` 1.70.* :conda:package:`coreutils` 8.25 :conda:package:`cython` 0.27.* :conda:package:`future` 0.16.* :conda:package:`grep` 2.14 :conda:package:`libgcc`  :conda:package:`libpng` 1.6.* :conda:package:`matplotlib` 2.1.* :conda:package:`numpy` 1.12.* :conda:package:`pandas` 0.21.* :conda:package:`pybedtools` 0.7.* :conda:package:`pybigwig` 0.3.* :conda:package:`pysam` 0.13.* :conda:package:`python` 3.5* :conda:package:`python-lzo` 1.11.* :conda:package:`pyyaml` 3.12.* :conda:package:`rpy2` 2.8.* :conda:package:`scipy` 0.19.* :conda:package:`six` 1.11.* :conda:package:`ucsc-bedgraphtobigwig` 357 :conda:package:`ucsc-bedtobigbed` 357 :conda:package:`ucsc-wigtobigwig` 357 :conda:package:`zlib` 1.2.* 

   :required~by: |required_by_cgat-scripts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-scripts

   and update with::

      conda update cgat-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgat-scripts


.. |required_by_cgat-scripts| conda:required_by:: cgat-scripts
.. |downloads_cgat-scripts| image:: https://img.shields.io/conda/dn/bioconda/cgat-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_cgat-scripts| image:: https://quay.io/repository/biocontainers/cgat-scripts/status
   :target: https://quay.io/repository/biocontainers/cgat-scripts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-scripts/README.html

