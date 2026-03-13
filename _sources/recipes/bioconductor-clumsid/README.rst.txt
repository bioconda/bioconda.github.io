:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clumsid'
.. highlight: bash

bioconductor-clumsid
====================

.. conda:recipe:: bioconductor-clumsid
   :replaces_section_title:
   :noindex:

   Clustering of MS2 Spectra for Metabolite Identification

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CluMSID.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clumsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid/meta.yaml>`_

   CluMSID is a tool that aids the identification of features in untargeted LC\-MS\/MS analysis by the use of MS2 spectra similarity and unsupervised statistical methods. It offers functions for a complete and customisable workflow from raw data to visualisations and is interfaceable with the xmcs family of preprocessing packages.


.. conda:package:: bioconductor-clumsid

   |downloads_bioconductor-clumsid| |docker_bioconductor-clumsid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbscan: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-network: 
   :depends on r-plotly: 
   :depends on r-rcolorbrewer: 
   :depends on r-sna: 

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

    pixi global install bioconductor-clumsid

to add into an existing workspace instead, run::

    pixi add bioconductor-clumsid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clumsid

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clumsid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clumsid:<tag>

(see `bioconductor-clumsid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clumsid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clumsid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clumsid
   :alt:   (downloads)
.. |docker_bioconductor-clumsid| image:: https://quay.io/repository/biocontainers/bioconductor-clumsid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clumsid
.. _`bioconductor-clumsid/tags`: https://quay.io/repository/biocontainers/bioconductor-clumsid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clumsid";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clumsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clumsid/README.html