:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doubletrouble'
.. highlight: bash

bioconductor-doubletrouble
==========================

.. conda:recipe:: bioconductor-doubletrouble
   :replaces_section_title:
   :noindex:

   Identification and classification of duplicated genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/doubletrouble.html
   :license: GPL-3
   :recipe: /`bioconductor-doubletrouble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble/meta.yaml>`_

   doubletrouble aims to identify duplicated genes from whole\-genome protein sequences and classify them based on their modes of duplication. The duplication modes are i. segmental duplication \(SD\)\; ii. tandem duplication \(TD\)\; iii. proximal duplication \(PD\)\; iv. transposed duplication \(TRD\) and\; v. dispersed duplication \(DD\). Transposon\-derived duplicates \(TRD\) can be further subdivided into rTRD \(retrotransposon\-derived duplication\) and dTRD \(DNA transposon\-derived duplication\). If users want a simpler classification scheme\, duplicates can also be classified into SD\- and SSD\-derived \(small\-scale duplication\) gene pairs. Besides classifying gene pairs\, users can also classify genes\, so that each gene is assigned a unique mode of duplication. Users can also calculate substitution rates per substitution site \(i.e.\, Ka and Ks\) from duplicate pairs\, find peaks in Ks distributions with Gaussian Mixture Models \(GMMs\)\, and classify gene pairs into age groups based on Ks peaks.


.. conda:package:: bioconductor-doubletrouble

   |downloads_bioconductor-doubletrouble| |docker_bioconductor-doubletrouble|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-msa2dist: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-syntenet: ``>=1.12.0,<1.13.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-mclust: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-doubletrouble

to add into an existing workspace instead, run::

    pixi add bioconductor-doubletrouble

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-doubletrouble

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-doubletrouble

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-doubletrouble:<tag>

(see `bioconductor-doubletrouble/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-doubletrouble| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doubletrouble.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doubletrouble
   :alt:   (downloads)
.. |docker_bioconductor-doubletrouble| image:: https://quay.io/repository/biocontainers/bioconductor-doubletrouble/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doubletrouble
.. _`bioconductor-doubletrouble/tags`: https://quay.io/repository/biocontainers/bioconductor-doubletrouble?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doubletrouble";
        var versions = ["1.10.0","1.6.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doubletrouble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doubletrouble/README.html