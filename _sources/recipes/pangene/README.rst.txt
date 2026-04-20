:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangene'
.. highlight: bash

pangene
=======

.. conda:recipe:: pangene
   :replaces_section_title:
   :noindex:

   Pangene is a command\-line tool to construct a pangenome gene graph.

   :homepage: https://github.com/lh3/pangene
   :license: Unknown
   :recipe: /`pangene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangene/meta.yaml>`_

   


.. conda:package:: pangene

   |downloads_pangene| |docker_pangene|

   :versions:
      
      

      ``r231-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install pangene

to add into an existing workspace instead, run::

    pixi add pangene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangene

Alternatively, to install into a new environment, run::

    conda create -n envname pangene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangene:<tag>

(see `pangene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangene| image:: https://img.shields.io/conda/dn/bioconda/pangene.svg?style=flat
   :target: https://anaconda.org/bioconda/pangene
   :alt:   (downloads)
.. |docker_pangene| image:: https://quay.io/repository/biocontainers/pangene/status
   :target: https://quay.io/repository/biocontainers/pangene
.. _`pangene/tags`: https://quay.io/repository/biocontainers/pangene?tab=tags


.. raw:: html

    <script>
        var package = "pangene";
        var versions = ["r231"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangene/README.html