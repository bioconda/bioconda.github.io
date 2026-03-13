:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cllmethylation'
.. highlight: bash

bioconductor-cllmethylation
===========================

.. conda:recipe:: bioconductor-cllmethylation
   :replaces_section_title:
   :noindex:

   Methylation data of primary CLL samples in PACE project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CLLmethylation.html
   :license: LGPL
   :recipe: /`bioconductor-cllmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation/meta.yaml>`_

   The package includes DNA methylation data for the primary Chronic Lymphocytic Leukemia samples included in the Primary Blood Cancer Encyclopedia \(PACE\) project. Raw data from the 450k DNA methylation arrays is stored in the European Genome\-Phenome Archive \(EGA\) under accession number EGAS0000100174. For more information concerning the project please refer to the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) and R\/Bioconductor package BloodCancerMultiOmics2017.


.. conda:package:: bioconductor-cllmethylation

   |downloads_bioconductor-cllmethylation| |docker_bioconductor-cllmethylation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-cllmethylation

to add into an existing workspace instead, run::

    pixi add bioconductor-cllmethylation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cllmethylation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cllmethylation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cllmethylation:<tag>

(see `bioconductor-cllmethylation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cllmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cllmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cllmethylation
   :alt:   (downloads)
.. |docker_bioconductor-cllmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-cllmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cllmethylation
.. _`bioconductor-cllmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-cllmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cllmethylation";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html