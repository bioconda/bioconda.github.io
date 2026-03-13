:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ninja-nj'
.. highlight: bash

ninja-nj
========

.. conda:recipe:: ninja-nj
   :replaces_section_title:
   :noindex:

   Nearly Infinite Neighbor Joining Application

   :homepage: https://github.com/TravisWheelerLab/NINJA
   :documentation: https://github.com/TravisWheelerLab/NINJA/blob/1.00-cluster_only/README.md
   
   :license: MIT / MIT
   :recipe: /`ninja-nj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj/meta.yaml>`_
   :links: biotools: :biotools:`ninja`

   


.. conda:package:: ninja-nj

   |downloads_ninja-nj| |docker_ninja-nj|

   :versions:
      
      

      ``1.00-1``,  ``1.00-0``,  ``0.98-3``,  ``0.98-2``,  ``0.98-1``,  ``0.98-0``,  ``0.97-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
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

    pixi global install ninja-nj

to add into an existing workspace instead, run::

    pixi add ninja-nj

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ninja-nj

Alternatively, to install into a new environment, run::

    conda create -n envname ninja-nj

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ninja-nj:<tag>

(see `ninja-nj/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ninja-nj| image:: https://img.shields.io/conda/dn/bioconda/ninja-nj.svg?style=flat
   :target: https://anaconda.org/bioconda/ninja-nj
   :alt:   (downloads)
.. |docker_ninja-nj| image:: https://quay.io/repository/biocontainers/ninja-nj/status
   :target: https://quay.io/repository/biocontainers/ninja-nj
.. _`ninja-nj/tags`: https://quay.io/repository/biocontainers/ninja-nj?tab=tags


.. raw:: html

    <script>
        var package = "ninja-nj";
        var versions = ["1.00","1.00","0.98","0.98","0.98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ninja-nj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ninja-nj/README.html