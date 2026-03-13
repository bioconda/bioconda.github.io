:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam2pairwise'
.. highlight: bash

sam2pairwise
============

.. conda:recipe:: sam2pairwise
   :replaces_section_title:
   :noindex:

   sam2pairwise takes a SAM file and uses the CIGAR and MD tag to reconstruct the pairwise alignment of each read

   :homepage: https://github.com/mlafave/sam2pairwise
   :documentation: https://github.com/mlafave/sam2pairwise/blob/master/README.md
   
   :license: MIT
   :recipe: /`sam2pairwise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2pairwise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2pairwise/meta.yaml>`_

   


.. conda:package:: sam2pairwise

   |downloads_sam2pairwise| |docker_sam2pairwise|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
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

    pixi global install sam2pairwise

to add into an existing workspace instead, run::

    pixi add sam2pairwise

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sam2pairwise

Alternatively, to install into a new environment, run::

    conda create -n envname sam2pairwise

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sam2pairwise:<tag>

(see `sam2pairwise/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sam2pairwise| image:: https://img.shields.io/conda/dn/bioconda/sam2pairwise.svg?style=flat
   :target: https://anaconda.org/bioconda/sam2pairwise
   :alt:   (downloads)
.. |docker_sam2pairwise| image:: https://quay.io/repository/biocontainers/sam2pairwise/status
   :target: https://quay.io/repository/biocontainers/sam2pairwise
.. _`sam2pairwise/tags`: https://quay.io/repository/biocontainers/sam2pairwise?tab=tags


.. raw:: html

    <script>
        var package = "sam2pairwise";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam2pairwise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam2pairwise/README.html