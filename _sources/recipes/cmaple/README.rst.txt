:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmaple'
.. highlight: bash

cmaple
======

.. conda:recipe:: cmaple
   :replaces_section_title:
   :noindex:

   MAximum Parsimonious Likelihood Estimation in C\/C\+\+.

   :homepage: https://github.com/iqtree/cmaple
   :documentation: https://github.com/iqtree/cmaple/wiki
   
   :license: GPL2 / GPL-2.0
   :recipe: /`cmaple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmaple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmaple/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msae134`

   


.. conda:package:: cmaple

   |downloads_cmaple| |docker_cmaple|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install cmaple

to add into an existing workspace instead, run::

    pixi add cmaple

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cmaple

Alternatively, to install into a new environment, run::

    conda create -n envname cmaple

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cmaple:<tag>

(see `cmaple/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cmaple| image:: https://img.shields.io/conda/dn/bioconda/cmaple.svg?style=flat
   :target: https://anaconda.org/bioconda/cmaple
   :alt:   (downloads)
.. |docker_cmaple| image:: https://quay.io/repository/biocontainers/cmaple/status
   :target: https://quay.io/repository/biocontainers/cmaple
.. _`cmaple/tags`: https://quay.io/repository/biocontainers/cmaple?tab=tags


.. raw:: html

    <script>
        var package = "cmaple";
        var versions = ["1.1.0","1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmaple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmaple/README.html