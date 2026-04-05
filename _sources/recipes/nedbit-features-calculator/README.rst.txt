:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nedbit-features-calculator'
.. highlight: bash

nedbit-features-calculator
==========================

.. conda:recipe:: nedbit-features-calculator
   :replaces_section_title:
   :noindex:

   Network diffusion and biology\-informed topological features

   :homepage: https://github.com/AndMastro/NIAPU
   :license: MIT
   :recipe: /`nedbit-features-calculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedbit-features-calculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedbit-features-calculator/meta.yaml>`_

   


.. conda:package:: nedbit-features-calculator

   |downloads_nedbit-features-calculator| |docker_nedbit-features-calculator|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install nedbit-features-calculator

to add into an existing workspace instead, run::

    pixi add nedbit-features-calculator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nedbit-features-calculator

Alternatively, to install into a new environment, run::

    conda create -n envname nedbit-features-calculator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nedbit-features-calculator:<tag>

(see `nedbit-features-calculator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nedbit-features-calculator| image:: https://img.shields.io/conda/dn/bioconda/nedbit-features-calculator.svg?style=flat
   :target: https://anaconda.org/bioconda/nedbit-features-calculator
   :alt:   (downloads)
.. |docker_nedbit-features-calculator| image:: https://quay.io/repository/biocontainers/nedbit-features-calculator/status
   :target: https://quay.io/repository/biocontainers/nedbit-features-calculator
.. _`nedbit-features-calculator/tags`: https://quay.io/repository/biocontainers/nedbit-features-calculator?tab=tags


.. raw:: html

    <script>
        var package = "nedbit-features-calculator";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nedbit-features-calculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nedbit-features-calculator/README.html