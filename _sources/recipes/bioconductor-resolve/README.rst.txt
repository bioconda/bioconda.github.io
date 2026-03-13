:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-resolve'
.. highlight: bash

bioconductor-resolve
====================

.. conda:recipe:: bioconductor-resolve
   :replaces_section_title:
   :noindex:

   RESOLVE\: An R package for the efficient analysis of mutational signatures from cancer genomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RESOLVE.html
   :license: file LICENSE
   :recipe: /`bioconductor-resolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-resolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-resolve/meta.yaml>`_

   Cancer is a genetic disease caused by somatic mutations in genes controlling key biological functions such as cellular growth and division. Such mutations may arise both through cell\-intrinsic and exogenous processes\, generating characteristic mutational patterns over the genome named mutational signatures. The study of mutational signatures have become a standard component of modern genomics studies\, since it can reveal which \(environmental and endogenous\) mutagenic processes are active in a tumor\, and may highlight markers for therapeutic response. Mutational signatures computational analysis presents many pitfalls. First\, the task of determining the number of signatures is very complex and depends on heuristics. Second\, several signatures have no clear etiology\, casting doubt on them being computational artifacts rather than due to mutagenic processes. Last\, approaches for signatures assignment are greatly influenced by the set of signatures used for the analysis. To overcome these limitations\, we developed RESOLVE \(Robust EStimation Of mutationaL signatures Via rEgularization\)\, a framework that allows the efficient extraction and assignment of mutational signatures. RESOLVE implements a novel algorithm that enables \(i\) the efficient extraction\, \(ii\) exposure estimation\, and \(iii\) confidence assessment during the computational inference of mutational signatures.


.. conda:package:: bioconductor-resolve

   |downloads_bioconductor-resolve| |docker_bioconductor-resolve|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.1000genomes.hs37d5: ``>=0.99.0,<0.100.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mutationalpatterns: ``>=3.19.0,<3.20.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-gridextra: 
   :depends on r-lsa: 
   :depends on r-nnls: 
   :depends on r-reshape2: 
   :depends on r-rhpcblasctl: 
   :depends on r-survival: 

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

    pixi global install bioconductor-resolve

to add into an existing workspace instead, run::

    pixi add bioconductor-resolve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-resolve

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-resolve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-resolve:<tag>

(see `bioconductor-resolve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-resolve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-resolve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-resolve
   :alt:   (downloads)
.. |docker_bioconductor-resolve| image:: https://quay.io/repository/biocontainers/bioconductor-resolve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-resolve
.. _`bioconductor-resolve/tags`: https://quay.io/repository/biocontainers/bioconductor-resolve?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-resolve";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-resolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-resolve/README.html