:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tissueenrich'
.. highlight: bash

bioconductor-tissueenrich
=========================

.. conda:recipe:: bioconductor-tissueenrich
   :replaces_section_title:
   :noindex:

   Tissue\-specific gene enrichment analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TissueEnrich.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tissueenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissueenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissueenrich/meta.yaml>`_

   The TissueEnrich package is used to calculate enrichment of tissue\-specific genes in a set of input genes. For example\, the user can input the most highly expressed genes from RNA\-Seq data\, or gene co\-expression modules to determine which tissue\-specific genes are enriched in those datasets. Tissue\-specific genes were defined by processing RNA\-Seq data from the Human Protein Atlas \(HPA\) \(Uhlén et al. 2015\)\, GTEx \(Ardlie et al. 2015\)\, and mouse ENCODE \(Shen et al. 2012\) using the algorithm from the HPA \(Uhlén et al. 2015\).The hypergeometric test is being used to determine if the tissue\-specific genes are enriched among the input genes. Along with tissue\-specific gene enrichment\, the TissueEnrich package can also be used to define tissue\-specific genes from expression datasets provided by the user\, which can then be used to calculate tissue\-specific gene enrichments.


.. conda:package:: bioconductor-tissueenrich

   |downloads_bioconductor-tissueenrich| |docker_bioconductor-tissueenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.7.3``
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on r-tidyr: ``>=0.8.0``

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

    pixi global install bioconductor-tissueenrich

to add into an existing workspace instead, run::

    pixi add bioconductor-tissueenrich

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tissueenrich

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tissueenrich

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tissueenrich:<tag>

(see `bioconductor-tissueenrich/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tissueenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tissueenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tissueenrich
   :alt:   (downloads)
.. |docker_bioconductor-tissueenrich| image:: https://quay.io/repository/biocontainers/bioconductor-tissueenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tissueenrich
.. _`bioconductor-tissueenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-tissueenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tissueenrich";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html