:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantpi'
.. highlight: bash

quantpi
=======

.. conda:recipe:: quantpi
   :replaces_section_title:
   :noindex:

   A general profiling system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/quantpi
   :license: GPL / GPL-3.0-only
   :recipe: /`quantpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantpi/meta.yaml>`_
   :links: biotools: :biotools:`quantpi`

   


.. conda:package:: quantpi

   |downloads_quantpi| |docker_quantpi|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie2: 
   :depends bracken: ``>=2.7``
   :depends bwa: 
   :depends coverm: ``>=0.6.1``
   :depends fastp: 
   :depends fastqc: 
   :depends humann: 
   :depends kmcp: ``>=0.8.2``
   :depends kraken2: 
   :depends krakentools: ``>=1.2``
   :depends krona: 
   :depends matplotlib-base: 
   :depends metaphlan: 
   :depends multiqc: 
   :depends natsort: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pigz: 
   :depends python: 
   :depends ruamel.yaml: 
   :depends sambamba: 
   :depends samtools: 
   :depends seaborn: 
   :depends seqkit: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quantpi

   and update with::

      conda update quantpi

   or use the docker container::

      docker pull quay.io/biocontainers/quantpi:<tag>

   (see `quantpi/tags`_ for valid values for ``<tag>``)


.. |downloads_quantpi| image:: https://img.shields.io/conda/dn/bioconda/quantpi.svg?style=flat
   :target: https://anaconda.org/bioconda/quantpi
   :alt:   (downloads)
.. |docker_quantpi| image:: https://quay.io/repository/biocontainers/quantpi/status
   :target: https://quay.io/repository/biocontainers/quantpi
.. _`quantpi/tags`: https://quay.io/repository/biocontainers/quantpi?tab=tags


.. raw:: html

    <script>
        var package = "quantpi";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantpi/README.html