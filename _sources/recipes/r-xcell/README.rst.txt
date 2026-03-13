:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xcell'
.. highlight: bash

r-xcell
=======

.. conda:recipe:: r-xcell
   :replaces_section_title:
   :noindex:

   Estimate immune cell proportions from gene expression data

   :homepage: https://github.com/dviraran/xCell
   :license: GPL / GPL-3
   :recipe: /`r-xcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1349-1`

   \"Tissues are a complex milieu consisting of numerous cell types. In cancer\, understanding the cellular heterogeneity in the tumor microenvironment is an emerging field of research. Numerous methods have been published in recent years for the enumeration of cell subsets from tissue expression profiles. However\, the available methods suffer from three major problems\: inferring cell subset based on gene sets learned and verified from limited sources\; displaying only partial portrayal of the full cellular heterogeneity\; and insufficient validation in mixed tissues. The xCell package performs cell type enrichment analysis from gene expression data for 64 immune and stroma cell types. xCell is a gene signatures\-based method learned from thousands of pure cell types from various sources. xCell applies a novel technique for reducing associations between closley related cell types. xCell signatures were validated using extensive in\-silico simulations and also cytometry immunophenotyping\, and were shown to outperform previous methods. xCell allows researchers to reliably portray the cellular heterogeneity landscape of tissue expression profiles.\"



.. conda:package:: r-xcell

   |downloads_r-xcell| |docker_r-xcell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-8</code>,  <code>1.3-7</code>,  <code>1.3-6</code>,  <code>1.3-5</code>,  <code>1.3-4</code>,  <code>1.3-3</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.3-8``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gseabase: ``>=1.68.0,<1.69.0a0``
   :depends on bioconductor-gsva: ``>=2.0.0,<2.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-curl: 
   :depends on r-digest: 
   :depends on r-mass: 
   :depends on r-pracma: 
   :depends on r-quadprog: 
   :depends on r-roxygen2: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install r-xcell

to add into an existing workspace instead, run::

    pixi add r-xcell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-xcell

Alternatively, to install into a new environment, run::

    conda create -n envname r-xcell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-xcell:<tag>

(see `r-xcell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-xcell| image:: https://img.shields.io/conda/dn/bioconda/r-xcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xcell
   :alt:   (downloads)
.. |docker_r-xcell| image:: https://quay.io/repository/biocontainers/r-xcell/status
   :target: https://quay.io/repository/biocontainers/r-xcell
.. _`r-xcell/tags`: https://quay.io/repository/biocontainers/r-xcell?tab=tags


.. raw:: html

    <script>
        var package = "r-xcell";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xcell/README.html