:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakealtpromoter'
.. highlight: bash

snakealtpromoter
================

.. conda:recipe:: snakealtpromoter
   :replaces_section_title:
   :noindex:

   A comprehensive pipeline for differential alternative promoter analysis.

   :homepage: https://github.com/YidanSunResearchLab/SnakeAltPromoter
   :license: MIT / MIT
   :recipe: /`snakealtpromoter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakealtpromoter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakealtpromoter/meta.yaml>`_

   SnakeAltPromoter is a Snakemake\-based pipeline for streamlined\, reproducible\, and scalable analysis of
   alternative promoter usage from RNA\-seq or CAGE data. It integrates all major steps—from raw read
   preprocessing to promoter\-level quantification and differential analysis—using state\-of\-the\-art tools.



.. conda:package:: snakealtpromoter

   |downloads_snakealtpromoter| |docker_snakealtpromoter|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on python: ``>=3.11``
   :depends on snakemake: 
   :depends on streamlit: 

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

    pixi global install snakealtpromoter

to add into an existing workspace instead, run::

    pixi add snakealtpromoter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakealtpromoter

Alternatively, to install into a new environment, run::

    conda create -n envname snakealtpromoter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakealtpromoter:<tag>

(see `snakealtpromoter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakealtpromoter| image:: https://img.shields.io/conda/dn/bioconda/snakealtpromoter.svg?style=flat
   :target: https://anaconda.org/bioconda/snakealtpromoter
   :alt:   (downloads)
.. |docker_snakealtpromoter| image:: https://quay.io/repository/biocontainers/snakealtpromoter/status
   :target: https://quay.io/repository/biocontainers/snakealtpromoter
.. _`snakealtpromoter/tags`: https://quay.io/repository/biocontainers/snakealtpromoter?tab=tags


.. raw:: html

    <script>
        var package = "snakealtpromoter";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakealtpromoter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakealtpromoter/README.html