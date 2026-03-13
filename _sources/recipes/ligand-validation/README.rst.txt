:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ligand-validation'
.. highlight: bash

ligand-validation
=================

.. conda:recipe:: ligand-validation
   :replaces_section_title:
   :noindex:

   Extract ligand and binding site information from PDB X\-ray validation reports

   :homepage: https://git.scicore.unibas.ch/schwede/ligand-validation
   :documentation: https://git.scicore.unibas.ch/schwede/ligand-validation/-/blob/master/README.md
   
   :license: Apache-2.0
   :recipe: /`ligand-validation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ligand-validation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ligand-validation/meta.yaml>`_

   This project contains script for the validation of the quality of a PDB entry\, ligand and binding site
   based on the PDB Validation pipeline.



.. conda:package:: ligand-validation

   |downloads_ligand-validation| |docker_ligand-validation|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on lxml: 
   :depends on mmcif: 
   :depends on openstructure: 
   :depends on pandas: 
   :depends on python: 

   :additional platforms:
      

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

    pixi global install ligand-validation

to add into an existing workspace instead, run::

    pixi add ligand-validation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ligand-validation

Alternatively, to install into a new environment, run::

    conda create -n envname ligand-validation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ligand-validation:<tag>

(see `ligand-validation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ligand-validation| image:: https://img.shields.io/conda/dn/bioconda/ligand-validation.svg?style=flat
   :target: https://anaconda.org/bioconda/ligand-validation
   :alt:   (downloads)
.. |docker_ligand-validation| image:: https://quay.io/repository/biocontainers/ligand-validation/status
   :target: https://quay.io/repository/biocontainers/ligand-validation
.. _`ligand-validation/tags`: https://quay.io/repository/biocontainers/ligand-validation?tab=tags


.. raw:: html

    <script>
        var package = "ligand-validation";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ligand-validation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ligand-validation/README.html