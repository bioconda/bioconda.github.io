:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-geneexpressionfromgeo'
.. highlight: bash

r-geneexpressionfromgeo
=======================

.. conda:recipe:: r-geneexpressionfromgeo
   :replaces_section_title:
   :noindex:

   A function that reads in the GEO code of a gene expression dataset\, retrieves its data from GEO\, \(optionally\) retrieves the gene symbols of the dataset\, and returns a simple dataframe table containing all the data. Platforms available\: GPL11532\, GPL23126\, GPL6244\, GPL8300\, GPL80\, GPL96\, GPL570\, GPL571\, GPL20115\, GPL1293\,  GPL6102\, GPL6104\, GPL6883\, GPL6884\, GPL13497\, GPL14550\, GPL17077\, GPL6480. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>. More information can be found in the following manuscript\: Davide Chicco\, \"geneExpressionFromGEO\: an R package to facilitate data reading from Gene Expression Omnibus \(GEO\)\". Microarray Data Analysis\, Methods in Molecular Biology\, volume 2401\, chapter 12\, pages 187\-194\, Springer Protocols\, 2021\, \<doi\:10.1007\/978\-1\-0716\-1839\-4\_12\>.

   :homepage: https://github.com/davidechicco/geneExpressionFromGEO
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-geneexpressionfromgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geneexpressionfromgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geneexpressionfromgeo/meta.yaml>`_

   


.. conda:package:: r-geneexpressionfromgeo

   |downloads_r-geneexpressionfromgeo| |docker_r-geneexpressionfromgeo|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends on bioconductor-annotate: 
   :depends on bioconductor-biobase: 
   :depends on bioconductor-geoquery: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-qpdf: 
   :depends on r-xml2: 

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

    pixi global install r-geneexpressionfromgeo

to add into an existing workspace instead, run::

    pixi add r-geneexpressionfromgeo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-geneexpressionfromgeo

Alternatively, to install into a new environment, run::

    conda create -n envname r-geneexpressionfromgeo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-geneexpressionfromgeo:<tag>

(see `r-geneexpressionfromgeo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-geneexpressionfromgeo| image:: https://img.shields.io/conda/dn/bioconda/r-geneexpressionfromgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/r-geneexpressionfromgeo
   :alt:   (downloads)
.. |docker_r-geneexpressionfromgeo| image:: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo/status
   :target: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo
.. _`r-geneexpressionfromgeo/tags`: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo?tab=tags


.. raw:: html

    <script>
        var package = "r-geneexpressionfromgeo";
        var versions = ["1.3","1.3","1.2","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-geneexpressionfromgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-geneexpressionfromgeo/README.html