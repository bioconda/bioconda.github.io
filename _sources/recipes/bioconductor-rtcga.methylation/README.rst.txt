:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.methylation'
.. highlight: bash

bioconductor-rtcga.methylation
==============================

.. conda:recipe:: bioconductor-rtcga.methylation
   :replaces_section_title:
   :noindex:

   Methylation datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RTCGA.methylation.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.methylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.methylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.methylation/meta.yaml>`_

   Package provides methylation \(humanmethylation27\) datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/DNA\+methylation Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.methylation

   |downloads_bioconductor-rtcga.methylation| |docker_bioconductor-rtcga.methylation|

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

    pixi global install bioconductor-rtcga.methylation

to add into an existing workspace instead, run::

    pixi add bioconductor-rtcga.methylation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rtcga.methylation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rtcga.methylation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rtcga.methylation:<tag>

(see `bioconductor-rtcga.methylation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rtcga.methylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.methylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.methylation
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.methylation| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation
.. _`bioconductor-rtcga.methylation/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.methylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.methylation";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.methylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.methylation/README.html