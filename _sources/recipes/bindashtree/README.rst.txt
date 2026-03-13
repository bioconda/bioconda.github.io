:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bindashtree'
.. highlight: bash

bindashtree
===========

.. conda:recipe:: bindashtree
   :replaces_section_title:
   :noindex:

   bindashtree is a ultra\-fast tool to build genome phylogenetic tree via Binwise Densified MinHash and Rapid Neighbor\-joining

   :homepage: https://github.com/jianshu93/bindashtree
   :license: MIT
   :recipe: /`bindashtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindashtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindashtree/meta.yaml>`_

   


.. conda:package:: bindashtree

   |downloads_bindashtree| |docker_bindashtree|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install bindashtree

to add into an existing workspace instead, run::

    pixi add bindashtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bindashtree

Alternatively, to install into a new environment, run::

    conda create -n envname bindashtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bindashtree:<tag>

(see `bindashtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bindashtree| image:: https://img.shields.io/conda/dn/bioconda/bindashtree.svg?style=flat
   :target: https://anaconda.org/bioconda/bindashtree
   :alt:   (downloads)
.. |docker_bindashtree| image:: https://quay.io/repository/biocontainers/bindashtree/status
   :target: https://quay.io/repository/biocontainers/bindashtree
.. _`bindashtree/tags`: https://quay.io/repository/biocontainers/bindashtree?tab=tags


.. raw:: html

    <script>
        var package = "bindashtree";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bindashtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bindashtree/README.html