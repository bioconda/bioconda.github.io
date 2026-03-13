:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podcall'
.. highlight: bash

bioconductor-podcall
====================

.. conda:recipe:: bioconductor-podcall
   :replaces_section_title:
   :noindex:

   Positive Droplet Calling for DNA Methylation Droplet Digital PCR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PoDCall.html
   :license: GPL-3
   :recipe: /`bioconductor-podcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall/meta.yaml>`_

   Reads files exported from \'QX Manager or QuantaSoft\' containing amplitude values from a run of ddPCR \(96 well plate\) and robustly sets thresholds to determine positive droplets for each channel of each individual well. Concentration and normalized concentration in addition to other metrics is then calculated for each well. Results are returned as a table\, optionally written to file\, as well as optional plots \(scatterplot and histogram\) for both channels per well written to file. The package includes a shiny application which provides an interactive and user\-friendly interface to the full functionality of PoDCall.


.. conda:package:: bioconductor-podcall

   |downloads_bioconductor-podcall| |docker_bioconductor-podcall|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-diptest: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-laplacesdemon: 
   :depends on r-mclust: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-rlist: 
   :depends on r-shiny: 
   :depends on r-shinyjs: 

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

    pixi global install bioconductor-podcall

to add into an existing workspace instead, run::

    pixi add bioconductor-podcall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-podcall

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-podcall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-podcall:<tag>

(see `bioconductor-podcall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-podcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-podcall
   :alt:   (downloads)
.. |docker_bioconductor-podcall| image:: https://quay.io/repository/biocontainers/bioconductor-podcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podcall
.. _`bioconductor-podcall/tags`: https://quay.io/repository/biocontainers/bioconductor-podcall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-podcall";
        var versions = ["1.18.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podcall/README.html