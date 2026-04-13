:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gofuncr'
.. highlight: bash

bioconductor-gofuncr
====================

.. conda:recipe:: bioconductor-gofuncr
   :replaces_section_title:
   :noindex:

   Gene ontology enrichment using FUNC

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GOfuncR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gofuncr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofuncr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofuncr/meta.yaml>`_

   GOfuncR performs a gene ontology enrichment analysis based on the ontology enrichment software FUNC. GO\-annotations are obtained from OrganismDb or OrgDb packages \(\'Homo.sapiens\' by default\)\; the GO\-graph is included in the package and updated regularly \(01\-May\-2021\). GOfuncR provides the standard candidate vs. background enrichment analysis using the hypergeometric test\, as well as three additional tests\: \(i\) the Wilcoxon rank\-sum test that is used when genes are ranked\, \(ii\) a binomial test that is used when genes are associated with two counts and \(iii\) a Chi\-square or Fisher\'s exact test that is used in cases when genes are associated with four counts. To correct for multiple testing and interdependency of the tests\, family\-wise error rates are computed based on random permutations of the gene\-associated variables. GOfuncR also provides tools for exploring the ontology graph and the annotations\, and options to take gene\-length or spatial clustering of genes into account. It is also possible to provide custom gene coordinates\, annotations and ontologies.


.. conda:package:: bioconductor-gofuncr

   |downloads_bioconductor-gofuncr| |docker_bioconductor-gofuncr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gtools: ``>=3.5.0``
   :depends on r-mapplots: ``>=1.5``
   :depends on r-rcpp: ``>=0.11.5``
   :depends on r-vioplot: ``>=0.2``

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

    pixi global install bioconductor-gofuncr

to add into an existing workspace instead, run::

    pixi add bioconductor-gofuncr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gofuncr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gofuncr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gofuncr:<tag>

(see `bioconductor-gofuncr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gofuncr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gofuncr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gofuncr
   :alt:   (downloads)
.. |docker_bioconductor-gofuncr| image:: https://quay.io/repository/biocontainers/bioconductor-gofuncr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gofuncr
.. _`bioconductor-gofuncr/tags`: https://quay.io/repository/biocontainers/bioconductor-gofuncr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gofuncr";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html