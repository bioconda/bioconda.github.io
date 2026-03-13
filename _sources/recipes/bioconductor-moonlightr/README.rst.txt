:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moonlightr'
.. highlight: bash

bioconductor-moonlightr
=======================

.. conda:recipe:: bioconductor-moonlightr
   :replaces_section_title:
   :noindex:

   Identify oncogenes and tumor suppressor genes from omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MoonlightR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-moonlightr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlightr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlightr/meta.yaml>`_

   Motivation\: The understanding of cancer mechanism requires the identification of genes playing a role in the development of the pathology and the characterization of their role \(notably oncogenes and tumor suppressors\). Results\: We present an R\/bioconductor package called MoonlightR which returns a list of candidate driver genes for specific cancer types on the basis of TCGA expression data. The method first infers gene regulatory networks and then carries out a functional enrichment analysis \(FEA\) \(implementing an upstream regulator analysis\, URA\) to score the importance of well\-known biological processes with respect to the studied cancer type. Eventually\, by means of random forests\, MoonlightR predicts two specific roles for the candidate driver genes\: i\) tumor suppressor genes \(TSGs\) and ii\) oncogenes \(OCGs\). As a consequence\, this methodology does not only identify genes playing a dual role \(e.g. TSG in one cancer type and OCG in another\) but also helps in elucidating the biological processes underlying their specific roles. In particular\, MoonlightR can be used to discover OCGs and TSGs in the same cancer type. This may help in answering the question whether some genes change role between early stages \(I\, II\) and late stages \(III\, IV\) in breast cancer. In the future\, this analysis could be useful to determine the causes of different resistances to chemotherapeutic treatments.


.. conda:package:: bioconductor-moonlightr

   |downloads_bioconductor-moonlightr| |docker_bioconductor-moonlightr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-geoquery: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tcgabiolinks: ``>=2.38.0,<2.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-gplots: 
   :depends on r-hiver: 
   :depends on r-parmigene: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-rismed: 

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

    pixi global install bioconductor-moonlightr

to add into an existing workspace instead, run::

    pixi add bioconductor-moonlightr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-moonlightr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-moonlightr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-moonlightr:<tag>

(see `bioconductor-moonlightr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-moonlightr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moonlightr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moonlightr
   :alt:   (downloads)
.. |docker_bioconductor-moonlightr| image:: https://quay.io/repository/biocontainers/bioconductor-moonlightr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moonlightr
.. _`bioconductor-moonlightr/tags`: https://quay.io/repository/biocontainers/bioconductor-moonlightr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moonlightr";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html