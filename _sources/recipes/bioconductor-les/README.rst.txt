:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-les'
.. highlight: bash

bioconductor-les
================

.. conda:recipe:: bioconductor-les
   :replaces_section_title:
   :noindex:

   Identifying Differential Effects in Tiling Microarray Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/les.html
   :license: GPL-3
   :recipe: /`bioconductor-les <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les/meta.yaml>`_
   :links: biotools: :biotools:`les`, doi: :doi:`10.1089/cmb.2008.0226`

   The \'les\' package estimates Loci of Enhanced Significance \(LES\) in tiling microarray data. These are regions of regulation such as found in differential transcription\, CHiP\-chip\, or DNA modification analysis. The package provides a universal framework suitable for identifying differential effects in tiling microarray data sets\, and is independent of the underlying statistics at the level of single probes.


.. conda:package:: bioconductor-les

   |downloads_bioconductor-les| |docker_bioconductor-les|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-fdrtool: 
   :depends on r-gplots: 
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

    pixi global install bioconductor-les

to add into an existing workspace instead, run::

    pixi add bioconductor-les

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-les

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-les

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-les:<tag>

(see `bioconductor-les/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-les| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-les.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-les
   :alt:   (downloads)
.. |docker_bioconductor-les| image:: https://quay.io/repository/biocontainers/bioconductor-les/status
   :target: https://quay.io/repository/biocontainers/bioconductor-les
.. _`bioconductor-les/tags`: https://quay.io/repository/biocontainers/bioconductor-les?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-les";
        var versions = ["1.60.0","1.56.0","1.52.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-les/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-les/README.html