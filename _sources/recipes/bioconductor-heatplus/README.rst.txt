:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-heatplus'
.. highlight: bash

bioconductor-heatplus
=====================

.. conda:recipe:: bioconductor-heatplus
   :replaces_section_title:
   :noindex:

   Heatmaps with row and\/or column covariates and colored clusters

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Heatplus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-heatplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatplus/meta.yaml>`_
   :links: biotools: :biotools:`heatplus`, doi: :doi:`10.1038/nmeth.3252`

   Display a rectangular heatmap \(intensity plot\) of a data matrix. By default\, both samples \(columns\) and features \(row\) of the matrix are sorted according to a hierarchical clustering\, and the corresponding dendrogram is plotted. Optionally\, panels with additional information about samples and features can be added to the plot.


.. conda:package:: bioconductor-heatplus

   |downloads_bioconductor-heatplus| |docker_bioconductor-heatplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-0</code>,  <code>3.14.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  </span></summary>
      

      ``3.18.0-0``,  ``3.14.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-heatplus

to add into an existing workspace instead, run::

    pixi add bioconductor-heatplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-heatplus

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-heatplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-heatplus:<tag>

(see `bioconductor-heatplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-heatplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heatplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-heatplus
   :alt:   (downloads)
.. |docker_bioconductor-heatplus| image:: https://quay.io/repository/biocontainers/bioconductor-heatplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heatplus
.. _`bioconductor-heatplus/tags`: https://quay.io/repository/biocontainers/bioconductor-heatplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-heatplus";
        var versions = ["3.18.0","3.14.0","3.10.0","3.8.0","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heatplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heatplus/README.html