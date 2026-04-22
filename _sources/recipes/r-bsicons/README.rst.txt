:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bsicons'
.. highlight: bash

r-bsicons
=========

.. conda:recipe:: r-bsicons
   :replaces_section_title:
   :noindex:

   Easily use \'Bootstrap\' icons inside \'Shiny\' apps and \'R Markdown\' documents. More generally\, icons can be inserted in any \'htmltools\' document through inline \'SVG\'.

   :homepage: https://github.com/rstudio/bsicons
   :license: MIT / MIT
   :recipe: /`r-bsicons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bsicons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bsicons/meta.yaml>`_

   


.. conda:package:: r-bsicons

   |downloads_r-bsicons| |docker_r-bsicons|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-htmltools: 
   :depends on r-rlang: 

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

    pixi global install r-bsicons

to add into an existing workspace instead, run::

    pixi add r-bsicons

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bsicons

Alternatively, to install into a new environment, run::

    conda create -n envname r-bsicons

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bsicons:<tag>

(see `r-bsicons/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bsicons| image:: https://img.shields.io/conda/dn/bioconda/r-bsicons.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bsicons
   :alt:   (downloads)
.. |docker_r-bsicons| image:: https://quay.io/repository/biocontainers/r-bsicons/status
   :target: https://quay.io/repository/biocontainers/r-bsicons
.. _`r-bsicons/tags`: https://quay.io/repository/biocontainers/r-bsicons?tab=tags


.. raw:: html

    <script>
        var package = "r-bsicons";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bsicons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bsicons/README.html