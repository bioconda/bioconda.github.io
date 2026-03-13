:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'music-deconvolution'
.. highlight: bash

music-deconvolution
===================

.. conda:recipe:: music-deconvolution
   :replaces_section_title:
   :noindex:

   Multi\-subject single cell deconvolution

   :homepage: https://github.com/xuranw/MuSiC
   :license: GPL (>= 3)
   :recipe: /`music-deconvolution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music-deconvolution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music-deconvolution/meta.yaml>`_

   Companion package to \"A bulk tissue deconvolution method with multi\-subject single cell expression reference.\" This package providase functions to estimate bulk tissue cell type proportions with multi\-subject single cell expression as reference.


.. conda:package:: music-deconvolution

   |downloads_music-deconvolution| |docker_music-deconvolution|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on r-base: ``>=3.5.1,<3.5.2.0a0``
   :depends on r-ggplot2: 
   :depends on r-mcmcpack: 
   :depends on r-nnls: 
   :depends on r-plyr: 
   :depends on xbioc: 

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

    pixi global install music-deconvolution

to add into an existing workspace instead, run::

    pixi add music-deconvolution

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install music-deconvolution

Alternatively, to install into a new environment, run::

    conda create -n envname music-deconvolution

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/music-deconvolution:<tag>

(see `music-deconvolution/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_music-deconvolution| image:: https://img.shields.io/conda/dn/bioconda/music-deconvolution.svg?style=flat
   :target: https://anaconda.org/bioconda/music-deconvolution
   :alt:   (downloads)
.. |docker_music-deconvolution| image:: https://quay.io/repository/biocontainers/music-deconvolution/status
   :target: https://quay.io/repository/biocontainers/music-deconvolution
.. _`music-deconvolution/tags`: https://quay.io/repository/biocontainers/music-deconvolution?tab=tags


.. raw:: html

    <script>
        var package = "music-deconvolution";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/music-deconvolution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/music-deconvolution/README.html