:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcrank'
.. highlight: bash

bioconductor-bcrank
===================

.. conda:recipe:: bioconductor-bcrank
   :replaces_section_title:
   :noindex:

   Predicting binding site consensus from ranked DNA sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BCRANK.html
   :license: GPL-2
   :recipe: /`bioconductor-bcrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank/meta.yaml>`_
   :links: biotools: :biotools:`bcrank`, doi: :doi:`10.1093/nar/gkp381`

   Functions and classes for de novo prediction of transcription factor binding consensus by heuristic search


.. conda:package:: bioconductor-bcrank

   |downloads_bioconductor-bcrank| |docker_bioconductor-bcrank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-bcrank

to add into an existing workspace instead, run::

    pixi add bioconductor-bcrank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bcrank

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bcrank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bcrank:<tag>

(see `bioconductor-bcrank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bcrank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcrank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcrank
   :alt:   (downloads)
.. |docker_bioconductor-bcrank| image:: https://quay.io/repository/biocontainers/bioconductor-bcrank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcrank
.. _`bioconductor-bcrank/tags`: https://quay.io/repository/biocontainers/bioconductor-bcrank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bcrank";
        var versions = ["1.72.0","1.68.0","1.64.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcrank/README.html