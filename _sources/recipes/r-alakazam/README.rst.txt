:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-alakazam'
.. highlight: bash

r-alakazam
==========

.. conda:recipe:: r-alakazam
   :replaces_section_title:
   :noindex:

   Provides methods for high\-throughput adaptive immune  receptor repertoire sequencing \(AIRR\-Seq\; Rep\-Seq\) analysis. In  particular\, immunoglobulin \(Ig\) sequence lineage reconstruction\,  lineage topology analysis\, diversity profiling\, amino acid property  analysis and gene usage. Citations\:  Gupta and Vander Heiden\, et al \(2017\) \<doi\:10.1093\/bioinformatics\/btv359\>\, Stern\, Yaari and Vander Heiden\, et al \(2014\) \<doi\:10.1126\/scitranslmed.3008879\>.

   :homepage: http://alakazam.readthedocs.org
   :license: AGPL / AGPL-3
   :recipe: /`r-alakazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-alakazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-alakazam/meta.yaml>`_

   


.. conda:package:: r-alakazam

   |downloads_r-alakazam| |docker_r-alakazam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-4</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>0.2.10-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``0.2.10-0``,  ``0.2.8-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.56.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-genomicalignments: ``>=1.24.0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-iranges: ``>=2.22.2``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on libcxx: ``>=18``
   :depends on r-airr: ``>=1.3``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: ``>=1.0``
   :depends on r-ggplot2: ``>=3.3.4``
   :depends on r-igraph: ``>=1.0.0``
   :depends on r-matrix: 
   :depends on r-progress: 
   :depends on r-rcpp: ``>=0.12.12``
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-seqinr: 
   :depends on r-stringi: 
   :depends on r-tibble: 
   :depends on r-tidyr: ``>=1.0``

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

    pixi global install r-alakazam

to add into an existing workspace instead, run::

    pixi add r-alakazam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-alakazam

Alternatively, to install into a new environment, run::

    conda create -n envname r-alakazam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-alakazam:<tag>

(see `r-alakazam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-alakazam| image:: https://img.shields.io/conda/dn/bioconda/r-alakazam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-alakazam
   :alt:   (downloads)
.. |docker_r-alakazam| image:: https://quay.io/repository/biocontainers/r-alakazam/status
   :target: https://quay.io/repository/biocontainers/r-alakazam
.. _`r-alakazam/tags`: https://quay.io/repository/biocontainers/r-alakazam?tab=tags


.. raw:: html

    <script>
        var package = "r-alakazam";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-alakazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-alakazam/README.html