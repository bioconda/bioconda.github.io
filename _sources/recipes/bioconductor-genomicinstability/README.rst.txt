:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinstability'
.. highlight: bash

bioconductor-genomicinstability
===============================

.. conda:recipe:: bioconductor-genomicinstability
   :replaces_section_title:
   :noindex:

   Genomic Instability estimation for scRNA\-Seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/genomicInstability.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinstability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability/meta.yaml>`_

   This package contain functions to run genomic instability analysis \(GIA\) from scRNA\-Seq data. GIA estimates the association between gene expression and genomic location of the coding genes. It uses the aREA algorithm to quantify the enrichment of sets of contiguous genes \(loci\-blocks\) on the gene expression profiles and estimates the Genomic Instability Score \(GIS\) for each analyzed cell.


.. conda:package:: bioconductor-genomicinstability

   |downloads_bioconductor-genomicinstability| |docker_bioconductor-genomicinstability|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-mixtools: 

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

    pixi global install bioconductor-genomicinstability

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicinstability

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicinstability

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicinstability

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicinstability:<tag>

(see `bioconductor-genomicinstability/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicinstability| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinstability.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinstability
   :alt:   (downloads)
.. |docker_bioconductor-genomicinstability| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinstability/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinstability
.. _`bioconductor-genomicinstability/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinstability?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinstability";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html