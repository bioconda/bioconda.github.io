:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.ucsc.trnas'
.. highlight: bash

bioconductor-fdb.ucsc.trnas
===========================

.. conda:recipe:: bioconductor-fdb.ucsc.trnas
   :replaces_section_title:
   :noindex:

   Annotation package for FeatureDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/FDb.UCSC.tRNAs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.trnas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as FeatureDb objects


.. conda:package:: bioconductor-fdb.ucsc.trnas

   |downloads_bioconductor-fdb.ucsc.trnas| |docker_bioconductor-fdb.ucsc.trnas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-14</code>,  <code>1.0.1-13</code>,  <code>1.0.1-12</code>,  <code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  </span></summary>
      

      ``1.0.1-14``,  ``1.0.1-13``,  ``1.0.1-12``,  ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
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

    pixi global install bioconductor-fdb.ucsc.trnas

to add into an existing workspace instead, run::

    pixi add bioconductor-fdb.ucsc.trnas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fdb.ucsc.trnas

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fdb.ucsc.trnas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fdb.ucsc.trnas:<tag>

(see `bioconductor-fdb.ucsc.trnas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fdb.ucsc.trnas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.trnas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.ucsc.trnas
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.trnas| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas
.. _`bioconductor-fdb.ucsc.trnas/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.ucsc.trnas";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html