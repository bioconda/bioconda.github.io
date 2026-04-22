:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imagetcga'
.. highlight: bash

bioconductor-imagetcga
======================

.. conda:recipe:: bioconductor-imagetcga
   :replaces_section_title:
   :noindex:

   TCGA Diagnostic Image Database Explorer

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/imageTCGA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-imagetcga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imagetcga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imagetcga/meta.yaml>`_

   A Shiny application to explore the TCGA Diagnostic Image Database.


.. conda:package:: bioconductor-imagetcga

   |downloads_bioconductor-imagetcga| |docker_bioconductor-imagetcga|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bsicons: 
   :depends on r-bslib: 
   :depends on r-clipr: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-leaflet: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-tidyr: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-imagetcga

to add into an existing workspace instead, run::

    pixi add bioconductor-imagetcga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-imagetcga

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-imagetcga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-imagetcga:<tag>

(see `bioconductor-imagetcga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-imagetcga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imagetcga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imagetcga
   :alt:   (downloads)
.. |docker_bioconductor-imagetcga| image:: https://quay.io/repository/biocontainers/bioconductor-imagetcga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imagetcga
.. _`bioconductor-imagetcga/tags`: https://quay.io/repository/biocontainers/bioconductor-imagetcga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imagetcga";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imagetcga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imagetcga/README.html