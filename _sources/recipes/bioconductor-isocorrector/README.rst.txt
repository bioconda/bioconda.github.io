:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isocorrector'
.. highlight: bash

bioconductor-isocorrector
=========================

.. conda:recipe:: bioconductor-isocorrector
   :replaces_section_title:
   :noindex:

   Correction for natural isotope abundance and tracer purity in MS and MS\/MS data from stable isotope labeling experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IsoCorrectoR.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector/meta.yaml>`_

   IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as ultra\-high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\). See the Bioconductor package IsoCorrectoRGUI for a graphical user interface to IsoCorrectoR. NOTE\: With R version 4.0.0\, writing correction results to Excel files may currently not work on Windows. However\, writing results to csv works as before.


.. conda:package:: bioconductor-isocorrector

   |downloads_bioconductor-isocorrector| |docker_bioconductor-isocorrector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-pracma: 
   :depends on r-quadprog: 
   :depends on r-readr: 
   :depends on r-readxl: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-writexls: 

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

    pixi global install bioconductor-isocorrector

to add into an existing workspace instead, run::

    pixi add bioconductor-isocorrector

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-isocorrector

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-isocorrector

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-isocorrector:<tag>

(see `bioconductor-isocorrector/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-isocorrector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrector.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isocorrector
   :alt:   (downloads)
.. |docker_bioconductor-isocorrector| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrector
.. _`bioconductor-isocorrector/tags`: https://quay.io/repository/biocontainers/bioconductor-isocorrector?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isocorrector";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html