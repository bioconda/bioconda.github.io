:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpe'
.. highlight: bash

bioconductor-lpe
================

.. conda:recipe:: bioconductor-lpe
   :replaces_section_title:
   :noindex:

   Methods for analyzing microarray data using Local Pooled Error \(LPE\) method

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LPE.html
   :license: LGPL
   :recipe: /`bioconductor-lpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpe/meta.yaml>`_
   :links: biotools: :biotools:`lpe`, doi: :doi:`10.1093/bioinformatics/btg264`

   This LPE library is used to do significance analysis of microarray data with small number of replicates. It uses resampling based FDR adjustment\, and gives less conservative results than traditional \'BH\' or \'BY\' procedures. Data accepted is raw data in txt format from MAS4\, MAS5 or dChip. Data can also be supplied after normalization. LPE library is primarily used for analyzing data between two conditions. To use it for paired data\, see LPEP library. For using LPE in multiple conditions\, use HEM library.


.. conda:package:: bioconductor-lpe

   |downloads_bioconductor-lpe| |docker_bioconductor-lpe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.84.0-0</code>,  <code>1.80.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  </span></summary>
      

      ``1.84.0-0``,  ``1.80.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bioconductor-lpe

to add into an existing workspace instead, run::

    pixi add bioconductor-lpe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lpe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lpe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lpe:<tag>

(see `bioconductor-lpe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpe
   :alt:   (downloads)
.. |docker_bioconductor-lpe| image:: https://quay.io/repository/biocontainers/bioconductor-lpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpe
.. _`bioconductor-lpe/tags`: https://quay.io/repository/biocontainers/bioconductor-lpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpe";
        var versions = ["1.84.0","1.80.0","1.76.0","1.76.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpe/README.html