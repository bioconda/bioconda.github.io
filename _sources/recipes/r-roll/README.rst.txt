:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-roll'
.. highlight: bash

r-roll
======

.. conda:recipe:: r-roll
   :replaces_section_title:
   :noindex:

   Fast and efficient computation of rolling and expanding statistics for time\-series data.

   :homepage: https://github.com/jasonjfoster/roll
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-roll <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-roll>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-roll/meta.yaml>`_

   


.. conda:package:: r-roll

   |downloads_r-roll| |docker_r-roll|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on libcxx: ``>=19``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install r-roll

to add into an existing workspace instead, run::

    pixi add r-roll

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-roll

Alternatively, to install into a new environment, run::

    conda create -n envname r-roll

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-roll:<tag>

(see `r-roll/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-roll| image:: https://img.shields.io/conda/dn/bioconda/r-roll.svg?style=flat
   :target: https://anaconda.org/bioconda/r-roll
   :alt:   (downloads)
.. |docker_r-roll| image:: https://quay.io/repository/biocontainers/r-roll/status
   :target: https://quay.io/repository/biocontainers/r-roll
.. _`r-roll/tags`: https://quay.io/repository/biocontainers/r-roll?tab=tags


.. raw:: html

    <script>
        var package = "r-roll";
        var versions = ["1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-roll/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-roll/README.html