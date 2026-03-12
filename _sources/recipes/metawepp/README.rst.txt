:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawepp'
.. highlight: bash

metawepp
========

.. conda:recipe:: metawepp
   :replaces_section_title:
   :noindex:

   metaWEPP\: Improving resolution of metagenomic analysis using WEPP

   :homepage: https://github.com/TurakhiaLab/metaWEPP
   :license: MIT / MIT
   :recipe: /`metawepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawepp/meta.yaml>`_

   metaWEPP extends the current species\-level resolution of existing metagenomic tools by providing near\-haplotype detection and abundance estimation for multi\-species samples. It utilizes a standard classifier to first segregate reads by species before applying the Wastewater\-Based Epidemiology using Phylogenetic Placements \(WEPP\) pipeline to each segregated dataset. By performing parsimonious read placement on species\-specific mutation\-annotated trees \(MATs\)\, metaWEPP identifies the haplotypes that best explain the data and flags Unaccounted Alleles—mutations observed in the sample but unexplained by selected haplotypes—potentially indicating the presence of novel variants.
   The pipeline enables high\-resolution surveillance across diverse pathogens and includes an interactive dashboard for visualizing identified haplotypes within their global phylogenies. This allows for detailed\, read\-level analysis of emerging lineages within complex metagenomic datasets.


.. conda:package:: metawepp

   |downloads_metawepp| |docker_metawepp|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends conda: ``>=24.7.1``
   :depends kraken2: ``>=2.1.0``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends pandas: 
   :depends pigz: 
   :depends python: ``>=3.11``
   :depends requests: 
   :depends snakemake-minimal: ``>=9.0``
   :depends viral_usher: 
   :depends wepp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metawepp

   and update with::

      mamba update metawepp

  To create a new environment, run::

      mamba create --name myenvname metawepp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawepp:<tag>

   (see `metawepp/tags`_ for valid values for ``<tag>``)


.. |downloads_metawepp| image:: https://img.shields.io/conda/dn/bioconda/metawepp.svg?style=flat
   :target: https://anaconda.org/bioconda/metawepp
   :alt:   (downloads)
.. |docker_metawepp| image:: https://quay.io/repository/biocontainers/metawepp/status
   :target: https://quay.io/repository/biocontainers/metawepp
.. _`metawepp/tags`: https://quay.io/repository/biocontainers/metawepp?tab=tags


.. raw:: html

    <script>
        var package = "metawepp";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawepp/README.html