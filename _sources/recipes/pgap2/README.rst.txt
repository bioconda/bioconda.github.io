:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgap2'
.. highlight: bash

pgap2
=====

.. conda:recipe:: pgap2
   :replaces_section_title:
   :noindex:

   PGAP2\: a comprehensive pan\-genome analysis pipeline for prokaryotic genomes.

   :homepage: https://github.com/bucongfan/PGAP2
   :license: MIT / MIT
   :recipe: /`pgap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgap2/meta.yaml>`_

   


.. conda:package:: pgap2

   |downloads_pgap2| |docker_pgap2|

   :versions:
      
      

      ``2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on bcbio-gff: ``0.7.1``
   :depends on biopython: ``1.82``
   :depends on blast: 
   :depends on cd-hit: 
   :depends on clipkit: 
   :depends on clonalframeml: 
   :depends on diamond: 
   :depends on ete3: ``3.1.3``
   :depends on fasttree: 
   :depends on htslib: 
   :depends on iqtree: 
   :depends on loguru: ``0.6.0``
   :depends on mafft: 
   :depends on mcl: 
   :depends on minifasta: ``3.0.2``
   :depends on miniprot: 
   :depends on mmseqs2: 
   :depends on muscle: 
   :depends on networkx: ``3.3``
   :depends on numpy: ``1.23.3``
   :depends on pandas: ``1.5.0``
   :depends on perl-bio-tools-run-alignment-tcoffee: 
   :depends on prodigal: 
   :depends on pyecharts: ``2.0.8``
   :depends on pyfastani: ``0.5.1``
   :depends on python: ``>=3.10``
   :depends on python-edlib: ``1.3.9``
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on r-fastbaps: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-optparse: 
   :depends on r-patchwork: 
   :depends on r-tidyr: 
   :depends on raxml-ng: 
   :depends on scikit-learn: ``1.1.2``
   :depends on scipy: ``1.9.1``
   :depends on seqtk: 
   :depends on svgwrite: 
   :depends on tajimas_d: ``2.0.2``
   :depends on tqdm: ``4.64.1``

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

    pixi global install pgap2

to add into an existing workspace instead, run::

    pixi add pgap2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgap2

Alternatively, to install into a new environment, run::

    conda create -n envname pgap2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgap2:<tag>

(see `pgap2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgap2| image:: https://img.shields.io/conda/dn/bioconda/pgap2.svg?style=flat
   :target: https://anaconda.org/bioconda/pgap2
   :alt:   (downloads)
.. |docker_pgap2| image:: https://quay.io/repository/biocontainers/pgap2/status
   :target: https://quay.io/repository/biocontainers/pgap2
.. _`pgap2/tags`: https://quay.io/repository/biocontainers/pgap2?tab=tags


.. raw:: html

    <script>
        var package = "pgap2";
        var versions = ["2.0","1.1.0","1.0.9","1.0.8","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgap2/README.html