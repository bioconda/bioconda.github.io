:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hic-straw'
.. highlight: bash

hic-straw
=========

.. conda:recipe:: hic-straw
   :replaces_section_title:
   :noindex:

   Straw bound with pybind11.

   :homepage: https://github.com/aidenlab/straw
   :documentation: https://github.com/aidenlab/straw/wiki
   
   :license: MIT / MIT
   :recipe: /`hic-straw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic-straw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic-straw/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2015.07.012`

   


.. conda:package:: hic-straw

   |downloads_hic-straw| |docker_hic-straw|

   :versions:
      
      

      ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pybind11: ``>=2.4``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install hic-straw

to add into an existing workspace instead, run::

    pixi add hic-straw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hic-straw

Alternatively, to install into a new environment, run::

    conda create -n envname hic-straw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hic-straw:<tag>

(see `hic-straw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hic-straw| image:: https://img.shields.io/conda/dn/bioconda/hic-straw.svg?style=flat
   :target: https://anaconda.org/bioconda/hic-straw
   :alt:   (downloads)
.. |docker_hic-straw| image:: https://quay.io/repository/biocontainers/hic-straw/status
   :target: https://quay.io/repository/biocontainers/hic-straw
.. _`hic-straw/tags`: https://quay.io/repository/biocontainers/hic-straw?tab=tags


.. raw:: html

    <script>
        var package = "hic-straw";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hic-straw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hic-straw/README.html