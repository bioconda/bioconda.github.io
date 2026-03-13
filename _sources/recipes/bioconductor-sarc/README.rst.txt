:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sarc'
.. highlight: bash

bioconductor-sarc
=================

.. conda:recipe:: bioconductor-sarc
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Regions with CNVs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SARC.html
   :license: GPL-3
   :recipe: /`bioconductor-sarc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarc/meta.yaml>`_

   Imports a cov\/coverage file \(normalised read coverages from BAM files\) and a cnv file \(list of CNVs \- similiar to a BED file\) from WES\/ WGS CNV \(copy number variation\) detection pipelines and utilises several metrics to weigh the likelihood of a sample containing a detected CNV being a true CNV or a false positive. Highly useful for diagnostic testing to filter out false positives to provide clinicians with fewer variants to interpret. SARC uniquely only used cov and csv \(similiar to BED file\) files which are the common CNV pipeline calling filetypes\, and can be used as to supplement the Interactive Genome Browser \(IGV\) to generate many figures automatedly\, which can be especially helpful in large cohorts with 100s\-1000s of patients.


.. conda:package:: bioconductor-sarc

   |downloads_bioconductor-sarc| |docker_bioconductor-sarc|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-raggedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-desctools: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-gtable: 
   :depends on r-metap: 
   :depends on r-plotly: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-sarc

to add into an existing workspace instead, run::

    pixi add bioconductor-sarc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sarc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sarc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sarc:<tag>

(see `bioconductor-sarc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sarc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sarc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sarc
   :alt:   (downloads)
.. |docker_bioconductor-sarc| image:: https://quay.io/repository/biocontainers/bioconductor-sarc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sarc
.. _`bioconductor-sarc/tags`: https://quay.io/repository/biocontainers/bioconductor-sarc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sarc";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sarc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sarc/README.html