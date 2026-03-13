:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunotation'
.. highlight: bash

bioconductor-immunotation
=========================

.. conda:recipe:: bioconductor-immunotation
   :replaces_section_title:
   :noindex:

   Tools for working with diverse immune genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/immunotation.html
   :license: GPL-3
   :recipe: /`bioconductor-immunotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation/meta.yaml>`_

   MHC \(major histocompatibility complex\) molecules are cell surface complexes that present antigens to T cells.  The repertoire of antigens presented in a given genetic background largely depends on the sequence of the encoded MHC molecules\, and thus\, in humans\, on the highly variable HLA \(human leukocyte antigen\) genes of the hyperpolymorphic HLA locus. More than 28\,000 different HLA alleles have been reported\, with significant differences in allele frequencies between human populations worldwide. Reproducible and consistent annotation of HLA alleles in large\-scale bioinformatics workflows remains challenging\, because the available reference databases and software tools often use different HLA naming schemes. The package immunotation provides tools for consistent annotation of HLA genes in typical immunoinformatics workflows such as for example the prediction of MHC\-presented peptides in different human donors. Converter functions that provide mappings between different HLA naming schemes are based on the MHC restriction ontology \(MRO\). The package also provides automated access to HLA alleles frequencies in worldwide human reference populations stored in the Allele Frequency Net Database.


.. conda:package:: bioconductor-immunotation

   |downloads_bioconductor-immunotation| |docker_bioconductor-immunotation|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-ggplot2: 
   :depends on r-maps: 
   :depends on r-ontologyindex: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-rvest: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
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

    pixi global install bioconductor-immunotation

to add into an existing workspace instead, run::

    pixi add bioconductor-immunotation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-immunotation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-immunotation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-immunotation:<tag>

(see `bioconductor-immunotation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-immunotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunotation
   :alt:   (downloads)
.. |docker_bioconductor-immunotation| image:: https://quay.io/repository/biocontainers/bioconductor-immunotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunotation
.. _`bioconductor-immunotation/tags`: https://quay.io/repository/biocontainers/bioconductor-immunotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunotation";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunotation/README.html