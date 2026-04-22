:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitology'
.. highlight: bash

bioconductor-mitology
=====================

.. conda:recipe:: bioconductor-mitology
   :replaces_section_title:
   :noindex:

   Study of mitochondrial activity from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/mitology.html
   :license: AGPL-3
   :recipe: /`bioconductor-mitology <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitology>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitology/meta.yaml>`_

   mitology allows to study the mitochondrial activity throught high\-throughput RNA\-seq data. It is based on a collection of genes whose proteins localize in to the mitochondria. From these\, mitology provides a reorganization of the pathways related to mitochondria activity from Reactome and Gene Ontology. Further a ready\-to\-use implementation of MitoCarta3.0 pathways is included.


.. conda:package:: bioconductor-mitology

   |downloads_bioconductor-mitology| |docker_bioconductor-mitology|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-reactomepa: ``>=1.54.0,<1.55.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-scales: 

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

    pixi global install bioconductor-mitology

to add into an existing workspace instead, run::

    pixi add bioconductor-mitology

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mitology

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mitology

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mitology:<tag>

(see `bioconductor-mitology/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mitology| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitology.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitology
   :alt:   (downloads)
.. |docker_bioconductor-mitology| image:: https://quay.io/repository/biocontainers/bioconductor-mitology/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitology
.. _`bioconductor-mitology/tags`: https://quay.io/repository/biocontainers/bioconductor-mitology?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitology";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitology/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitology/README.html