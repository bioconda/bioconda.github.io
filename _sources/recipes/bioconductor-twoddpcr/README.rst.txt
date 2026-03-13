:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-twoddpcr'
.. highlight: bash

bioconductor-twoddpcr
=====================

.. conda:recipe:: bioconductor-twoddpcr
   :replaces_section_title:
   :noindex:

   Classify 2\-d Droplet Digital PCR \(ddPCR\) data and quantify the number of starting molecules

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/twoddpcr.html
   :license: GPL-3
   :recipe: /`bioconductor-twoddpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr/meta.yaml>`_

   The twoddpcr package takes Droplet Digital PCR \(ddPCR\) droplet amplitude data from Bio\-Rad\'s QuantaSoft and can classify the droplets. A summary of the positive\/negative droplet counts can be generated\, which can then be used to estimate the number of molecules using the Poisson distribution. This is the first open source package that facilitates the automatic classification of general two channel ddPCR data. Previous work includes \'definetherain\' \(Jones et al.\, 2014\) and \'ddpcRquant\' \(Trypsteen et al.\, 2015\) which both handle one channel ddPCR experiments only. The \'ddpcr\' package available on CRAN \(Attali et al.\, 2016\) supports automatic gating of a specific class of two channel ddPCR experiments only.


.. conda:package:: bioconductor-twoddpcr

   |downloads_bioconductor-twoddpcr| |docker_bioconductor-twoddpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-class: 
   :depends on r-ggplot2: 
   :depends on r-hexbin: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-twoddpcr

to add into an existing workspace instead, run::

    pixi add bioconductor-twoddpcr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-twoddpcr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-twoddpcr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-twoddpcr:<tag>

(see `bioconductor-twoddpcr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-twoddpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twoddpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-twoddpcr
   :alt:   (downloads)
.. |docker_bioconductor-twoddpcr| image:: https://quay.io/repository/biocontainers/bioconductor-twoddpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twoddpcr
.. _`bioconductor-twoddpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-twoddpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-twoddpcr";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html