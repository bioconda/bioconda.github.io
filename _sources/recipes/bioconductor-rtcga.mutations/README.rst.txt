:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.mutations'
.. highlight: bash

bioconductor-rtcga.mutations
============================

.. conda:recipe:: bioconductor-rtcga.mutations
   :replaces_section_title:
   :noindex:

   Mutations datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RTCGA.mutations.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mutations/meta.yaml>`_

   Package provides mutations datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Mutations data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Mutation\+Annotation\+Format\+\(MAF\)\+Specification. There is extra one column with patients\' barcodes. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.mutations

   |downloads_bioconductor-rtcga.mutations| |docker_bioconductor-rtcga.mutations|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20151101.40.0-0</code>,  <code>20151101.36.0-0</code>,  <code>20151101.32.0-0</code>,  <code>20151101.30.0-0</code>,  <code>20151101.27.0-0</code>,  <code>20151101.24.0-1</code>,  <code>20151101.24.0-0</code>,  <code>20151101.22.0-0</code>,  <code>20151101.20.0-1</code>,  </span></summary>
      

      ``20151101.40.0-0``,  ``20151101.36.0-0``,  ``20151101.32.0-0``,  ``20151101.30.0-0``,  ``20151101.27.0-0``,  ``20151101.24.0-1``,  ``20151101.24.0-0``,  ``20151101.22.0-0``,  ``20151101.20.0-1``,  ``20151101.20.0-0``,  ``20151101.18.0-0``,  ``20151101.16.0-0``,  ``20151101.14.0-1``,  ``20151101.14.0-0``,  ``20151101.12.0-0``

      
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

    pixi global install bioconductor-rtcga.mutations

to add into an existing workspace instead, run::

    pixi add bioconductor-rtcga.mutations

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rtcga.mutations

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rtcga.mutations

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rtcga.mutations:<tag>

(see `bioconductor-rtcga.mutations/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rtcga.mutations| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.mutations
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.mutations| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations
.. _`bioconductor-rtcga.mutations/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.mutations?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.mutations";
        var versions = ["20151101.40.0","20151101.36.0","20151101.32.0","20151101.30.0","20151101.27.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.mutations/README.html