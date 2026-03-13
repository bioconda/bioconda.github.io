:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sift.hsapiens.dbsnp137'
.. highlight: bash

bioconductor-sift.hsapiens.dbsnp137
===================================

.. conda:recipe:: bioconductor-sift.hsapiens.dbsnp137
   :replaces_section_title:
   :noindex:

   PROVEAN\/SIFT Predictions for Homo sapiens dbSNP build 137

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/SIFT.Hsapiens.dbSNP137.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sift.hsapiens.dbsnp137 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp137>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp137/meta.yaml>`_

   Database of PROVEAN\/SIFT predictions for Homo sapiens dbSNP build 137


.. conda:package:: bioconductor-sift.hsapiens.dbsnp137

   |downloads_bioconductor-sift.hsapiens.dbsnp137| |docker_bioconductor-sift.hsapiens.dbsnp137|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-14</code>,  <code>1.0.0-13</code>,  <code>1.0.0-12</code>,  <code>1.0.0-11</code>,  <code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  </span></summary>
      

      ``1.0.0-14``,  ``1.0.0-13``,  ``1.0.0-12``,  ``1.0.0-11``,  ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rsqlite: ``>=0.11.0``

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

    pixi global install bioconductor-sift.hsapiens.dbsnp137

to add into an existing workspace instead, run::

    pixi add bioconductor-sift.hsapiens.dbsnp137

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sift.hsapiens.dbsnp137

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sift.hsapiens.dbsnp137

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sift.hsapiens.dbsnp137:<tag>

(see `bioconductor-sift.hsapiens.dbsnp137/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sift.hsapiens.dbsnp137| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sift.hsapiens.dbsnp137.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sift.hsapiens.dbsnp137
   :alt:   (downloads)
.. |docker_bioconductor-sift.hsapiens.dbsnp137| image:: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137
.. _`bioconductor-sift.hsapiens.dbsnp137/tags`: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sift.hsapiens.dbsnp137";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp137/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp137/README.html