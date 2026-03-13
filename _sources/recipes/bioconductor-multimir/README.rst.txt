:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimir'
.. highlight: bash

bioconductor-multimir
=====================

.. conda:recipe:: bioconductor-multimir
   :replaces_section_title:
   :noindex:

   Integration of multiple microRNA\-target databases with their disease and drug associations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multiMiR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multimir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir/meta.yaml>`_

   A collection of microRNAs\/targets from external resources\, including validated microRNA\-target databases \(miRecords\, miRTarBase and TarBase\)\, predicted microRNA\-target databases \(DIANA\-microT\, ElMMo\, MicroCosm\, miRanda\, miRDB\, PicTar\, PITA and TargetScan\) and microRNA\-disease\/drug databases \(miR2Disease\, Pharmaco\-miR VerSe and PhenomiR\).


.. conda:package:: bioconductor-multimir

   |downloads_bioconductor-multimir| |docker_bioconductor-multimir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-purrr: ``>=0.2.2``
   :depends on r-rcurl: 
   :depends on r-tibble: ``>=2.0``
   :depends on r-xml: 

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

    pixi global install bioconductor-multimir

to add into an existing workspace instead, run::

    pixi add bioconductor-multimir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multimir

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multimir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multimir:<tag>

(see `bioconductor-multimir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multimir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimir
   :alt:   (downloads)
.. |docker_bioconductor-multimir| image:: https://quay.io/repository/biocontainers/bioconductor-multimir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimir
.. _`bioconductor-multimir/tags`: https://quay.io/repository/biocontainers/bioconductor-multimir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimir";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimir/README.html