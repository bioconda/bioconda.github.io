:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdb2fasta'
.. highlight: bash

pdb2fasta
=========

.. conda:recipe:: pdb2fasta
   :replaces_section_title:
   :noindex:

   Convert PDB structures to FASTA sequences.

   :homepage: https://github.com/kad-ecoli/pdb2fasta
   :license: GPL2 / GPL-2-only
   :recipe: /`pdb2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdb2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdb2fasta/meta.yaml>`_

   


.. conda:package:: pdb2fasta

   |downloads_pdb2fasta| |docker_pdb2fasta|

   :versions:
      
      

      ``1.0-0``

      

   
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

    pixi global install pdb2fasta

to add into an existing workspace instead, run::

    pixi add pdb2fasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pdb2fasta

Alternatively, to install into a new environment, run::

    conda create -n envname pdb2fasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pdb2fasta:<tag>

(see `pdb2fasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pdb2fasta| image:: https://img.shields.io/conda/dn/bioconda/pdb2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/pdb2fasta
   :alt:   (downloads)
.. |docker_pdb2fasta| image:: https://quay.io/repository/biocontainers/pdb2fasta/status
   :target: https://quay.io/repository/biocontainers/pdb2fasta
.. _`pdb2fasta/tags`: https://quay.io/repository/biocontainers/pdb2fasta?tab=tags


.. raw:: html

    <script>
        var package = "pdb2fasta";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdb2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdb2fasta/README.html