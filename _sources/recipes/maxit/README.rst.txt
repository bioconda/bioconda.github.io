:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxit'
.. highlight: bash

maxit
=====

.. conda:recipe:: maxit
   :replaces_section_title:
   :noindex:

   MAXIT assists in the processing and curation of macromolecular structure data.

   :homepage: https://sw-tools.rcsb.org/apps/MAXIT
   :documentation: https://sw-tools.rcsb.org/apps/MAXIT/README-source
   
   :license: OTHER / RCSB PDB Software License
   :recipe: /`maxit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxit/meta.yaml>`_

   MAXIT assists in the processing and curation of macromolecular structure data. MAXIT can\:
     \- Read and write PDB and mmCIF format files\, and translate between file formats.
     \- Perform consistency checks on coordinates\, sequence\, and crystal data.
     \- Automatically construct\, transform\, and merge information between formats
     \- Align residue numbering in the coordinates with the sequence
     \- Reorder and rename atoms in standard and nonstandard residues and ligands according to the Chemical Component Dictionary
     \- Assign ligands the same chain IDs as the adjacent polymers
     \- Detect missing or additional atoms



.. conda:package:: maxit

   |downloads_maxit| |docker_maxit|

   :versions:
      
      

      ``11.400-0``,  ``11.300-0``,  ``11.200-3``,  ``11.200-2``,  ``11.200-1``,  ``11.200-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on tcsh: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install maxit

to add into an existing workspace instead, run::

    pixi add maxit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maxit

Alternatively, to install into a new environment, run::

    conda create -n envname maxit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maxit:<tag>

(see `maxit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maxit| image:: https://img.shields.io/conda/dn/bioconda/maxit.svg?style=flat
   :target: https://anaconda.org/bioconda/maxit
   :alt:   (downloads)
.. |docker_maxit| image:: https://quay.io/repository/biocontainers/maxit/status
   :target: https://quay.io/repository/biocontainers/maxit
.. _`maxit/tags`: https://quay.io/repository/biocontainers/maxit?tab=tags


.. raw:: html

    <script>
        var package = "maxit";
        var versions = ["11.400","11.300","11.200","11.200","11.200"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxit/README.html