:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maf2synteny'
.. highlight: bash

maf2synteny
===========

.. conda:recipe:: maf2synteny
   :replaces_section_title:
   :noindex:

   A tool that postprocesses whole genome alignment \(for two or more genomes\) and produces coarse\-grained synteny blocks.

   :homepage: https://github.com/fenderglass/maf2synteny
   :license: BSD / BSD
   :recipe: /`maf2synteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny/meta.yaml>`_

   


.. conda:package:: maf2synteny

   |downloads_maf2synteny| |docker_maf2synteny|

   :versions:
      
      

      ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install maf2synteny

to add into an existing workspace instead, run::

    pixi add maf2synteny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maf2synteny

Alternatively, to install into a new environment, run::

    conda create -n envname maf2synteny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maf2synteny:<tag>

(see `maf2synteny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maf2synteny| image:: https://img.shields.io/conda/dn/bioconda/maf2synteny.svg?style=flat
   :target: https://anaconda.org/bioconda/maf2synteny
   :alt:   (downloads)
.. |docker_maf2synteny| image:: https://quay.io/repository/biocontainers/maf2synteny/status
   :target: https://quay.io/repository/biocontainers/maf2synteny
.. _`maf2synteny/tags`: https://quay.io/repository/biocontainers/maf2synteny?tab=tags


.. raw:: html

    <script>
        var package = "maf2synteny";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maf2synteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maf2synteny/README.html