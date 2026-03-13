:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lr_gapcloser'
.. highlight: bash

lr_gapcloser
============

.. conda:recipe:: lr_gapcloser
   :replaces_section_title:
   :noindex:

   Use long sequenced reads to close gaps in assemblies.

   :homepage: https://github.com/CAFS-bioinformatics/LR_Gapcloser
   :documentation: https://github.com/CAFS-bioinformatics/LR_Gapcloser/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lr_gapcloser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lr_gapcloser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lr_gapcloser/meta.yaml>`_
   :links: biotools: :biotools:`lrgapcloser`, doi: :doi:`10.1093/gigascience/giy157`

   


.. conda:package:: lr_gapcloser

   |downloads_lr_gapcloser| |docker_lr_gapcloser|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on bwa: 
   :depends on minimap2: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install lr_gapcloser

to add into an existing workspace instead, run::

    pixi add lr_gapcloser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lr_gapcloser

Alternatively, to install into a new environment, run::

    conda create -n envname lr_gapcloser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lr_gapcloser:<tag>

(see `lr_gapcloser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lr_gapcloser| image:: https://img.shields.io/conda/dn/bioconda/lr_gapcloser.svg?style=flat
   :target: https://anaconda.org/bioconda/lr_gapcloser
   :alt:   (downloads)
.. |docker_lr_gapcloser| image:: https://quay.io/repository/biocontainers/lr_gapcloser/status
   :target: https://quay.io/repository/biocontainers/lr_gapcloser
.. _`lr_gapcloser/tags`: https://quay.io/repository/biocontainers/lr_gapcloser?tab=tags


.. raw:: html

    <script>
        var package = "lr_gapcloser";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lr_gapcloser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lr_gapcloser/README.html