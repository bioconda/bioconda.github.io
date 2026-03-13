:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metcirc'
.. highlight: bash

bioconductor-metcirc
====================

.. conda:recipe:: bioconductor-metcirc
   :replaces_section_title:
   :noindex:

   Navigating mass spectral similarity in high\-resolution MS\/MS metabolomics data metabolomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetCirc.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metcirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc/meta.yaml>`_
   :links: biotools: :biotools:`metcirc`, doi: :doi:`10.1093/bioinformatics/btx159`

   MetCirc comprises a workflow to interactively explore high\-resolution MS\/MS metabolomics data. MetCirc uses the Spectra object infrastructure defined in the package Spectra that stores MS\/MS spectra. MetCirc offers functionality to calculate similarity between precursors based on the normalised dot product\, neutral losses or user\-defined functions and visualise similarities in a circular layout. Within the interactive framework the user can annotate MS\/MS features based on their similarity to \(known\) related MS\/MS features.


.. conda:package:: bioconductor-metcirc

   |downloads_bioconductor-metcirc| |docker_bioconductor-metcirc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-amap: ``>=0.8``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.16``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-scales: ``>=1.3.0``
   :depends on r-shiny: ``>=1.8.1.1``

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

    pixi global install bioconductor-metcirc

to add into an existing workspace instead, run::

    pixi add bioconductor-metcirc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metcirc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metcirc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metcirc:<tag>

(see `bioconductor-metcirc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metcirc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metcirc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metcirc
   :alt:   (downloads)
.. |docker_bioconductor-metcirc| image:: https://quay.io/repository/biocontainers/bioconductor-metcirc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metcirc
.. _`bioconductor-metcirc/tags`: https://quay.io/repository/biocontainers/bioconductor-metcirc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metcirc";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metcirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metcirc/README.html