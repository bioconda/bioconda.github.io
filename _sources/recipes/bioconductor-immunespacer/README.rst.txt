:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunespacer'
.. highlight: bash

bioconductor-immunespacer
=========================

.. conda:recipe:: bioconductor-immunespacer
   :replaces_section_title:
   :noindex:

   A Thin Wrapper around the ImmuneSpace Data and Tools Portal

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ImmuneSpaceR.html
   :license: GPL-2
   :recipe: /`bioconductor-immunespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer/meta.yaml>`_

   Provides a convenient API for accessing data sets within ImmuneSpace Data and Tools Portal \(datatools.immunespace.org\)\, the data repository and analysis platform of the Human Immunology Project Consortium \(HIPC\).


.. conda:package:: bioconductor-immunespacer

   |downloads_bioconductor-immunespacer| |docker_bioconductor-immunespacer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.5-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-flowworkspace: ``>=4.14.0,<4.15.0``
   :depends on bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-curl: 
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-ggplot2: ``>=3.2.0``
   :depends on r-gplots: 
   :depends on r-heatmaply: ``>=0.7.0``
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-pheatmap: 
   :depends on r-plotly: 
   :depends on r-r6: 
   :depends on r-rlabkey: ``>=2.3.1``
   :depends on r-rmarkdown: 
   :depends on r-scales: 

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

    pixi global install bioconductor-immunespacer

to add into an existing workspace instead, run::

    pixi add bioconductor-immunespacer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-immunespacer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-immunespacer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-immunespacer:<tag>

(see `bioconductor-immunespacer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-immunespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunespacer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunespacer
   :alt:   (downloads)
.. |docker_bioconductor-immunespacer| image:: https://quay.io/repository/biocontainers/bioconductor-immunespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunespacer
.. _`bioconductor-immunespacer/tags`: https://quay.io/repository/biocontainers/bioconductor-immunespacer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunespacer";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html