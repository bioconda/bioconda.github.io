:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cssam'
.. highlight: bash

r-cssam
=======

.. conda:recipe:: r-cssam
   :replaces_section_title:
   :noindex:

   Cell\-type specific differential expression of a microarray experiment of heterogeneous tissue samples\, using SAM.

   :homepage: https://github.com/shenorrLab/csSAM
   :license: GPL / LGPL
   :recipe: /`r-cssam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.1439`

   


.. conda:package:: r-cssam

   |downloads_r-cssam| |docker_r-cssam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-8</code>,  <code>1.4-7</code>,  <code>1.4-6</code>,  <code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  </span></summary>
      

      ``1.4-8``,  ``1.4-7``,  ``1.4-6``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.50.0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.0,<4.1``
   :depends on r-formula: ``>=1.2_4``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-pkgmaker: ``>=0.32.2``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-rcpp: ``>=1.0.7``
   :depends on r-rngtools: ``>=1.5.2``
   :depends on r-scales: ``>=1.1.1``
   :depends on xbioc: ``>=0.1.19``

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

    pixi global install r-cssam

to add into an existing workspace instead, run::

    pixi add r-cssam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cssam

Alternatively, to install into a new environment, run::

    conda create -n envname r-cssam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cssam:<tag>

(see `r-cssam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cssam| image:: https://img.shields.io/conda/dn/bioconda/r-cssam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cssam
   :alt:   (downloads)
.. |docker_r-cssam| image:: https://quay.io/repository/biocontainers/r-cssam/status
   :target: https://quay.io/repository/biocontainers/r-cssam
.. _`r-cssam/tags`: https://quay.io/repository/biocontainers/r-cssam?tab=tags


.. raw:: html

    <script>
        var package = "r-cssam";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cssam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cssam/README.html