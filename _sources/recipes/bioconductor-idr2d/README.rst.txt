:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idr2d'
.. highlight: bash

bioconductor-idr2d
==================

.. conda:recipe:: bioconductor-idr2d
   :replaces_section_title:
   :noindex:

   Irreproducible Discovery Rate for Genomic Interactions Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/idr2d.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-idr2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d/meta.yaml>`_

   A tool to measure reproducibility between genomic experiments that produce two\-dimensional peaks \(interactions between peaks\)\, such as ChIA\-PET\, HiChIP\, and HiC. idr2d is an extension of the original idr package\, which is intended for \(one\-dimensional\) ChIP\-seq peaks.


.. conda:package:: bioconductor-idr2d

   |downloads_bioconductor-idr2d| |docker_bioconductor-idr2d|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.7.6``
   :depends on r-futile.logger: ``>=1.4.3``
   :depends on r-ggplot2: ``>=3.1.1``
   :depends on r-idr: ``>=1.2``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-reticulate: ``>=1.13``
   :depends on r-scales: ``>=1.0.0``
   :depends on r-stringr: ``>=1.3.1``

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

    pixi global install bioconductor-idr2d

to add into an existing workspace instead, run::

    pixi add bioconductor-idr2d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-idr2d

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-idr2d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-idr2d:<tag>

(see `bioconductor-idr2d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-idr2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idr2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idr2d
   :alt:   (downloads)
.. |docker_bioconductor-idr2d| image:: https://quay.io/repository/biocontainers/bioconductor-idr2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idr2d
.. _`bioconductor-idr2d/tags`: https://quay.io/repository/biocontainers/bioconductor-idr2d?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-idr2d";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idr2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idr2d/README.html