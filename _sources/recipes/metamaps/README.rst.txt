:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamaps'
.. highlight: bash

metamaps
========

.. conda:recipe:: metamaps
   :replaces_section_title:
   :noindex:

   MetaMaps is a tool for long\-read metagenomic analysis

   :homepage: https://github.com/DiltheyLab/MetaMaps
   :license: Public Domain / Public Domain
   :recipe: /`metamaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps/meta.yaml>`_

   


.. conda:package:: metamaps

   |downloads_metamaps| |docker_metamaps|

   :versions:
      
      

      ``0.1.98102e9-2``,  ``0.1.98102e9-1``,  ``0.1.98102e9-0``,  ``0.1.633d2e0-0``

      

   
   :depends on boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on perl: 
   :depends on perl-file-slurp: 
   :depends on perl-http-message: 
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-simple: 
   :depends on perl-math-random: 
   :depends on perl-set-intervaltree: 
   :depends on perl-statistics-basic: 
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-rcolorbrewer: 
   :depends on zlib: 

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

    pixi global install metamaps

to add into an existing workspace instead, run::

    pixi add metamaps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metamaps

Alternatively, to install into a new environment, run::

    conda create -n envname metamaps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metamaps:<tag>

(see `metamaps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metamaps| image:: https://img.shields.io/conda/dn/bioconda/metamaps.svg?style=flat
   :target: https://anaconda.org/bioconda/metamaps
   :alt:   (downloads)
.. |docker_metamaps| image:: https://quay.io/repository/biocontainers/metamaps/status
   :target: https://quay.io/repository/biocontainers/metamaps
.. _`metamaps/tags`: https://quay.io/repository/biocontainers/metamaps?tab=tags


.. raw:: html

    <script>
        var package = "metamaps";
        var versions = ["0.1.98102e9","0.1.98102e9","0.1.98102e9","0.1.633d2e0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamaps/README.html