:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-updhmm'
.. highlight: bash

bioconductor-updhmm
===================

.. conda:recipe:: bioconductor-updhmm
   :replaces_section_title:
   :noindex:

   Detecting Uniparental Disomy through NGS trio data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/UPDhmm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-updhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updhmm/meta.yaml>`_

   Uniparental disomy \(UPD\) is a genetic condition where an individual inherits both copies of a chromosome or part of it from one parent\, rather than one copy from each parent. This package contains a HMM for detecting UPDs through HTS \(High Throughput Sequencing\) data from trio assays. By analyzing the genotypes in the trio\, the model infers a hidden state \(normal\, father isodisomy\, mother isodisomy\, father heterodisomy and mother heterodisomy\).


.. conda:package:: bioconductor-updhmm

   |downloads_bioconductor-updhmm| |docker_bioconductor-updhmm|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hmm: 

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

    pixi global install bioconductor-updhmm

to add into an existing workspace instead, run::

    pixi add bioconductor-updhmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-updhmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-updhmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-updhmm:<tag>

(see `bioconductor-updhmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-updhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-updhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-updhmm
   :alt:   (downloads)
.. |docker_bioconductor-updhmm| image:: https://quay.io/repository/biocontainers/bioconductor-updhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-updhmm
.. _`bioconductor-updhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-updhmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-updhmm";
        var versions = ["1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-updhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-updhmm/README.html