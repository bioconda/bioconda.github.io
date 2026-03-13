:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpnet'
.. highlight: bash

bioconductor-lpnet
==================

.. conda:recipe:: bioconductor-lpnet
   :replaces_section_title:
   :noindex:

   Linear Programming Model for Network Inference

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lpNet.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-lpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet/meta.yaml>`_
   :links: biotools: :biotools:`lpnet`, doi: :doi:`10.1093/bioinformatics/btv327`

   lpNet aims at infering biological networks\, in particular signaling and gene networks. For that it takes perturbation data\, either steady\-state or time\-series\, as input and generates an LP model which allows the inference of signaling networks. For parameter identification either leave\-one\-out cross\-validation or stratified n\-fold cross\-validation can be used.


.. conda:package:: bioconductor-lpnet

   |downloads_bioconductor-lpnet| |docker_bioconductor-lpnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.38.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.38.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-kegggraph: ``>=1.70.0,<1.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lpsolve: 

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

    pixi global install bioconductor-lpnet

to add into an existing workspace instead, run::

    pixi add bioconductor-lpnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lpnet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lpnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lpnet:<tag>

(see `bioconductor-lpnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpnet
   :alt:   (downloads)
.. |docker_bioconductor-lpnet| image:: https://quay.io/repository/biocontainers/bioconductor-lpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpnet
.. _`bioconductor-lpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-lpnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpnet";
        var versions = ["2.42.0","2.38.0","2.34.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpnet/README.html