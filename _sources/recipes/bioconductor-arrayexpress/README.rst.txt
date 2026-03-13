:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayexpress'
.. highlight: bash

bioconductor-arrayexpress
=========================

.. conda:recipe:: bioconductor-arrayexpress
   :replaces_section_title:
   :noindex:

   Access the ArrayExpress Collection at EMBL\-EBI Biostudies and build Bioconductor data structures\: ExpressionSet\, AffyBatch\, NChannelSet

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ArrayExpress.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arrayexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpress/meta.yaml>`_

   Access the ArrayExpress Collection at EMBL\-EBI Biostudies and build Bioconductor data structures\: ExpressionSet\, AffyBatch\, NChannelSet.


.. conda:package:: bioconductor-arrayexpress

   |downloads_bioconductor-arrayexpress| |docker_bioconductor-arrayexpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.57.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.57.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-arrayexpress

to add into an existing workspace instead, run::

    pixi add bioconductor-arrayexpress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-arrayexpress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-arrayexpress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-arrayexpress:<tag>

(see `bioconductor-arrayexpress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-arrayexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayexpress
   :alt:   (downloads)
.. |docker_bioconductor-arrayexpress| image:: https://quay.io/repository/biocontainers/bioconductor-arrayexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayexpress
.. _`bioconductor-arrayexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayexpress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayexpress";
        var versions = ["1.70.0","1.66.0","1.62.0","1.60.0","1.57.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayexpress/README.html