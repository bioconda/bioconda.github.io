:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simffpe'
.. highlight: bash

bioconductor-simffpe
====================

.. conda:recipe:: bioconductor-simffpe
   :replaces_section_title:
   :noindex:

   NGS Read Simulator for FFPE Tissue

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SimFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-simffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe/meta.yaml>`_

   The NGS \(Next\-Generation Sequencing\) reads from FFPE \(Formalin\-Fixed Paraffin\-Embedded\) samples contain numerous artifact chimeric reads \(ACRS\)\, which can lead to false positive structural variant calls. These ACRs are derived from the combination of two single\-stranded DNA \(ss\-DNA\) fragments with short reverse complementary regions \(SRCRs\). This package simulates these artifact chimeric reads as well as normal reads for FFPE samples on the whole genome \/ several chromosomes \/ large regions.


.. conda:package:: bioconductor-simffpe

   |downloads_bioconductor-simffpe| |docker_bioconductor-simffpe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-truncnorm: 

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

    pixi global install bioconductor-simffpe

to add into an existing workspace instead, run::

    pixi add bioconductor-simffpe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-simffpe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-simffpe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-simffpe:<tag>

(see `bioconductor-simffpe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-simffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simffpe
   :alt:   (downloads)
.. |docker_bioconductor-simffpe| image:: https://quay.io/repository/biocontainers/bioconductor-simffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simffpe
.. _`bioconductor-simffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-simffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simffpe";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simffpe/README.html