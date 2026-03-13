:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yaggo'
.. highlight: bash

yaggo
=====

.. conda:recipe:: yaggo
   :replaces_section_title:
   :noindex:

   Yaggo is a tool to generate command line parsers for C\+\+. Yaggo stands for \"Yet Another GenGetOpt\" and is inspired by GNU Gengetopt.

   :homepage: https://github.com/gmarcais/yaggo
   :license: GPL / GPL-3.0
   :recipe: /`yaggo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo/meta.yaml>`_

   


.. conda:package:: yaggo

   |downloads_yaggo| |docker_yaggo|

   :versions:
      
      

      ``1.5.10-1``,  ``1.5.10-0``,  ``1.5.9-1``,  ``1.5.9-0``,  ``1.5.8-0``

      

   
   :depends on ruby: ``>2.2.3``

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

    pixi global install yaggo

to add into an existing workspace instead, run::

    pixi add yaggo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yaggo

Alternatively, to install into a new environment, run::

    conda create -n envname yaggo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yaggo:<tag>

(see `yaggo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yaggo| image:: https://img.shields.io/conda/dn/bioconda/yaggo.svg?style=flat
   :target: https://anaconda.org/bioconda/yaggo
   :alt:   (downloads)
.. |docker_yaggo| image:: https://quay.io/repository/biocontainers/yaggo/status
   :target: https://quay.io/repository/biocontainers/yaggo
.. _`yaggo/tags`: https://quay.io/repository/biocontainers/yaggo?tab=tags


.. raw:: html

    <script>
        var package = "yaggo";
        var versions = ["1.5.10","1.5.10","1.5.9","1.5.9","1.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yaggo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yaggo/README.html