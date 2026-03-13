:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmerge'
.. highlight: bash

bioconductor-flowmerge
======================

.. conda:recipe:: bioconductor-flowmerge
   :replaces_section_title:
   :noindex:

   Cluster Merging for Flow Cytometry Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowMerge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge/meta.yaml>`_

   Merging of mixture components for model\-based automated gating of flow cytometry data using the flowClust framework. Note\: users should have a working copy of flowClust 2.0 installed.


.. conda:package:: bioconductor-flowmerge

   |downloads_bioconductor-flowmerge| |docker_bioconductor-flowmerge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  </span></summary>
      

      ``2.58.0-0``,  ``2.54.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowclust: ``>=3.48.0,<3.49.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-feature: 
   :depends on r-foreach: 
   :depends on r-rrcov: 
   :depends on r-snow: 

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

    pixi global install bioconductor-flowmerge

to add into an existing workspace instead, run::

    pixi add bioconductor-flowmerge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowmerge

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowmerge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowmerge:<tag>

(see `bioconductor-flowmerge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmerge
   :alt:   (downloads)
.. |docker_bioconductor-flowmerge| image:: https://quay.io/repository/biocontainers/bioconductor-flowmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmerge
.. _`bioconductor-flowmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmerge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmerge";
        var versions = ["2.58.0","2.54.0","2.50.0","2.48.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html