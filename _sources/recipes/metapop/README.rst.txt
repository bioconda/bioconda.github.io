:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapop'
.. highlight: bash

metapop
=======

.. conda:recipe:: metapop
   :replaces_section_title:
   :noindex:

   A pipeline for the macro\- and micro\-diversity analyses and visualization of metagenomic\-derived populations

   :homepage: https://https://github.com/metaGmetapop/metapop
   :license: GPL / GPL-2.0
   :recipe: /`metapop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop/meta.yaml>`_

   


.. conda:package:: metapop

   |downloads_metapop| |docker_metapop|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bcftools: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-rsamtools: 
   :depends on r-base: ``>=4.0,<4.1``
   :depends on r-bit64: 
   :depends on r-compositions: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-gggenes: 
   :depends on r-ggplot2: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-stringr: 
   :depends on r-vegan: 
   :depends on samtools: 

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

    pixi global install metapop

to add into an existing workspace instead, run::

    pixi add metapop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metapop

Alternatively, to install into a new environment, run::

    conda create -n envname metapop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metapop:<tag>

(see `metapop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metapop| image:: https://img.shields.io/conda/dn/bioconda/metapop.svg?style=flat
   :target: https://anaconda.org/bioconda/metapop
   :alt:   (downloads)
.. |docker_metapop| image:: https://quay.io/repository/biocontainers/metapop/status
   :target: https://quay.io/repository/biocontainers/metapop
.. _`metapop/tags`: https://quay.io/repository/biocontainers/metapop?tab=tags


.. raw:: html

    <script>
        var package = "metapop";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapop/README.html