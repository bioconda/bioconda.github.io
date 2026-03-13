:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.vvinifera.urgi.iggp8x'
.. highlight: bash

bioconductor-bsgenome.vvinifera.urgi.iggp8x
===========================================

.. conda:recipe:: bioconductor-bsgenome.vvinifera.urgi.iggp8x
   :replaces_section_title:
   :noindex:

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(IGGP version 8X\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Vvinifera.URGI.IGGP8X.html
   :license: CC0
   :recipe: /`bioconductor-bsgenome.vvinifera.urgi.iggp8x <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/meta.yaml>`_

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(derived from Pinot Noir and close to homozygosity after 6\-9 rounds of selfing\) as assembled by the IGGP \(version 8X\) and available at the URGI \(INRA\). More details in Jaillon et al \(Nature\, 2007\).


.. conda:package:: bioconductor-bsgenome.vvinifera.urgi.iggp8x

   |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp8x| |docker_bioconductor-bsgenome.vvinifera.urgi.iggp8x|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-14</code>,  <code>0.1-13</code>,  <code>0.1-12</code>,  <code>0.1-11</code>,  <code>0.1-10</code>,  <code>0.1-9</code>,  <code>0.1-8</code>,  <code>0.1-7</code>,  <code>0.1-6</code>,  </span></summary>
      

      ``0.1-14``,  ``0.1-13``,  ``0.1-12``,  ``0.1-11``,  ``0.1-10``,  ``0.1-9``,  ``0.1-8``,  ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
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

    pixi global install bioconductor-bsgenome.vvinifera.urgi.iggp8x

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.vvinifera.urgi.iggp8x

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.vvinifera.urgi.iggp8x

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.vvinifera.urgi.iggp8x

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x:<tag>

(see `bioconductor-bsgenome.vvinifera.urgi.iggp8x/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp8x| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp8x.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp8x
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.vvinifera.urgi.iggp8x| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x
.. _`bioconductor-bsgenome.vvinifera.urgi.iggp8x/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.vvinifera.urgi.iggp8x";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/README.html