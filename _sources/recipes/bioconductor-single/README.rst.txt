:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-single'
.. highlight: bash

bioconductor-single
===================

.. conda:recipe:: bioconductor-single
   :replaces_section_title:
   :noindex:

   Accurate consensus sequence from nanopore reads of a gene library

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/single.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-single <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single/meta.yaml>`_

   Accurate consensus sequence from nanopore reads of a DNA gene library. SINGLe corrects for systematic errors in nanopore sequencing reads of gene libraries and it retrieves true consensus sequences of variants identified by a barcode\, needing only a few reads per variant. More information in preprint doi\: https\:\/\/doi.org\/10.1101\/2020.03.25.007146.


.. conda:package:: bioconductor-single

   |downloads_bioconductor-single| |docker_bioconductor-single|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-single

to add into an existing workspace instead, run::

    pixi add bioconductor-single

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-single

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-single

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-single:<tag>

(see `bioconductor-single/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-single| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-single.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-single
   :alt:   (downloads)
.. |docker_bioconductor-single| image:: https://quay.io/repository/biocontainers/bioconductor-single/status
   :target: https://quay.io/repository/biocontainers/bioconductor-single
.. _`bioconductor-single/tags`: https://quay.io/repository/biocontainers/bioconductor-single?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-single";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-single/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-single/README.html