:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roadies'
.. highlight: bash

roadies
=======

.. conda:recipe:: roadies
   :replaces_section_title:
   :noindex:

   Reference\-free Orthology\-free Alignment\-free DIscordance aware Estimation of Species tree \(ROADIES\).

   :homepage: https://github.com/TurakhiaLab/ROADIES
   :documentation: https://turakhia.ucsd.edu/ROADIES
   
   :license: MIT / MIT
   :recipe: /`roadies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roadies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roadies/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.05.27.596098`

   ROADIES is an end\-to\-end pipeline designed for phylogenetic tree inference of the species directly from their raw genomic assemblies. ROADIES offers a fully automated\, easy\-to\-use\, scalable solution\, eliminating any error\-prone manual steps and providing unique flexibility in adjusting the tradeoff between accuracy and runtime.



.. conda:package:: roadies

   |downloads_roadies| |docker_roadies|

   :versions:
      
      

      ``0.1.10-0``,  ``0.1.8-0``,  ``0.1.4-0``

      

   
   :depends on alive-progress: 
   :depends on aster: ``>=1.19``
   :depends on biopython: 
   :depends on boost-cpp: 
   :depends on ete3: 
   :depends on fasttree: ``>=2.1.11``
   :depends on lastz: ``>=1.04.52``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on mash: ``>=2``
   :depends on mashtree: ``1.4.6``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pasta: ``>=1.9.0``
   :depends on perl: ``>=5.22``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-module-build: ``0.4234.*``
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on pyyaml: 
   :depends on quicktree: 
   :depends on raxml-ng: 
   :depends on seaborn-base: 
   :depends on snakemake-minimal: 
   :depends on treeswift: ``>=1.1.28``

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

    pixi global install roadies

to add into an existing workspace instead, run::

    pixi add roadies

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install roadies

Alternatively, to install into a new environment, run::

    conda create -n envname roadies

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/roadies:<tag>

(see `roadies/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_roadies| image:: https://img.shields.io/conda/dn/bioconda/roadies.svg?style=flat
   :target: https://anaconda.org/bioconda/roadies
   :alt:   (downloads)
.. |docker_roadies| image:: https://quay.io/repository/biocontainers/roadies/status
   :target: https://quay.io/repository/biocontainers/roadies
.. _`roadies/tags`: https://quay.io/repository/biocontainers/roadies?tab=tags


.. raw:: html

    <script>
        var package = "roadies";
        var versions = ["0.1.10","0.1.8","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roadies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roadies/README.html