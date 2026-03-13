:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanotube'
.. highlight: bash

bioconductor-nanotube
=====================

.. conda:recipe:: bioconductor-nanotube
   :replaces_section_title:
   :noindex:

   An Easy Pipeline for NanoString nCounter Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NanoTube.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-nanotube <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotube>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotube/meta.yaml>`_

   NanoTube includes functions for the processing\, quality control\, analysis\, and visualization of NanoString nCounter data. Analysis functions include differential analysis and gene set analysis methods\, as well as postprocessing steps to help understand the results. Additional functions are included to enable interoperability with other Bioconductor NanoString data analysis packages.


.. conda:package:: bioconductor-nanotube

   |downloads_bioconductor-nanotube| |docker_bioconductor-nanotube|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-reshape: 

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

    pixi global install bioconductor-nanotube

to add into an existing workspace instead, run::

    pixi add bioconductor-nanotube

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nanotube

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nanotube

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nanotube:<tag>

(see `bioconductor-nanotube/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nanotube| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanotube.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanotube
   :alt:   (downloads)
.. |docker_bioconductor-nanotube| image:: https://quay.io/repository/biocontainers/bioconductor-nanotube/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanotube
.. _`bioconductor-nanotube/tags`: https://quay.io/repository/biocontainers/bioconductor-nanotube?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanotube";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanotube/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanotube/README.html