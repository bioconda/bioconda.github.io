:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-daglogo'
.. highlight: bash

bioconductor-daglogo
====================

.. conda:recipe:: bioconductor-daglogo
   :replaces_section_title:
   :noindex:

   dagLogo\: a Bioconductor package for visualizing conserved amino acid sequence pattern in groups based on probability theory

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dagLogo.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-daglogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo/meta.yaml>`_

   Visualize significant conserved amino acid sequence pattern in groups based on probability theory.


.. conda:package:: bioconductor-daglogo

   |downloads_bioconductor-daglogo| |docker_bioconductor-daglogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-motifstack: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-uniprot.ws: ``>=2.50.0,<2.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-pheatmap: 

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

    pixi global install bioconductor-daglogo

to add into an existing workspace instead, run::

    pixi add bioconductor-daglogo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-daglogo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-daglogo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-daglogo:<tag>

(see `bioconductor-daglogo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-daglogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-daglogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-daglogo
   :alt:   (downloads)
.. |docker_bioconductor-daglogo| image:: https://quay.io/repository/biocontainers/bioconductor-daglogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-daglogo
.. _`bioconductor-daglogo/tags`: https://quay.io/repository/biocontainers/bioconductor-daglogo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-daglogo";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-daglogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-daglogo/README.html