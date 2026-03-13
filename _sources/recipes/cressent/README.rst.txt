:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cressent'
.. highlight: bash

cressent
========

.. conda:recipe:: cressent
   :replaces_section_title:
   :noindex:

   A comprehensive toolkit for ssDNA virus analysis

   :homepage: https://github.com/ricrocha82/cressent
   :documentation: https://cressent.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`cressent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cressent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cressent/meta.yaml>`_

   cressent is a tool for analyzing ssDNA viruses\, providing modules for 
   sequence alignment\, phylogenetic analysis\, motif discovery\, visualization and more.



.. conda:package:: cressent

   |downloads_cressent| |docker_cressent|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.74.0``
   :depends on bioconductor-decipher: ``>=3.2.0``
   :depends on bioconductor-ggtree: ``>=3.14.0``
   :depends on bioconductor-ggtreeextra: ``>=1.16.0``
   :depends on bioconductor-treeio: ``>=1.30.0``
   :depends on biopython: ``>=1.85``
   :depends on blast: ``>=2.16.0``
   :depends on cd-hit: ``>=4.5``
   :depends on click: 
   :depends on diamond: ``>=2.0``
   :depends on gffutils: ``>=0.13``
   :depends on iqtree: ``>=2.3.6``
   :depends on mafft: ``>=7.0``
   :depends on matplotlib-base: ``>=3.10.0``
   :depends on mcl: ``>=22.0``
   :depends on meme: ``>=5.5``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=2.2``
   :depends on pytest: ``>=8.3``
   :depends on python: ``>=3.6``
   :depends on r-ape: ``>=5.5``
   :depends on r-base: ``>=4.0``
   :depends on r-dendextend: ``>=1.19.0``
   :depends on r-dplyr: ``>=1.1.4``
   :depends on r-gggenes: ``>=0.5``
   :depends on r-ggplot2: ``>=3.5``
   :depends on r-ggseqlogo: ``>=0.2``
   :depends on r-rcolorbrewer: ``>=1.1.3``
   :depends on r-rlang: ``>=1.1.4``
   :depends on r-tidyr: ``>=1.3.1``
   :depends on r-tidytree: ``>=0.4.6``
   :depends on scipy: ``>=1.15.2``
   :depends on seaborn: ``>=0.13.2``
   :depends on seqkit: ``>=2.9.0``
   :depends on trimal: ``>=1.5.0``
   :depends on viennarna: 

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

    pixi global install cressent

to add into an existing workspace instead, run::

    pixi add cressent

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cressent

Alternatively, to install into a new environment, run::

    conda create -n envname cressent

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cressent:<tag>

(see `cressent/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cressent| image:: https://img.shields.io/conda/dn/bioconda/cressent.svg?style=flat
   :target: https://anaconda.org/bioconda/cressent
   :alt:   (downloads)
.. |docker_cressent| image:: https://quay.io/repository/biocontainers/cressent/status
   :target: https://quay.io/repository/biocontainers/cressent
.. _`cressent/tags`: https://quay.io/repository/biocontainers/cressent?tab=tags


.. raw:: html

    <script>
        var package = "cressent";
        var versions = ["1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cressent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cressent/README.html