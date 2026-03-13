:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanotator'
.. highlight: bash

bioconductor-nanotator
======================

.. conda:recipe:: bioconductor-nanotator
   :replaces_section_title:
   :noindex:

   Next generation structural variant annotation and classification

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/nanotatoR.html
   :license: file LICENSE
   :recipe: /`bioconductor-nanotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotator/meta.yaml>`_

   Whole genome sequencing \(WGS\) has successfully been used to identify single\-nucleotide variants \(SNV\)\, small insertions and deletions \(INDELs\) and\, more recently\, small copy number variants \(CNVs\). However\, due to utilization of short reads\, it is not well suited for identification of structural variants \(SV\). Optical mapping \(OM\) from Bionano Genomics\, utilizes long fluorescently labeled megabase size DNA molecules for de novo genome assembly and identification of SVs with a much higher sensitivity than WGS. Nevertheless\, currently available SV annotation tools have limited number of functions. NanotatoR is an R package written to provide a set of annotations for SVs identified by OM. It uses Database of Genomic Variants \(DGV\)\, Database of Chromosomal Imbalance and Phenotype in Humans Using Ensembl Resources \(DECIPHER\) as well as a subset \(154 samples\) of 1000 Genome Project to calculate the population frequencies of the SVs \(an optional internal cohort SV frequency calculation is also available\). NanotatoR creates a primary gene list \(PG\) from NCBI databases based on proband’s phenotype specific keywords and compares the list to the set of genes overlapping\/near SVs. The output is given in an Excel file format\, which is subdivided into multiple sheets based on SV type \(e.g.\, INDELs\, Inversions\, Translocations\). Users then have a choice to filter SVs using the provided annotations for de novo \(if parental samples are available\) or inherited rare variants.


.. conda:package:: bioconductor-nanotator

   |downloads_bioconductor-nanotator| |docker_bioconductor-nanotator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-curl: 
   :depends on r-dplyr: 
   :depends on r-hash: ``>=2.2.6``
   :depends on r-httr: 
   :depends on r-knitr: 
   :depends on r-openxlsx: ``>=4.0.17``
   :depends on r-rentrez: ``>=1.1.0``
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-testthat: 
   :depends on r-tidyverse: 
   :depends on r-varfrompdb: 
   :depends on r-xml: 
   :depends on r-xml2r: 

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

    pixi global install bioconductor-nanotator

to add into an existing workspace instead, run::

    pixi add bioconductor-nanotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nanotator

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nanotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nanotator:<tag>

(see `bioconductor-nanotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nanotator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanotator
   :alt:   (downloads)
.. |docker_bioconductor-nanotator| image:: https://quay.io/repository/biocontainers/bioconductor-nanotator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanotator
.. _`bioconductor-nanotator/tags`: https://quay.io/repository/biocontainers/bioconductor-nanotator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanotator";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanotator/README.html