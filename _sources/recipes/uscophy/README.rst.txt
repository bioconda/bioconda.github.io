:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uscophy'
.. highlight: bash

uscophy
=======

.. conda:recipe:: uscophy
   :replaces_section_title:
   :noindex:

   A workflow to extract BUSCO genes from assembled genomes and use them for a phylogenetic reconstruction

   :homepage: https://github.com/scicrow/bioconda_uscophy
   :license: GPL / GPL-3.0-only
   :recipe: /`uscophy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscophy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscophy/meta.yaml>`_

   


.. conda:package:: uscophy

   |downloads_uscophy| |docker_uscophy|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on bioconductor-ggtree: 
   :depends on biopython: 
   :depends on busco: ``>=5.0``
   :depends on click: 
   :depends on diamond: 
   :depends on hmmer: 
   :depends on iqtree: 
   :depends on mafft: 
   :depends on pandas: 
   :depends on python: ``>=3.11``
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-readr: 
   :depends on r-tidyr: 
   :depends on r-viridis: 
   :depends on rich: 
   :depends on snakemake-minimal: ``>=8.0``
   :depends on spades: 
   :depends on trimal: 

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

    pixi global install uscophy

to add into an existing workspace instead, run::

    pixi add uscophy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install uscophy

Alternatively, to install into a new environment, run::

    conda create -n envname uscophy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/uscophy:<tag>

(see `uscophy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_uscophy| image:: https://img.shields.io/conda/dn/bioconda/uscophy.svg?style=flat
   :target: https://anaconda.org/bioconda/uscophy
   :alt:   (downloads)
.. |docker_uscophy| image:: https://quay.io/repository/biocontainers/uscophy/status
   :target: https://quay.io/repository/biocontainers/uscophy
.. _`uscophy/tags`: https://quay.io/repository/biocontainers/uscophy?tab=tags


.. raw:: html

    <script>
        var package = "uscophy";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uscophy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uscophy/README.html