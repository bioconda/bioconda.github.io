:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsqc'
.. highlight: bash

bioconductor-msstatsqc
======================

.. conda:recipe:: bioconductor-msstatsqc
   :replaces_section_title:
   :noindex:

   Longitudinal system suitability monitoring and quality control for proteomic experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsQC.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc/meta.yaml>`_

   MSstatsQC is an R package which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.


.. conda:package:: bioconductor-msstatsqc

   |downloads_bioconductor-msstatsqc| |docker_bioconductor-msstatsqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-qcmetrics: ``>=1.48.0,<1.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggextra: 
   :depends on r-ggplot2: 
   :depends on r-plotly: 

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

    pixi global install bioconductor-msstatsqc

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatsqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatsqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatsqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatsqc:<tag>

(see `bioconductor-msstatsqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsqc
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqc| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqc
.. _`bioconductor-msstatsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsqc";
        var versions = ["2.28.0","2.24.0","2.20.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html