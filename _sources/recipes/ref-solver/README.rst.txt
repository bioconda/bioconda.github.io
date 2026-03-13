:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ref-solver'
.. highlight: bash

ref-solver
==========

.. conda:recipe:: ref-solver
   :replaces_section_title:
   :noindex:

   Solve reference genome identification from BAM\/SAM headers.

   :homepage: https://github.com/fulcrumgenomics/ref-solver
   :documentation: https://github.com/fulcrumgenomics/ref-solver/blob/v0.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`ref-solver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ref-solver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ref-solver/meta.yaml>`_

   


.. conda:package:: ref-solver

   |downloads_ref-solver| |docker_ref-solver|

   :versions:
      
      

      ``0.1.0-0``

      

   

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

    pixi global install ref-solver

to add into an existing workspace instead, run::

    pixi add ref-solver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ref-solver

Alternatively, to install into a new environment, run::

    conda create -n envname ref-solver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ref-solver:<tag>

(see `ref-solver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ref-solver| image:: https://img.shields.io/conda/dn/bioconda/ref-solver.svg?style=flat
   :target: https://anaconda.org/bioconda/ref-solver
   :alt:   (downloads)
.. |docker_ref-solver| image:: https://quay.io/repository/biocontainers/ref-solver/status
   :target: https://quay.io/repository/biocontainers/ref-solver
.. _`ref-solver/tags`: https://quay.io/repository/biocontainers/ref-solver?tab=tags


.. raw:: html

    <script>
        var package = "ref-solver";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ref-solver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ref-solver/README.html