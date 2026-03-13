:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qusage'
.. highlight: bash

bioconductor-qusage
===================

.. conda:recipe:: bioconductor-qusage
   :replaces_section_title:
   :noindex:

   qusage\: Quantitative Set Analysis for Gene Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qusage.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-qusage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qusage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qusage/meta.yaml>`_
   :links: biotools: :biotools:`qusage`

   This package is an implementation the Quantitative Set Analysis for Gene Expression \(QuSAGE\) method described in \(Yaari G. et al\, Nucl Acids Res\, 2013\). This is a novel Gene Set Enrichment\-type test\, which is designed to provide a faster\, more accurate\, and easier to understand test for gene expression studies. qusage accounts for inter\-gene correlations using the Variance Inflation Factor technique proposed by Wu et al. \(Nucleic Acids Res\, 2012\). In addition\, rather than simply evaluating the deviation from a null hypothesis with a single number \(a P value\)\, qusage quantifies gene set activity with a complete probability density function \(PDF\). From this PDF\, P values and confidence intervals can be easily extracted. Preserving the PDF also allows for post\-hoc analysis \(e.g.\, pair\-wise comparisons of gene set activity\) while maintaining statistical traceability. Finally\, while qusage is compatible with individual gene statistics from existing methods \(e.g.\, LIMMA\)\, a Welch\-based method is implemented that is shown to improve specificity. The QuSAGE package also includes a mixed effects model implementation\, as described in \(Turner JA et al\, BMC Bioinformatics\, 2015\)\, and a meta\-analysis framework as described in \(Meng H\, et al. PLoS Comput Biol. 2019\). For questions\, contact Chris Bolen \(cbolen1\@gmail.com\) or Steven Kleinstein \(steven.kleinstein\@yale.edu\)


.. conda:package:: bioconductor-qusage

   |downloads_bioconductor-qusage| |docker_bioconductor-qusage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-emmeans: 
   :depends on r-fftw: 
   :depends on r-nlme: 

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

    pixi global install bioconductor-qusage

to add into an existing workspace instead, run::

    pixi add bioconductor-qusage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qusage

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qusage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qusage:<tag>

(see `bioconductor-qusage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qusage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qusage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qusage
   :alt:   (downloads)
.. |docker_bioconductor-qusage| image:: https://quay.io/repository/biocontainers/bioconductor-qusage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qusage
.. _`bioconductor-qusage/tags`: https://quay.io/repository/biocontainers/bioconductor-qusage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qusage";
        var versions = ["2.44.0","2.40.0","2.36.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qusage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qusage/README.html