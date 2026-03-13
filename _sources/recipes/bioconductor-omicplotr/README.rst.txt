:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicplotr'
.. highlight: bash

bioconductor-omicplotr
======================

.. conda:recipe:: bioconductor-omicplotr
   :replaces_section_title:
   :noindex:

   Visual Exploration of Omic Datasets Using a Shiny App

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omicplotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr/meta.yaml>`_

   A Shiny app for visual exploration of omic datasets as compositions\, and differential abundance analysis using ALDEx2. Useful for exploring RNA\-seq\, meta\-RNA\-seq\, 16s rRNA gene sequencing with visualizations such as principal component analysis biplots \(coloured using metadata for visualizing each variable\)\, dendrograms and stacked bar plots\, and effect plots \(ALDEx2\). Input is a table of counts and metadata file \(if metadata exists\)\, with options to filter data by count or by metadata to remove low counts\, or to visualize select samples according to selected metadata.


.. conda:package:: bioconductor-omicplotr

   |downloads_bioconductor-omicplotr| |docker_bioconductor-omicplotr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-aldex2: ``>=1.42.0,<1.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-compositions: 
   :depends on r-dt: 
   :depends on r-jsonlite: 
   :depends on r-knitr: 
   :depends on r-matrixstats: 
   :depends on r-rmarkdown: 
   :depends on r-shiny: 
   :depends on r-vegan: 
   :depends on r-zcompositions: 

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

    pixi global install bioconductor-omicplotr

to add into an existing workspace instead, run::

    pixi add bioconductor-omicplotr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omicplotr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omicplotr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omicplotr:<tag>

(see `bioconductor-omicplotr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omicplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicplotr
   :alt:   (downloads)
.. |docker_bioconductor-omicplotr| image:: https://quay.io/repository/biocontainers/bioconductor-omicplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicplotr
.. _`bioconductor-omicplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-omicplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicplotr";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html