:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pio'
.. highlight: bash

r-pio
=====

.. conda:recipe:: r-pio
   :replaces_section_title:
   :noindex:

   Pretty I\/O output to the console

   :homepage: https://github.com/caravagn/pio
   :documentation: https://caravagn.github.io/pio/
   
   :license: MIT / MIT
   :recipe: /`r-pio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pio/meta.yaml>`_

   pio is a package to print nice coloured outputs to the console. If you work with 
   R scripts that generate several loads or outputs\, or if you just like to organize in a tidy 
   way on\-screen outputs of your computations\, then \`pio\`\'s pretty I\/O system is the package 
   that you are looking for.



.. conda:package:: r-pio

   |downloads_r-pio| |docker_r-pio|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-crayon: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-roxygen2: 
   :depends on r-tibble: 

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

    pixi global install r-pio

to add into an existing workspace instead, run::

    pixi add r-pio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pio

Alternatively, to install into a new environment, run::

    conda create -n envname r-pio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pio:<tag>

(see `r-pio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pio| image:: https://img.shields.io/conda/dn/bioconda/r-pio.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pio
   :alt:   (downloads)
.. |docker_r-pio| image:: https://quay.io/repository/biocontainers/r-pio/status
   :target: https://quay.io/repository/biocontainers/r-pio
.. _`r-pio/tags`: https://quay.io/repository/biocontainers/r-pio?tab=tags


.. raw:: html

    <script>
        var package = "r-pio";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pio/README.html