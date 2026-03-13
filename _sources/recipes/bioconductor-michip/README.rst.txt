:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-michip'
.. highlight: bash

bioconductor-michip
===================

.. conda:recipe:: bioconductor-michip
   :replaces_section_title:
   :noindex:

   MiChip Parsing and Summarizing Functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MiChip.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-michip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-michip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-michip/meta.yaml>`_
   :links: biotools: :biotools:`michip`, doi: :doi:`10.1038/nmeth.3252`

   This package takes the MiChip miRNA microarray .grp scanner output files and parses these out\, providing summary and plotting functions to analyse MiChip hybridizations. A set of hybridizations is packaged into an ExpressionSet allowing it to be used by other BioConductor packages.


.. conda:package:: bioconductor-michip

   |downloads_bioconductor-michip| |docker_bioconductor-michip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-michip

to add into an existing workspace instead, run::

    pixi add bioconductor-michip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-michip

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-michip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-michip:<tag>

(see `bioconductor-michip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-michip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-michip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-michip
   :alt:   (downloads)
.. |docker_bioconductor-michip| image:: https://quay.io/repository/biocontainers/bioconductor-michip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-michip
.. _`bioconductor-michip/tags`: https://quay.io/repository/biocontainers/bioconductor-michip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-michip";
        var versions = ["1.64.0","1.60.0","1.56.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-michip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-michip/README.html