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

      

   
   :depends on conda: ``>=24.7.1``
   :depends on kraken2: ``>=2.1.0``
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on pandas: 
   :depends on pigz: 
   :depends on python: ``>=3.11``
   :depends on requests: 
   :depends on snakemake-minimal: ``>=9.0``
   :depends on viral_usher: 
   :depends on wepp: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install metawepp

to add into an existing workspace instead, run::

    pixi add metawepp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metawepp

Alternatively, to install into a new environment, run::

    conda create -n envname metawepp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metawepp:<tag>

(see `metawepp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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