:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.mirnaseq'
.. highlight: bash

bioconductor-rtcga.mirnaseq
===========================

.. conda:recipe:: bioconductor-rtcga.mirnaseq
   :replaces_section_title:
   :noindex:

   miRNASeq datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RTCGA.miRNASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.mirnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mirnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mirnaseq/meta.yaml>`_

   Package provides miRNASeq datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/miRNASeq\#miRNASeq\-DataOverview Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.mirnaseq

   |downloads_bioconductor-rtcga.mirnaseq| |docker_bioconductor-rtcga.mirnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-rtcga: ``>=1.40.0,<1.41.0``
   :depends on curl: 
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

    pixi global install bioconductor-rtcga.mirnaseq

to add into an existing workspace instead, run::

    pixi add bioconductor-rtcga.mirnaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rtcga.mirnaseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rtcga.mirnaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rtcga.mirnaseq:<tag>

(see `bioconductor-rtcga.mirnaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rtcga.mirnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.mirnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.mirnaseq
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.mirnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq
.. _`bioconductor-rtcga.mirnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.mirnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.mirnaseq";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.mirnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.mirnaseq/README.html