:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'go-figure'
.. highlight: bash

go-figure
=========

.. conda:recipe:: go-figure
   :replaces_section_title:
   :noindex:

   GO\-Figure\! offers a simple solution for command\-line plotting of informative summary visualisations of lists of GO terms\, designed to support exploratory data analyses and multiple dataset comparisons.

   :homepage: https://gitlab.com/evogenlab/GO-Figure
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`go-figure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/go-figure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/go-figure/meta.yaml>`_

   GO\-Figure\! offers a simple solution for command\-line plotting of informative summary visualisations of lists of GO terms\, designed to support exploratory data analyses and multiple dataset comparisons.


.. conda:package:: go-figure

   |downloads_go-figure| |docker_go-figure|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on adjusttext: ``0.7.3.1.*``
   :depends on matplotlib-base: ``3.7.1.*``
   :depends on python: ``>=3``
   :depends on scikit-learn: ``1.2.2.*``
   :depends on seaborn: ``0.12.2.*``

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

    pixi global install go-figure

to add into an existing workspace instead, run::

    pixi add go-figure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install go-figure

Alternatively, to install into a new environment, run::

    conda create -n envname go-figure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/go-figure:<tag>

(see `go-figure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_go-figure| image:: https://img.shields.io/conda/dn/bioconda/go-figure.svg?style=flat
   :target: https://anaconda.org/bioconda/go-figure
   :alt:   (downloads)
.. |docker_go-figure| image:: https://quay.io/repository/biocontainers/go-figure/status
   :target: https://quay.io/repository/biocontainers/go-figure
.. _`go-figure/tags`: https://quay.io/repository/biocontainers/go-figure?tab=tags


.. raw:: html

    <script>
        var package = "go-figure";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/go-figure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/go-figure/README.html