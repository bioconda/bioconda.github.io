:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggmanh'
.. highlight: bash

bioconductor-ggmanh
===================

.. conda:recipe:: bioconductor-ggmanh
   :replaces_section_title:
   :noindex:

   Visualization Tool for GWAS Result

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ggmanh.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggmanh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh/meta.yaml>`_

   Manhattan plot and QQ Plot are commonly used to visualize the end result of Genome Wide Association Study. The \"ggmanh\" package aims to keep the generation of these plots simple while maintaining customizability. Main functions include manhattan\_plot\, qqunif\, and thinPoints.


.. conda:package:: bioconductor-ggmanh

   |downloads_bioconductor-ggmanh| |docker_bioconductor-ggmanh|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-seqarray: ``>=1.50.0,<1.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-paletteer: 
   :depends on r-pals: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-ggmanh

to add into an existing workspace instead, run::

    pixi add bioconductor-ggmanh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ggmanh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ggmanh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ggmanh:<tag>

(see `bioconductor-ggmanh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ggmanh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggmanh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggmanh
   :alt:   (downloads)
.. |docker_bioconductor-ggmanh| image:: https://quay.io/repository/biocontainers/bioconductor-ggmanh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggmanh
.. _`bioconductor-ggmanh/tags`: https://quay.io/repository/biocontainers/bioconductor-ggmanh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggmanh";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html