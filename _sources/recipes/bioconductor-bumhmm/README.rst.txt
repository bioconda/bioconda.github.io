:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumhmm'
.. highlight: bash

bioconductor-bumhmm
===================

.. conda:recipe:: bioconductor-bumhmm
   :replaces_section_title:
   :noindex:

   Computational pipeline for computing probability of modification from structure probing experiment data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BUMHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-bumhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumhmm/meta.yaml>`_

   This is a probabilistic modelling pipeline for computing per\- nucleotide posterior probabilities of modification from the data collected in structure probing experiments. The model supports multiple experimental replicates and empirically corrects coverage\- and sequence\-dependent biases. The model utilises the measure of a \"drop\-off rate\" for each nucleotide\, which is compared between replicates through a log\-ratio \(LDR\). The LDRs between control replicates define a null distribution of variability in drop\-off rate observed by chance and LDRs between treatment and control replicates gets compared to this distribution. Resulting empirical p\-values \(probability of being \"drawn\" from the null distribution\) are used as observations in a Hidden Markov Model with a Beta\-Uniform Mixture model used as an emission model. The resulting posterior probabilities indicate the probability of a nucleotide of having being modified in a structure probing experiment.


.. conda:package:: bioconductor-bumhmm

   |downloads_bioconductor-bumhmm| |docker_bioconductor-bumhmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-devtools: 
   :depends on r-gtools: 
   :depends on r-stringi: 

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

    pixi global install bioconductor-bumhmm

to add into an existing workspace instead, run::

    pixi add bioconductor-bumhmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bumhmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bumhmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bumhmm:<tag>

(see `bioconductor-bumhmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bumhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumhmm
   :alt:   (downloads)
.. |docker_bioconductor-bumhmm| image:: https://quay.io/repository/biocontainers/bioconductor-bumhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumhmm
.. _`bioconductor-bumhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-bumhmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bumhmm";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html