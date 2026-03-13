:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioemu'
.. highlight: bash

bioemu
======

.. conda:recipe:: bioemu
   :replaces_section_title:
   :noindex:

   Biomolecular emulator for scalable emulation of protein equilibrium ensembles with generative deep learning

   :homepage: https://github.com/microsoft/bioemu
   :license: Apache-2.0 AND MIT
   :recipe: /`bioemu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioemu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioemu/meta.yaml>`_
   :links: biotools: :biotools:`bioemu`, doi: :doi:`10.1126/science.adv9817`, doi: :doi:`10.1101/2024.12.05.626885v2`

   


.. conda:package:: bioemu

   |downloads_bioemu| |docker_bioemu|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on bio: ``>=1.5.9``
   :depends on dm-tree: 
   :depends on fire: ``>=0.7.0``
   :depends on huggingface_hub: 
   :depends on hydra-core: 
   :depends on mdtraj: ``>=1.9.9``
   :depends on modelcif: ``0.7``
   :depends on python: ``>=3.10``
   :depends on pytorch: ``>=2.6.0``
   :depends on stackprinter: 
   :depends on torch-geometric: ``>=2.6.1``
   :depends on typer: 

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

    pixi global install bioemu

to add into an existing workspace instead, run::

    pixi add bioemu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioemu

Alternatively, to install into a new environment, run::

    conda create -n envname bioemu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioemu:<tag>

(see `bioemu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioemu| image:: https://img.shields.io/conda/dn/bioconda/bioemu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioemu
   :alt:   (downloads)
.. |docker_bioemu| image:: https://quay.io/repository/biocontainers/bioemu/status
   :target: https://quay.io/repository/biocontainers/bioemu
.. _`bioemu/tags`: https://quay.io/repository/biocontainers/bioemu?tab=tags


.. raw:: html

    <script>
        var package = "bioemu";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioemu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioemu/README.html