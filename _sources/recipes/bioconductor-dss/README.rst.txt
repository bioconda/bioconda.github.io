:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dss'
.. highlight: bash

bioconductor-dss
================

.. conda:recipe:: bioconductor-dss
   :replaces_section_title:
   :noindex:

   Dispersion shrinkage for sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DSS.html
   :license: GPL
   :recipe: /`bioconductor-dss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss/meta.yaml>`_
   :links: biotools: :biotools:`dss`

   DSS is an R library performing differntial analysis for count\-based sequencing data. It detectes differentially expressed genes \(DEGs\) from RNA\-seq\, and differentially methylated loci or regions \(DML\/DMRs\) from bisulfite sequencing \(BS\-seq\). The core of DSS is a new dispersion shrinkage method for estimating the dispersion parameter from Gamma\-Poisson or Beta\-Binomial distributions.


.. conda:package:: bioconductor-dss

   |downloads_bioconductor-dss| |docker_bioconductor-dss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  </span></summary>
      

      ``2.58.0-0``,  ``2.54.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-bsseq: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-bsseq: ``>=1.46.0,<1.47.0a0``
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

    pixi global install bioconductor-dss

to add into an existing workspace instead, run::

    pixi add bioconductor-dss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dss

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dss:<tag>

(see `bioconductor-dss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dss
   :alt:   (downloads)
.. |docker_bioconductor-dss| image:: https://quay.io/repository/biocontainers/bioconductor-dss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dss
.. _`bioconductor-dss/tags`: https://quay.io/repository/biocontainers/bioconductor-dss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dss";
        var versions = ["2.58.0","2.54.0","2.48.0","2.48.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dss/README.html