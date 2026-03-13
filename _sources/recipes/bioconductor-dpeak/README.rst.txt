:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dpeak'
.. highlight: bash

bioconductor-dpeak
==================

.. conda:recipe:: bioconductor-dpeak
   :replaces_section_title:
   :noindex:

   dPeak \(Deconvolution of Peaks in ChIP\-seq Analysis\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dpeak.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak/meta.yaml>`_

   dPeak is a statistical framework for the high resolution identification of protein\-DNA interaction sites using PET and SET ChIP\-Seq and ChIP\-exo data. It provides computationally efficient and user friendly interface to process ChIP\-seq and ChIP\-exo data\, implement exploratory analysis\, fit dPeak model\, and export list of predicted binding sites for downstream analysis.


.. conda:package:: bioconductor-dpeak

   |downloads_bioconductor-dpeak| |docker_bioconductor-dpeak|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-mass: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-dpeak

to add into an existing workspace instead, run::

    pixi add bioconductor-dpeak

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dpeak

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dpeak

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dpeak:<tag>

(see `bioconductor-dpeak/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dpeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dpeak
   :alt:   (downloads)
.. |docker_bioconductor-dpeak| image:: https://quay.io/repository/biocontainers/bioconductor-dpeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dpeak
.. _`bioconductor-dpeak/tags`: https://quay.io/repository/biocontainers/bioconductor-dpeak?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dpeak";
        var versions = ["1.12.0","1.10.0","1.10.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dpeak/README.html