:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capcruncher-tools'
.. highlight: bash

capcruncher-tools
=================

.. conda:recipe:: capcruncher-tools
   :replaces_section_title:
   :noindex:

   Extra utilities to enhance CapCruncher

   :homepage: https://github.com/alsmith151/CapCruncherTools
   :license: GPL-3.0-only
   :recipe: /`capcruncher-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher-tools/meta.yaml>`_

   


.. conda:package:: capcruncher-tools

   |downloads_capcruncher-tools| |docker_capcruncher-tools|

   :versions:
      
      

      ``0.2.6-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on loguru: ``>=0.7.0,<0.8.0``
   :depends on pandas: ``>=2.1.0,<3.0.0``
   :depends on polars: ``>=1.6.0,<2.0.0``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``

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

    pixi global install capcruncher-tools

to add into an existing workspace instead, run::

    pixi add capcruncher-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install capcruncher-tools

Alternatively, to install into a new environment, run::

    conda create -n envname capcruncher-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/capcruncher-tools:<tag>

(see `capcruncher-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_capcruncher-tools| image:: https://img.shields.io/conda/dn/bioconda/capcruncher-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/capcruncher-tools
   :alt:   (downloads)
.. |docker_capcruncher-tools| image:: https://quay.io/repository/biocontainers/capcruncher-tools/status
   :target: https://quay.io/repository/biocontainers/capcruncher-tools
.. _`capcruncher-tools/tags`: https://quay.io/repository/biocontainers/capcruncher-tools?tab=tags


.. raw:: html

    <script>
        var package = "capcruncher-tools";
        var versions = ["0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capcruncher-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capcruncher-tools/README.html