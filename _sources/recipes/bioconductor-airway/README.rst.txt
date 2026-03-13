:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airway'
.. highlight: bash

bioconductor-airway
===================

.. conda:recipe:: bioconductor-airway
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for RNA\-Seq in airway smooth muscle cells\, by Himes et al PLoS One 2014

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/airway.html
   :license: LGPL
   :recipe: /`bioconductor-airway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway/meta.yaml>`_

   This package provides a RangedSummarizedExperiment object of read counts in genes for an RNA\-Seq experiment on four human airway smooth muscle cell lines treated with dexamethasone. Details on the gene model and read counting procedure are provided in the package vignette. The citation for the experiment is\: Himes BE\, Jiang X\, Wagner P\, Hu R\, Wang Q\, Klanderman B\, Whitaker RM\, Duan Q\, Lasky\-Su J\, Nikolos C\, Jester W\, Johnson M\, Panettieri R Jr\, Tantisira KG\, Weiss ST\, Lu Q. \'RNA\-Seq Transcriptome Profiling Identifies CRISPLD2 as a Glucocorticoid Responsive Gene that Modulates Cytokine Function in Airway Smooth Muscle Cells.\' PLoS One. 2014 Jun 13\;9\(6\)\:e99625. PMID\: 24926665. GEO\: GSE52778.


.. conda:package:: bioconductor-airway

   |downloads_bioconductor-airway| |docker_bioconductor-airway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
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

    pixi global install bioconductor-airway

to add into an existing workspace instead, run::

    pixi add bioconductor-airway

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-airway

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-airway

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-airway:<tag>

(see `bioconductor-airway/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-airway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airway
   :alt:   (downloads)
.. |docker_bioconductor-airway| image:: https://quay.io/repository/biocontainers/bioconductor-airway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airway
.. _`bioconductor-airway/tags`: https://quay.io/repository/biocontainers/bioconductor-airway?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-airway";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airway/README.html