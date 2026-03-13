:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteodisco'
.. highlight: bash

bioconductor-proteodisco
========================

.. conda:recipe:: bioconductor-proteodisco
   :replaces_section_title:
   :noindex:

   Generation of customized protein variant databases from genomic variants\, splice\-junctions and manual sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ProteoDisco.html
   :license: GPL-3
   :recipe: /`bioconductor-proteodisco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteodisco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteodisco/meta.yaml>`_

   ProteoDisco is an R package to facilitate proteogenomics studies. It houses functions to create customized \(variant\) protein databases based on user\-submitted genomic variants\, splice\-junctions\, fusion genes and manual transcript sequences. The flexible workflow can be adopted to suit a myriad of research and experimental settings.


.. conda:package:: bioconductor-proteodisco

   |downloads_bioconductor-proteodisco| |docker_bioconductor-proteodisco|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-cleaver: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: ``>=2.0.0``
   :depends on r-dplyr: ``>=1.0.6``
   :depends on r-parallellogger: ``>=2.0.1``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-rlang: ``>=0.4.11``
   :depends on r-tibble: ``>=3.1.2``
   :depends on r-tidyr: ``>=1.1.3``

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

    pixi global install bioconductor-proteodisco

to add into an existing workspace instead, run::

    pixi add bioconductor-proteodisco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-proteodisco

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-proteodisco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-proteodisco:<tag>

(see `bioconductor-proteodisco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-proteodisco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteodisco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteodisco
   :alt:   (downloads)
.. |docker_bioconductor-proteodisco| image:: https://quay.io/repository/biocontainers/bioconductor-proteodisco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteodisco
.. _`bioconductor-proteodisco/tags`: https://quay.io/repository/biocontainers/bioconductor-proteodisco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteodisco";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteodisco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteodisco/README.html