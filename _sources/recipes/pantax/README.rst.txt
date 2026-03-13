:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pantax'
.. highlight: bash

pantax
======

.. conda:recipe:: pantax
   :replaces_section_title:
   :noindex:

   Strain\-level metagenomic profiling using pangenome graphs with PanTax

   :homepage: https://github.com/LuoGroup2023/PanTax
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pantax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantax/meta.yaml>`_

   


.. conda:package:: pantax

   |downloads_pantax| |docker_pantax|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends on bcftools: ``>=1.19``
   :depends on coin-or-cbc: 
   :depends on fastani: 
   :depends on glpk: ``>=5.0,<6.0a0``
   :depends on graphaligner: ``>=1.0.17``
   :depends on hdf5: ``1.10.5.*``
   :depends on htslib: ``>=1.19.1``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on networkx: ``>=3.2.1``
   :depends on numpy: ``>=1.26.3``
   :depends on pandas: ``>=2.2.0``
   :depends on pggb: ``0.6.0.*``
   :depends on pyarrow: ``>=14.0.2``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: ``>=4.2``
   :depends on samtools: ``>=1.19.2``
   :depends on sylph: ``>=0.6.1``
   :depends on tqdm: 
   :depends on vg: ``>=1.59``

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

    pixi global install pantax

to add into an existing workspace instead, run::

    pixi add pantax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pantax

Alternatively, to install into a new environment, run::

    conda create -n envname pantax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pantax:<tag>

(see `pantax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pantax| image:: https://img.shields.io/conda/dn/bioconda/pantax.svg?style=flat
   :target: https://anaconda.org/bioconda/pantax
   :alt:   (downloads)
.. |docker_pantax| image:: https://quay.io/repository/biocontainers/pantax/status
   :target: https://quay.io/repository/biocontainers/pantax
.. _`pantax/tags`: https://quay.io/repository/biocontainers/pantax?tab=tags


.. raw:: html

    <script>
        var package = "pantax";
        var versions = ["2.1.0","2.0.2","2.0.1","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantax/README.html