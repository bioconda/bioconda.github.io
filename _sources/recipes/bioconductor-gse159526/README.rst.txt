:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse159526'
.. highlight: bash

bioconductor-gse159526
======================

.. conda:recipe:: bioconductor-gse159526
   :replaces_section_title:
   :noindex:

   Placental cell DNA methylation data from GEO accession GSE159526

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/GSE159526.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gse159526 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse159526>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse159526/meta.yaml>`_

   19 term and 9 first trimester placental chorionic villi and matched cell\-sorted samples ran on Illumina HumanMethylationEPIC DNA methylation microarrays. This data was made available on GEO accession \[GSE159526\]\(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE159526\). Both the raw and processed data has been made available on \\code\{ExperimentHub\}. Raw unprocessed data formatted as an RGChannelSet object for integration and normalization using minfi and other existing Bioconductor packages. Processed normalized data is also available as a DNA methylation \\code\{matrix\}\, with a corresponding phenotype information as a \\code\{data.frame\} object.


.. conda:package:: bioconductor-gse159526

   |downloads_bioconductor-gse159526| |docker_bioconductor-gse159526|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.3.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-gse159526

to add into an existing workspace instead, run::

    pixi add bioconductor-gse159526

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gse159526

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gse159526

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gse159526:<tag>

(see `bioconductor-gse159526/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gse159526| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse159526.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse159526
   :alt:   (downloads)
.. |docker_bioconductor-gse159526| image:: https://quay.io/repository/biocontainers/bioconductor-gse159526/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse159526
.. _`bioconductor-gse159526/tags`: https://quay.io/repository/biocontainers/bioconductor-gse159526?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse159526";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse159526/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse159526/README.html