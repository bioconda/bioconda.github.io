:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocancer'
.. highlight: bash

bioconductor-biocancer
======================

.. conda:recipe:: bioconductor-biocancer
   :replaces_section_title:
   :noindex:

   Interactive Multi\-Omics Cancers Data Visualization and Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bioCancer.html
   :license: AGPL-3 | file LICENSE
   :recipe: /`bioconductor-biocancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer/meta.yaml>`_

   This package is a Shiny App to visualize and analyse interactively Multi\-Assays of Cancer Genomic Data.


.. conda:package:: bioconductor-biocancer

   |downloads_bioconductor-biocancer| |docker_bioconductor-biocancer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-cbioportaldata: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-genetclassifier: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.bt.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-reactome.db: ``>=1.95.0,<1.96.0``
   :depends on bioconductor-reactomepa: ``>=1.54.0,<1.55.0``
   :depends on r-algdesign: ``>=1.1.7.3``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-diagrammer: ``<=1.01``
   :depends on r-dplyr: ``>=0.7.2``
   :depends on r-dt: ``>=0.3``
   :depends on r-htmlwidgets: 
   :depends on r-import: ``>=1.1.0``
   :depends on r-plyr: 
   :depends on r-r.methodss3: 
   :depends on r-r.oo: 
   :depends on r-radiant.data: ``>=0.9.1``
   :depends on r-shiny: ``>=1.0.5``
   :depends on r-shinythemes: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-visnetwork: 
   :depends on r-xml: ``>=3.98``

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

    pixi global install bioconductor-biocancer

to add into an existing workspace instead, run::

    pixi add bioconductor-biocancer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocancer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocancer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocancer:<tag>

(see `bioconductor-biocancer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocancer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocancer
   :alt:   (downloads)
.. |docker_bioconductor-biocancer| image:: https://quay.io/repository/biocontainers/bioconductor-biocancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocancer
.. _`bioconductor-biocancer/tags`: https://quay.io/repository/biocontainers/bioconductor-biocancer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocancer";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocancer/README.html