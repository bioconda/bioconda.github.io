:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhinotyper'
.. highlight: bash

bioconductor-rhinotyper
=======================

.. conda:recipe:: bioconductor-rhinotyper
   :replaces_section_title:
   :noindex:

   Rhinovirus genotyping

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rhinotypeR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rhinotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhinotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhinotyper/meta.yaml>`_

   \"rhinotypeR\" is designed to automate the comparison of sequence data against prototype strains\, streamlining the genotype assignment process. By implementing predefined pairwise distance thresholds\, this package makes genotype assignment accessible to researchers and public health professionals. This tool enhances our epidemiological toolkit by enabling more efficient surveillance and analysis of rhinoviruses \(RVs\) and other viral pathogens with complex genomic landscapes. Additionally\, \"rhinotypeR\" supports comprehensive visualization and analysis of single nucleotide polymorphisms \(SNPs\) and amino acid substitutions\, facilitating in\-depth genetic and evolutionary studies.


.. conda:package:: bioconductor-rhinotyper

   |downloads_bioconductor-rhinotyper| |docker_bioconductor-rhinotyper|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-msa: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-msa2dist: ``>=1.14.0,<1.15.0``
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

    pixi global install bioconductor-rhinotyper

to add into an existing workspace instead, run::

    pixi add bioconductor-rhinotyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rhinotyper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rhinotyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rhinotyper:<tag>

(see `bioconductor-rhinotyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rhinotyper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhinotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhinotyper
   :alt:   (downloads)
.. |docker_bioconductor-rhinotyper| image:: https://quay.io/repository/biocontainers/bioconductor-rhinotyper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhinotyper
.. _`bioconductor-rhinotyper/tags`: https://quay.io/repository/biocontainers/bioconductor-rhinotyper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhinotyper";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhinotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhinotyper/README.html