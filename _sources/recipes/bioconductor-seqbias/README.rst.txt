:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqbias'
.. highlight: bash

bioconductor-seqbias
====================

.. conda:recipe:: bioconductor-seqbias
   :replaces_section_title:
   :noindex:

   Estimation of per\-position bias in high\-throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqbias.html
   :license: LGPL-3
   :recipe: /`bioconductor-seqbias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias/meta.yaml>`_

   This package implements a model of per\-position sequencing bias in high\-throughput sequencing data using a simple Bayesian network\, the structure and parameters of which are trained on a set of aligned reads and a reference genome sequence.


.. conda:package:: bioconductor-seqbias

   |downloads_bioconductor-seqbias| |docker_bioconductor-seqbias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends on bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-seqbias

to add into an existing workspace instead, run::

    pixi add bioconductor-seqbias

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqbias

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqbias

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqbias:<tag>

(see `bioconductor-seqbias/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqbias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqbias.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqbias
   :alt:   (downloads)
.. |docker_bioconductor-seqbias| image:: https://quay.io/repository/biocontainers/bioconductor-seqbias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqbias
.. _`bioconductor-seqbias/tags`: https://quay.io/repository/biocontainers/bioconductor-seqbias?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqbias";
        var versions = ["1.50.0","1.48.0","1.46.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqbias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqbias/README.html