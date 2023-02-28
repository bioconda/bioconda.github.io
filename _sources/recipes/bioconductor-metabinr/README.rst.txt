:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabinr'
.. highlight: bash

bioconductor-metabinr
=====================

.. conda:recipe:: bioconductor-metabinr
   :replaces_section_title:
   :noindex:

   Abundance and Compositional Based Binning of Metagenomes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/metabinR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabinr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr/meta.yaml>`_

   Provide functions for performing abundance and compositional based binning on metagenomic samples\, directly from FASTA or FASTQ files. Functions are implemented in Java and called via rJava. Parallel implementation that operates directly on input FASTA\/FASTQ files for fast execution.


.. conda:package:: bioconductor-metabinr

   |downloads_bioconductor-metabinr| |docker_bioconductor-metabinr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends openjdk: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabinr

   and update with::

      conda update bioconductor-metabinr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabinr:<tag>

   (see `bioconductor-metabinr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabinr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabinr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabinr
   :alt:   (downloads)
.. |docker_bioconductor-metabinr| image:: https://quay.io/repository/biocontainers/bioconductor-metabinr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabinr
.. _`bioconductor-metabinr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabinr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabinr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabinr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabinr/README.html