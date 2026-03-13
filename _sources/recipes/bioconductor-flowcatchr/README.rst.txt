:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcatchr'
.. highlight: bash

bioconductor-flowcatchr
=======================

.. conda:recipe:: bioconductor-flowcatchr
   :replaces_section_title:
   :noindex:

   Tools to analyze in vivo microscopy imaging data focused on tracking flowing blood cells

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowcatchR.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-flowcatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr/meta.yaml>`_

   flowcatchR is a set of tools to analyze in vivo microscopy imaging data\, focused on tracking flowing blood cells. It guides the steps from segmentation to calculation of features\, filtering out particles not of interest\, providing also a set of utilities to help checking the quality of the performed operations \(e.g. how good the segmentation was\). It allows investigating the issue of tracking flowing cells such as in blood vessels\, to categorize the particles in flowing\, rolling and adherent. This classification is applied in the study of phenomena such as hemostasis and study of thrombosis development. Moreover\, flowcatchR presents an integrated workflow solution\, based on the integration with a Shiny App and Jupyter notebooks\, which is delivered alongside the package\, and can enable fully reproducible bioimage analysis in the R environment.


.. conda:package:: bioconductor-flowcatchr

   |downloads_bioconductor-flowcatchr| |docker_bioconductor-flowcatchr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on imagemagick: 
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorramps: 
   :depends on r-plotly: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-flowcatchr

to add into an existing workspace instead, run::

    pixi add bioconductor-flowcatchr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowcatchr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowcatchr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowcatchr:<tag>

(see `bioconductor-flowcatchr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowcatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcatchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcatchr
   :alt:   (downloads)
.. |docker_bioconductor-flowcatchr| image:: https://quay.io/repository/biocontainers/bioconductor-flowcatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcatchr
.. _`bioconductor-flowcatchr/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcatchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcatchr";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html