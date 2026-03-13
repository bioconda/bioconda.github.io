:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipo'
.. highlight: bash

bioconductor-ipo
================

.. conda:recipe:: bioconductor-ipo
   :replaces_section_title:
   :noindex:

   Automated Optimization of XCMS Data Processing parameters

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IPO.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-ipo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo/meta.yaml>`_
   :links: biotools: :biotools:`ipo`

   The outcome of XCMS data processing strongly depends on the parameter settings. IPO \(\`Isotopologue Parameter Optimization\`\) is a parameter optimization tool that is applicable for different kinds of samples and liquid chromatography coupled to high resolution mass spectrometry devices\, fast and free of labeling steps. IPO uses natural\, stable 13C isotopes to calculate a peak picking score. Retention time correction is optimized by minimizing the relative retention time differences within features and grouping parameters are optimized by maximizing the number of features showing exactly one peak from each injection of a pooled sample. The different parameter settings are achieved by design of experiment. The resulting scores are evaluated using response surface models.


.. conda:package:: bioconductor-ipo

   |downloads_bioconductor-ipo| |docker_bioconductor-ipo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-camera: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rsm: 

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

    pixi global install bioconductor-ipo

to add into an existing workspace instead, run::

    pixi add bioconductor-ipo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ipo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ipo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ipo:<tag>

(see `bioconductor-ipo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ipo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipo
   :alt:   (downloads)
.. |docker_bioconductor-ipo| image:: https://quay.io/repository/biocontainers/bioconductor-ipo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipo
.. _`bioconductor-ipo/tags`: https://quay.io/repository/biocontainers/bioconductor-ipo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipo";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipo/README.html