:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openprimer'
.. highlight: bash

bioconductor-openprimer
=======================

.. conda:recipe:: bioconductor-openprimer
   :replaces_section_title:
   :noindex:

   Multiplex PCR Primer Design and Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/openPrimeR.html
   :license: GPL-2
   :recipe: /`bioconductor-openprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimer/meta.yaml>`_

   An implementation of methods for designing\, evaluating\, and comparing primer sets for multiplex PCR. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected. A Shiny app providing a user interface for the functionalities of this package is provided by the \'openPrimeRui\' package.


.. conda:package:: bioconductor-openprimer

   |downloads_bioconductor-openprimer| |docker_bioconductor-openprimer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on mafft: ``>=7.305``
   :depends on r-ape: ``>=3.5``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-digest: ``>=0.6.9``
   :depends on r-dplyr: ``>=0.5.0``
   :depends on r-foreach: ``>=1.4.3``
   :depends on r-ggplot2: ``>=2.1.0``
   :depends on r-hmisc: ``>=3.17-4``
   :depends on r-lpsolveapi: ``>=5.5.2.0-17``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-openxlsx: ``>=4.0.17``
   :depends on r-plyr: ``>=1.8.4``
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-reshape2: ``>=1.4.1``
   :depends on r-scales: ``>=0.4.0``
   :depends on r-seqinr: ``>=3.3-3``
   :depends on r-stringdist: ``>=0.9.4.1``
   :depends on r-stringr: ``>=1.0.0``
   :depends on r-uniqtag: ``>=1.0``
   :depends on r-xml: ``>=3.98-1.4``

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

    pixi global install bioconductor-openprimer

to add into an existing workspace instead, run::

    pixi add bioconductor-openprimer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-openprimer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-openprimer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-openprimer:<tag>

(see `bioconductor-openprimer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-openprimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openprimer
   :alt:   (downloads)
.. |docker_bioconductor-openprimer| image:: https://quay.io/repository/biocontainers/bioconductor-openprimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openprimer
.. _`bioconductor-openprimer/tags`: https://quay.io/repository/biocontainers/bioconductor-openprimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openprimer";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openprimer/README.html