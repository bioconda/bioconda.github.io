:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaagecalc'
.. highlight: bash

bioconductor-rnaagecalc
=======================

.. conda:recipe:: bioconductor-rnaagecalc
   :replaces_section_title:
   :noindex:

   A multi\-tissue transcriptional age calculator

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAAgeCalc.html
   :license: GPL-2
   :recipe: /`bioconductor-rnaagecalc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaagecalc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaagecalc/meta.yaml>`_

   It has been shown that both DNA methylation and RNA transcription are linked to chronological age and age related diseases. Several estimators have been developed to predict human aging from DNA level and RNA level. Most of the human transcriptional age predictor are based on microarray data and limited to only a few tissues. To date\, transcriptional studies on aging using RNASeq data from different human tissues is limited. The aim of this package is to provide a tool for across\-tissue and tissue\-specific transcriptional age calculation based on GTEx RNASeq data.


.. conda:package:: bioconductor-rnaagecalc

   |downloads_bioconductor-rnaagecalc| |docker_bioconductor-rnaagecalc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-recount: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-rnaagecalc

to add into an existing workspace instead, run::

    pixi add bioconductor-rnaagecalc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rnaagecalc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rnaagecalc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rnaagecalc:<tag>

(see `bioconductor-rnaagecalc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rnaagecalc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaagecalc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaagecalc
   :alt:   (downloads)
.. |docker_bioconductor-rnaagecalc| image:: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc
.. _`bioconductor-rnaagecalc/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaagecalc";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaagecalc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaagecalc/README.html