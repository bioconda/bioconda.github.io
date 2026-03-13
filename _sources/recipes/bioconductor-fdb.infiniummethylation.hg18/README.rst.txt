:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.infiniummethylation.hg18'
.. highlight: bash

bioconductor-fdb.infiniummethylation.hg18
=========================================

.. conda:recipe:: bioconductor-fdb.infiniummethylation.hg18
   :replaces_section_title:
   :noindex:

   Annotation package for Illumina Infinium DNA methylation probes

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/FDb.InfiniumMethylation.hg18.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.infiniummethylation.hg18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18/meta.yaml>`_

   Compiled HumanMethylation27 and HumanMethylation450 annotations


.. conda:package:: bioconductor-fdb.infiniummethylation.hg18

   |downloads_bioconductor-fdb.infiniummethylation.hg18| |docker_bioconductor-fdb.infiniummethylation.hg18|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-14</code>,  <code>2.2.0-13</code>,  <code>2.2.0-12</code>,  <code>2.2.0-11</code>,  <code>2.2.0-10</code>,  <code>2.2.0-9</code>,  <code>2.2.0-8</code>,  <code>2.2.0-7</code>,  <code>2.2.0-6</code>,  </span></summary>
      

      ``2.2.0-14``,  ``2.2.0-13``,  ``2.2.0-12``,  ``2.2.0-11``,  ``2.2.0-10``,  ``2.2.0-9``,  ``2.2.0-8``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
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

    pixi global install bioconductor-fdb.infiniummethylation.hg18

to add into an existing workspace instead, run::

    pixi add bioconductor-fdb.infiniummethylation.hg18

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fdb.infiniummethylation.hg18

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fdb.infiniummethylation.hg18

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fdb.infiniummethylation.hg18:<tag>

(see `bioconductor-fdb.infiniummethylation.hg18/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fdb.infiniummethylation.hg18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.infiniummethylation.hg18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.infiniummethylation.hg18
   :alt:   (downloads)
.. |docker_bioconductor-fdb.infiniummethylation.hg18| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18
.. _`bioconductor-fdb.infiniummethylation.hg18/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.infiniummethylation.hg18";
        var versions = ["2.2.0","2.2.0","2.2.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html