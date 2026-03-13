:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowbeads'
.. highlight: bash

bioconductor-flowbeads
======================

.. conda:recipe:: bioconductor-flowbeads
   :replaces_section_title:
   :noindex:

   flowBeads\: Analysis of flow bead data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowBeads.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowbeads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbeads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbeads/meta.yaml>`_
   :links: biotools: :biotools:`flowbeads`, doi: :doi:`10.1038/nmeth.3252`

   This package extends flowCore to provide functionality specific to bead data. One of the goals of this package is to automate analysis of bead data for the purpose of normalisation.


.. conda:package:: bioconductor-flowbeads

   |downloads_bioconductor-flowbeads| |docker_bioconductor-flowbeads|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-knitr: 
   :depends on r-rrcov: 
   :depends on r-xtable: 

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

    pixi global install bioconductor-flowbeads

to add into an existing workspace instead, run::

    pixi add bioconductor-flowbeads

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowbeads

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowbeads

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowbeads:<tag>

(see `bioconductor-flowbeads/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowbeads| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowbeads.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowbeads
   :alt:   (downloads)
.. |docker_bioconductor-flowbeads| image:: https://quay.io/repository/biocontainers/bioconductor-flowbeads/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowbeads
.. _`bioconductor-flowbeads/tags`: https://quay.io/repository/biocontainers/bioconductor-flowbeads?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowbeads";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowbeads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowbeads/README.html