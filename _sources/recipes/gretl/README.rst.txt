:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gretl'
.. highlight: bash

gretl
=====

.. conda:recipe:: gretl
   :replaces_section_title:
   :noindex:

   gretl is a tool to compute a range of statistics on variation graphs in gfa format.

   :homepage: https://github.com/moinsebi/gretl
   :license: MIT / MIT
   :recipe: /`gretl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretl/meta.yaml>`_

   


.. conda:package:: gretl

   |downloads_gretl| |docker_gretl|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: ``>=3.9``
   :depends on numpy: ``>=2.1.3``
   :depends on pandas: ``>=2.1.3``
   :depends on python: ``3.10.*``
   :depends on seaborn-base: ``>=0.13.2``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install gretl

to add into an existing workspace instead, run::

    pixi add gretl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gretl

Alternatively, to install into a new environment, run::

    conda create -n envname gretl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gretl:<tag>

(see `gretl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gretl| image:: https://img.shields.io/conda/dn/bioconda/gretl.svg?style=flat
   :target: https://anaconda.org/bioconda/gretl
   :alt:   (downloads)
.. |docker_gretl| image:: https://quay.io/repository/biocontainers/gretl/status
   :target: https://quay.io/repository/biocontainers/gretl
.. _`gretl/tags`: https://quay.io/repository/biocontainers/gretl?tab=tags


.. raw:: html

    <script>
        var package = "gretl";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gretl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gretl/README.html