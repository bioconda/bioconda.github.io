:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oscope'
.. highlight: bash

bioconductor-oscope
===================

.. conda:recipe:: bioconductor-oscope
   :replaces_section_title:
   :noindex:

   Oscope \- A statistical pipeline for identifying oscillatory genes in unsynchronized single cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Oscope.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-oscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope/meta.yaml>`_
   :links: biotools: :biotools:`oscope`, doi: :doi:`10.1038/nmeth.3549`

   Oscope is a statistical pipeline developed to identifying and recovering the base cycle profiles of oscillating genes in an unsynchronized single cell RNA\-seq experiment. The Oscope pipeline includes three modules\: a sine model module to search for candidate oscillator pairs\; a K\-medoids clustering module to cluster candidate oscillators into groups\; and an extended nearest insertion module to recover the base cycle order for each oscillator group.


.. conda:package:: bioconductor-oscope

   |downloads_bioconductor-oscope| |docker_bioconductor-oscope|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-ebseq: ``>=2.8.0,<2.9.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-testthat: 

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

    pixi global install bioconductor-oscope

to add into an existing workspace instead, run::

    pixi add bioconductor-oscope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-oscope

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-oscope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-oscope:<tag>

(see `bioconductor-oscope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-oscope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oscope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oscope
   :alt:   (downloads)
.. |docker_bioconductor-oscope| image:: https://quay.io/repository/biocontainers/bioconductor-oscope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oscope
.. _`bioconductor-oscope/tags`: https://quay.io/repository/biocontainers/bioconductor-oscope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oscope";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oscope/README.html