:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mim'
.. highlight: bash

mim
===

.. conda:recipe:: mim
   :replaces_section_title:
   :noindex:

   A small\, auxiliary index to massively improve parallel fastq parsing.

   :homepage: https://github.com/COMBINE-lab/mim
   :license: BSD-3-Clause
   :recipe: /`mim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mim/meta.yaml>`_

   


.. conda:package:: mim

   |downloads_mim| |docker_mim|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on libgcc: ``>=14``

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

    pixi global install mim

to add into an existing workspace instead, run::

    pixi add mim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mim

Alternatively, to install into a new environment, run::

    conda create -n envname mim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mim:<tag>

(see `mim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mim| image:: https://img.shields.io/conda/dn/bioconda/mim.svg?style=flat
   :target: https://anaconda.org/bioconda/mim
   :alt:   (downloads)
.. |docker_mim| image:: https://quay.io/repository/biocontainers/mim/status
   :target: https://quay.io/repository/biocontainers/mim
.. _`mim/tags`: https://quay.io/repository/biocontainers/mim?tab=tags


.. raw:: html

    <script>
        var package = "mim";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mim/README.html