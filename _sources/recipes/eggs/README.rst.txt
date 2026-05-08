:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eggs'
.. highlight: bash

eggs
====

.. conda:recipe:: eggs
   :replaces_section_title:
   :noindex:

   Empirical Genotype Generalizer for Samples

   :homepage: https://github.com/TQ-Smith/EGGS
   :documentation: https://github.com/TQ-Smith/EGGS/wiki
   
   :license: MIT
   :recipe: /`eggs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggs/meta.yaml>`_

   EGGS is a tool to manipulate genotypes. It can split ms\-replicates to 
   multiple VCF files and convert EIGENSTRAT\/ANCESTRYMAP files to VCF.
   EGGS is able to introduce various sorts of error\, such as sequencing error\,
   deamination\, and missing genotypes into simulated replicates. EGGS is
   written in C with no dependencies.



.. conda:package:: eggs

   |downloads_eggs| |docker_eggs|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install eggs

to add into an existing workspace instead, run::

    pixi add eggs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eggs

Alternatively, to install into a new environment, run::

    conda create -n envname eggs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eggs:<tag>

(see `eggs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eggs| image:: https://img.shields.io/conda/dn/bioconda/eggs.svg?style=flat
   :target: https://anaconda.org/bioconda/eggs
   :alt:   (downloads)
.. |docker_eggs| image:: https://quay.io/repository/biocontainers/eggs/status
   :target: https://quay.io/repository/biocontainers/eggs
.. _`eggs/tags`: https://quay.io/repository/biocontainers/eggs?tab=tags


.. raw:: html

    <script>
        var package = "eggs";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eggs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eggs/README.html