:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cyanofilter'
.. highlight: bash

bioconductor-cyanofilter
========================

.. conda:recipe:: bioconductor-cyanofilter
   :replaces_section_title:
   :noindex:

   Phytoplankton Population Identification using Cell Pigmentation and\/or Complexity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cyanoFilter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cyanofilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyanofilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyanofilter/meta.yaml>`_

   An approach to filter out and\/or identify phytoplankton cells from all particles measured via flow cytometry pigment and cell complexity information. It does this using a sequence of one\-dimensional gates on pre\-defined channels measuring certain pigmentation and complexity. The package is especially tuned for cyanobacteria\, but will work fine for phytoplankton communities where there is at least one cell characteristic that differentiates every phytoplankton in the community.


.. conda:package:: bioconductor-cyanofilter

   |downloads_bioconductor-cyanofilter| |docker_bioconductor-cyanofilter|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-flowclust: ``>=3.48.0,<3.49.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowdensity: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cytometree: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-mrfdepth: 

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

    pixi global install bioconductor-cyanofilter

to add into an existing workspace instead, run::

    pixi add bioconductor-cyanofilter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cyanofilter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cyanofilter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cyanofilter:<tag>

(see `bioconductor-cyanofilter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cyanofilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cyanofilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cyanofilter
   :alt:   (downloads)
.. |docker_bioconductor-cyanofilter| image:: https://quay.io/repository/biocontainers/bioconductor-cyanofilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cyanofilter
.. _`bioconductor-cyanofilter/tags`: https://quay.io/repository/biocontainers/bioconductor-cyanofilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cyanofilter";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cyanofilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cyanofilter/README.html