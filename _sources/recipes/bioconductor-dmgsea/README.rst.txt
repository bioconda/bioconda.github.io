:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmgsea'
.. highlight: bash

bioconductor-dmgsea
===================

.. conda:recipe:: bioconductor-dmgsea
   :replaces_section_title:
   :noindex:

   Efficient Gene Set Enrichment Analysis for DNA Methylation Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/dmGsea.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dmgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmgsea/meta.yaml>`_

   The R package dmGsea provides efficient gene set enrichment analysis specifically for DNA methylation data. It addresses key biases\, including probe dependency and varying probe numbers per gene. The package supports Illumina 450K\, EPIC\, and mouse methylation arrays. Users can also apply it to other omics data by supplying custom probe\-to\-gene mapping annotations. dmGsea is flexible\, fast\, and well\-suited for large\-scale epigenomic studies.


.. conda:package:: bioconductor-dmgsea

   |downloads_bioconductor-dmgsea| |docker_bioconductor-dmgsea|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biasedurn: 
   :depends on r-dqrng: 
   :depends on r-matrix: 
   :depends on r-poolr: 

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

    pixi global install bioconductor-dmgsea

to add into an existing workspace instead, run::

    pixi add bioconductor-dmgsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dmgsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dmgsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dmgsea:<tag>

(see `bioconductor-dmgsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dmgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmgsea
   :alt:   (downloads)
.. |docker_bioconductor-dmgsea| image:: https://quay.io/repository/biocontainers/bioconductor-dmgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmgsea
.. _`bioconductor-dmgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-dmgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmgsea";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmgsea/README.html