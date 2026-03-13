:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-txrevise'
.. highlight: bash

r-txrevise
==========

.. conda:recipe:: r-txrevise
   :replaces_section_title:
   :noindex:

   Construct custom transcript annotations for Salmon and kallisto

   :homepage: https://github.com/kauralasoo/txrevise
   :license: Apache / Apache 2.0
   :recipe: /`r-txrevise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-txrevise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-txrevise/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.41673`

   txrevise R package provides utilites to pre\-process Ensembl transcript annotations to
   quantify differences in transcript strucuture \(alternative promoters\, alternative
   splicing\, alternative poly\-adenylation\) either between experimental conditions or
   genotypes \(e.g. for transcript usage quntitative trait loci \(tuQTL\) mapping\).



.. conda:package:: r-txrevise

   |downloads_r-txrevise| |docker_r-txrevise|

   :versions:
      
      

      ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-purrr: 
   :depends on r-purrrlyr: 
   :depends on r-readr: 
   :depends on r-tidyr: 

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

    pixi global install r-txrevise

to add into an existing workspace instead, run::

    pixi add r-txrevise

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-txrevise

Alternatively, to install into a new environment, run::

    conda create -n envname r-txrevise

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-txrevise:<tag>

(see `r-txrevise/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-txrevise| image:: https://img.shields.io/conda/dn/bioconda/r-txrevise.svg?style=flat
   :target: https://anaconda.org/bioconda/r-txrevise
   :alt:   (downloads)
.. |docker_r-txrevise| image:: https://quay.io/repository/biocontainers/r-txrevise/status
   :target: https://quay.io/repository/biocontainers/r-txrevise
.. _`r-txrevise/tags`: https://quay.io/repository/biocontainers/r-txrevise?tab=tags


.. raw:: html

    <script>
        var package = "r-txrevise";
        var versions = ["2.0","2.0","2.0","2.0","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-txrevise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-txrevise/README.html