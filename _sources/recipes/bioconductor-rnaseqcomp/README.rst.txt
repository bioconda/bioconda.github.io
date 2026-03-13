:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqcomp'
.. highlight: bash

bioconductor-rnaseqcomp
=======================

.. conda:recipe:: bioconductor-rnaseqcomp
   :replaces_section_title:
   :noindex:

   Benchmarks for RNA\-seq Quantification Pipelines

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rnaseqcomp.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaseqcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcomp/meta.yaml>`_
   :links: biotools: :biotools:`rnaseqcomp`

   Several quantitative and visualized benchmarks for RNA\-seq quantification pipelines. Two\-condition quantifications for genes\, transcripts\, junctions or exons by each pipeline with necessary meta information should be organized into numeric matrices in order to proceed the evaluation.


.. conda:package:: bioconductor-rnaseqcomp

   |downloads_bioconductor-rnaseqcomp| |docker_bioconductor-rnaseqcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-rnaseqcomp

to add into an existing workspace instead, run::

    pixi add bioconductor-rnaseqcomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rnaseqcomp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rnaseqcomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rnaseqcomp:<tag>

(see `bioconductor-rnaseqcomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rnaseqcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqcomp
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqcomp| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp
.. _`bioconductor-rnaseqcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqcomp";
        var versions = ["1.40.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqcomp/README.html