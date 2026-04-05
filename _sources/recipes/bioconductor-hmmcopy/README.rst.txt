:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmmcopy'
.. highlight: bash

bioconductor-hmmcopy
====================

.. conda:recipe:: bioconductor-hmmcopy
   :replaces_section_title:
   :noindex:

   Copy number prediction with correction for GC and mappability bias for HTS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HMMcopy.html
   :license: GPL-3
   :recipe: /`bioconductor-hmmcopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy/meta.yaml>`_
   :links: biotools: :biotools:`hmmcopy`, doi: :doi:`10.1038/nmeth.3252`

   Corrects GC and mappability biases for readcounts \(i.e. coverage\) in non\-overlapping windows of fixed length for single whole genome samples\, yielding a rough estimate of copy number for furthur analysis.  Designed for rapid correction of high coverage whole genome tumour and normal samples.


.. conda:package:: bioconductor-hmmcopy

   |downloads_bioconductor-hmmcopy| |docker_bioconductor-hmmcopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.11.8``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-hmmcopy

to add into an existing workspace instead, run::

    pixi add bioconductor-hmmcopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hmmcopy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hmmcopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hmmcopy:<tag>

(see `bioconductor-hmmcopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hmmcopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmmcopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmmcopy
   :alt:   (downloads)
.. |docker_bioconductor-hmmcopy| image:: https://quay.io/repository/biocontainers/bioconductor-hmmcopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmmcopy
.. _`bioconductor-hmmcopy/tags`: https://quay.io/repository/biocontainers/bioconductor-hmmcopy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmmcopy";
        var versions = ["1.52.0","1.48.0","1.48.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html