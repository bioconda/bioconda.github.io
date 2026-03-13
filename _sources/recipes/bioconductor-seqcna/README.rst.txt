:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcna'
.. highlight: bash

bioconductor-seqcna
===================

.. conda:recipe:: bioconductor-seqcna
   :replaces_section_title:
   :noindex:

   Copy number analysis of high\-throughput sequencing cancer data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-seqcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna/meta.yaml>`_

   Copy number analysis of high\-throughput sequencing cancer data with fast summarization\, extensive filtering and improved normalization


.. conda:package:: bioconductor-seqcna

   |downloads_bioconductor-seqcna| |docker_bioconductor-seqcna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-glad: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-seqcna.annot: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-seqcna.annot: ``>=1.38.0,<1.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-adehabitatlt: ``>=0.3.4``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dosnow: ``>=1.0.5``
   :depends on samtools: ``>=1.19,<2.0a0``

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

    pixi global install bioconductor-seqcna

to add into an existing workspace instead, run::

    pixi add bioconductor-seqcna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqcna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqcna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqcna:<tag>

(see `bioconductor-seqcna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqcna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcna
   :alt:   (downloads)
.. |docker_bioconductor-seqcna| image:: https://quay.io/repository/biocontainers/bioconductor-seqcna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcna
.. _`bioconductor-seqcna/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqcna";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcna/README.html