:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegsa'
.. highlight: bash

bioconductor-reactomegsa
========================

.. conda:recipe:: bioconductor-reactomegsa
   :replaces_section_title:
   :noindex:

   Client for the Reactome Analysis Service for comparative multi\-omics gene set analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ReactomeGSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-reactomegsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa/meta.yaml>`_

   The ReactomeGSA packages uses Reactome\'s online analysis service to perform a multi\-omics gene set analysis. The main advantage of this package is\, that the retrieved results can be visualized using REACTOME\'s powerful webapplication. Since Reactome\'s analysis service also uses R to perfrom the actual gene set analysis you will get similar results when using the same packages \(such as limma and edgeR\) locally. Therefore\, if you only require a gene set analysis\, different packages are more suited.


.. conda:package:: bioconductor-reactomegsa

   |downloads_bioconductor-reactomegsa| |docker_bioconductor-reactomegsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.1-0</code>,  <code>1.20.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.1-0``,  ``1.20.0-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-progress: 
   :depends on r-rcolorbrewer: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-reactomegsa

to add into an existing workspace instead, run::

    pixi add bioconductor-reactomegsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-reactomegsa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-reactomegsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-reactomegsa:<tag>

(see `bioconductor-reactomegsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-reactomegsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegsa
   :alt:   (downloads)
.. |docker_bioconductor-reactomegsa| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegsa
.. _`bioconductor-reactomegsa/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomegsa";
        var versions = ["1.24.1","1.20.0","1.16.1","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html