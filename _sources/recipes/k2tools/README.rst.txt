:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'k2tools'
.. highlight: bash

k2tools
=======

.. conda:recipe:: k2tools
   :replaces_section_title:
   :noindex:

   Tools for post\-processing kraken2 outputs.

   :homepage: https://github.com/fulcrumgenomics/k2tools
   :documentation: https://github.com/fulcrumgenomics/k2tools/blob/k2tools-v0.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`k2tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k2tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k2tools/meta.yaml>`_

   


.. conda:package:: k2tools

   |downloads_k2tools| |docker_k2tools|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

    pixi global install k2tools

to add into an existing workspace instead, run::

    pixi add k2tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install k2tools

Alternatively, to install into a new environment, run::

    conda create -n envname k2tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/k2tools:<tag>

(see `k2tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_k2tools| image:: https://img.shields.io/conda/dn/bioconda/k2tools.svg?style=flat
   :target: https://anaconda.org/bioconda/k2tools
   :alt:   (downloads)
.. |docker_k2tools| image:: https://quay.io/repository/biocontainers/k2tools/status
   :target: https://quay.io/repository/biocontainers/k2tools
.. _`k2tools/tags`: https://quay.io/repository/biocontainers/k2tools?tab=tags


.. raw:: html

    <script>
        var package = "k2tools";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/k2tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/k2tools/README.html