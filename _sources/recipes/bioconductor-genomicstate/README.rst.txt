:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicstate'
.. highlight: bash

bioconductor-genomicstate
=========================

.. conda:recipe:: bioconductor-genomicstate
   :replaces_section_title:
   :noindex:

   Build and access GenomicState objects for use with derfinder tools from sources like Gencode

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/GenomicState.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate/meta.yaml>`_

   This package contains functions for building GenomicState objects from different annotation sources such as Gencode. It also provides access to these files at JHPCE.


.. conda:package:: bioconductor-genomicstate

   |downloads_bioconductor-genomicstate| |docker_bioconductor-genomicstate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.17-0</code>,  <code>0.99.15-5</code>,  <code>0.99.15-4</code>,  <code>0.99.15-3</code>,  <code>0.99.15-2</code>,  <code>0.99.15-1</code>,  <code>0.99.15-0</code>,  <code>0.99.9-3</code>,  <code>0.99.9-2</code>,  </span></summary>
      

      ``0.99.17-0``,  ``0.99.15-5``,  ``0.99.15-4``,  ``0.99.15-3``,  ``0.99.15-2``,  ``0.99.15-1``,  ``0.99.15-0``,  ``0.99.9-3``,  ``0.99.9-2``,  ``0.99.9-1``,  ``0.99.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-bumphunter: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-derfinder: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
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

    pixi global install bioconductor-genomicstate

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicstate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicstate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicstate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicstate:<tag>

(see `bioconductor-genomicstate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicstate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicstate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicstate
   :alt:   (downloads)
.. |docker_bioconductor-genomicstate| image:: https://quay.io/repository/biocontainers/bioconductor-genomicstate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicstate
.. _`bioconductor-genomicstate/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicstate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicstate";
        var versions = ["0.99.17","0.99.15","0.99.15","0.99.15","0.99.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html