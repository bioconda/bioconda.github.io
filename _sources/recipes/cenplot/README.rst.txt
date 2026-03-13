:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cenplot'
.. highlight: bash

cenplot
=======

.. conda:recipe:: cenplot
   :replaces_section_title:
   :noindex:

   Centromere plotting library.

   :homepage: https://github.com/logsdon-lab/CenPlot
   :license: MIT
   :recipe: /`cenplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenplot/meta.yaml>`_

   


.. conda:package:: cenplot

   |downloads_cenplot| |docker_cenplot|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends on censtats: ``>=0.0.13``
   :depends on intervaltree: ``>=3.1.0``
   :depends on matplotlib-base: ``>=3.10.0``
   :depends on numpy: ``>=2.2.1``
   :depends on polars: ``>=1.19.0``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=6.0.2``

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

    pixi global install cenplot

to add into an existing workspace instead, run::

    pixi add cenplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cenplot

Alternatively, to install into a new environment, run::

    conda create -n envname cenplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cenplot:<tag>

(see `cenplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cenplot| image:: https://img.shields.io/conda/dn/bioconda/cenplot.svg?style=flat
   :target: https://anaconda.org/bioconda/cenplot
   :alt:   (downloads)
.. |docker_cenplot| image:: https://quay.io/repository/biocontainers/cenplot/status
   :target: https://quay.io/repository/biocontainers/cenplot
.. _`cenplot/tags`: https://quay.io/repository/biocontainers/cenplot?tab=tags


.. raw:: html

    <script>
        var package = "cenplot";
        var versions = ["0.1.6","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cenplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cenplot/README.html