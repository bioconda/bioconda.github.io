:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panviz'
.. highlight: bash

bioconductor-panviz
===================

.. conda:recipe:: bioconductor-panviz
   :replaces_section_title:
   :noindex:

   Integrating Multi\-Omic Network Data With Summay\-Level GWAS Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PanViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panviz/meta.yaml>`_

   This pacakge integrates data from the Kyoto Encyclopedia of Genes and Genomes \(KEGG\) with summary\-level genome\-wide association \(GWAS\) data\, such as that provided by the GWAS Catalog or GWAS Central databases\, or a user\'s own study or dataset\, in order to produce biological networks\, termed IMONs \(Integrated Multi\-Omic Networks\). IMONs can be used to analyse trait\-specific polymorphic data within the context of biochemical and metabolic reaction networks\, providing greater biological interpretability for GWAS data.


.. conda:package:: bioconductor-panviz

   |downloads_bioconductor-panviz| |docker_bioconductor-panviz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-colorspace: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-easycsv: 
   :depends on r-futile.logger: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rentrez: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-panviz

to add into an existing workspace instead, run::

    pixi add bioconductor-panviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-panviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-panviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-panviz:<tag>

(see `bioconductor-panviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-panviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panviz
   :alt:   (downloads)
.. |docker_bioconductor-panviz| image:: https://quay.io/repository/biocontainers/bioconductor-panviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panviz
.. _`bioconductor-panviz/tags`: https://quay.io/repository/biocontainers/bioconductor-panviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panviz";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panviz/README.html