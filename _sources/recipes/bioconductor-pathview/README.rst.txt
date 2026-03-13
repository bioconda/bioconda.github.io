:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathview'
.. highlight: bash

bioconductor-pathview
=====================

.. conda:recipe:: bioconductor-pathview
   :replaces_section_title:
   :noindex:

   a tool set for pathway based data integration and visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pathview.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-pathview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview/meta.yaml>`_
   :links: biotools: :biotools:`pathview`

   Pathview is a tool set for pathway based data integration and visualization. It maps and renders a wide variety of biological data on relevant pathway graphs. All users need is to supply their data and specify the target pathway. Pathview automatically downloads the pathway graph data\, parses the data file\, maps user data to the pathway\, and render pathway graph with the mapped data. In addition\, Pathview also seamlessly integrates with pathway and gene set \(enrichment\) analysis tools for large\-scale and fully automated analysis.


.. conda:package:: bioconductor-pathview

   |downloads_bioconductor-pathview| |docker_bioconductor-pathview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.5-0``,  ``1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-kegggraph: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-png: 
   :depends on r-xml: 

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

    pixi global install bioconductor-pathview

to add into an existing workspace instead, run::

    pixi add bioconductor-pathview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pathview

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pathview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pathview:<tag>

(see `bioconductor-pathview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pathview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathview
   :alt:   (downloads)
.. |docker_bioconductor-pathview| image:: https://quay.io/repository/biocontainers/bioconductor-pathview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathview
.. _`bioconductor-pathview/tags`: https://quay.io/repository/biocontainers/bioconductor-pathview?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathview";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathview/README.html