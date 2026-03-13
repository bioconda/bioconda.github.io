:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stroma4'
.. highlight: bash

bioconductor-stroma4
====================

.. conda:recipe:: bioconductor-stroma4
   :replaces_section_title:
   :noindex:

   Assign Properties to TNBC Patients

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/STROMA4.html
   :license: GPL-3
   :recipe: /`bioconductor-stroma4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4/meta.yaml>`_

   This package estimates four stromal properties identified in TNBC patients in each patient of a gene expression datasets. These stromal property assignments can be combined to subtype patients. These four stromal properties were identified in Triple negative breast cancer \(TNBC\) patients and represent the presence of different cells in the stroma\: T\-cells \(T\)\, B\-cells \(B\)\, stromal infiltrating epithelial cells \(E\)\, and desmoplasia \(D\). Additionally this package can also be used to estimate generative properties for the Lehmann subtypes\, an alternative TNBC subtyping scheme \(PMID\: 21633166\).


.. conda:package:: bioconductor-stroma4

   |downloads_bioconductor-stroma4| |docker_bioconductor-stroma4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cluster: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-stroma4

to add into an existing workspace instead, run::

    pixi add bioconductor-stroma4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-stroma4

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-stroma4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-stroma4:<tag>

(see `bioconductor-stroma4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-stroma4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stroma4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stroma4
   :alt:   (downloads)
.. |docker_bioconductor-stroma4| image:: https://quay.io/repository/biocontainers/bioconductor-stroma4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stroma4
.. _`bioconductor-stroma4/tags`: https://quay.io/repository/biocontainers/bioconductor-stroma4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stroma4";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stroma4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stroma4/README.html