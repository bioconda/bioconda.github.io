:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proactiv'
.. highlight: bash

bioconductor-proactiv
=====================

.. conda:recipe:: bioconductor-proactiv
   :replaces_section_title:
   :noindex:

   Estimate Promoter Activity from RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/proActiv.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-proactiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proactiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proactiv/meta.yaml>`_

   Most human genes have multiple promoters that control the expression of different isoforms. The use of these alternative promoters enables the regulation of isoform expression pre\-transcriptionally. Alternative promoters have been found to be important in a wide number of cell types and diseases. proActiv is an R package that enables the analysis of promoters from RNA\-seq data. proActiv uses aligned reads as input\, and generates counts and normalized promoter activity estimates for each annotated promoter. In particular\, proActiv accepts junction files from TopHat2 or STAR or BAM files as inputs. These estimates can then be used to identify which promoter is active\, which promoter is inactive\, and which promoters change their activity across conditions. proActiv also allows visualization of promoter activity across conditions.


.. conda:package:: bioconductor-proactiv

   |downloads_bioconductor-proactiv| |docker_bioconductor-proactiv|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-proactiv

to add into an existing workspace instead, run::

    pixi add bioconductor-proactiv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-proactiv

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-proactiv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-proactiv:<tag>

(see `bioconductor-proactiv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-proactiv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proactiv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proactiv
   :alt:   (downloads)
.. |docker_bioconductor-proactiv| image:: https://quay.io/repository/biocontainers/bioconductor-proactiv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proactiv
.. _`bioconductor-proactiv/tags`: https://quay.io/repository/biocontainers/bioconductor-proactiv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proactiv";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proactiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proactiv/README.html