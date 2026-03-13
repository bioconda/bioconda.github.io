:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.exac.r1.0.hs37d5'
.. highlight: bash

bioconductor-mafdb.exac.r1.0.hs37d5
===================================

.. conda:recipe:: bioconductor-mafdb.exac.r1.0.hs37d5
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from ExAC release 1.0 for hs37d5

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/MafDb.ExAC.r1.0.hs37d5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.exac.r1.0.hs37d5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.exac.r1.0.hs37d5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.exac.r1.0.hs37d5/meta.yaml>`_

   Store minor allele frequency data from the Exome Aggregation Consortium \(ExAC release 1.0\) for the human genome version hs37d5.


.. conda:package:: bioconductor-mafdb.exac.r1.0.hs37d5

   |downloads_bioconductor-mafdb.exac.r1.0.hs37d5| |docker_bioconductor-mafdb.exac.r1.0.hs37d5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-11</code>,  <code>3.10.0-10</code>,  <code>3.10.0-9</code>,  <code>3.10.0-8</code>,  <code>3.10.0-7</code>,  <code>3.10.0-6</code>,  <code>3.10.0-5</code>,  <code>3.10.0-4</code>,  <code>3.10.0-3</code>,  </span></summary>
      

      ``3.10.0-11``,  ``3.10.0-10``,  ``3.10.0-9``,  ``3.10.0-8``,  ``3.10.0-7``,  ``3.10.0-6``,  ``3.10.0-5``,  ``3.10.0-4``,  ``3.10.0-3``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.7.0-2``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
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

    pixi global install bioconductor-mafdb.exac.r1.0.hs37d5

to add into an existing workspace instead, run::

    pixi add bioconductor-mafdb.exac.r1.0.hs37d5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mafdb.exac.r1.0.hs37d5

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mafdb.exac.r1.0.hs37d5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mafdb.exac.r1.0.hs37d5:<tag>

(see `bioconductor-mafdb.exac.r1.0.hs37d5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mafdb.exac.r1.0.hs37d5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.exac.r1.0.hs37d5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.exac.r1.0.hs37d5
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.exac.r1.0.hs37d5| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.hs37d5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.hs37d5
.. _`bioconductor-mafdb.exac.r1.0.hs37d5/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.hs37d5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafdb.exac.r1.0.hs37d5";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.exac.r1.0.hs37d5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.exac.r1.0.hs37d5/README.html