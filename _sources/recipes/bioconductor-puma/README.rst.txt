:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-puma'
.. highlight: bash

bioconductor-puma
=================

.. conda:recipe:: bioconductor-puma
   :replaces_section_title:
   :noindex:

   Propagating Uncertainty in Microarray Analysis\(including Affymetrix tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/puma.html
   :license: LGPL
   :recipe: /`bioconductor-puma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma/meta.yaml>`_
   :links: biotools: :biotools:`puma`

   Most analyses of Affymetrix GeneChip data \(including tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\) are based on point estimates of expression levels and ignore the uncertainty of such estimates. By propagating uncertainty to downstream analyses we can improve results from microarray analyses. For the first time\, the puma package makes a suite of uncertainty propagation methods available to a general audience. In additon to calculte gene expression from Affymetrix 3\' arrays\, puma also provides methods to process exon arrays and produces gene and isoform expression for alternative splicing study. puma also offers improvements in terms of scope and speed of execution over previously available uncertainty propagation methods. Included are summarisation\, differential expression detection\, clustering and PCA methods\, together with useful plotting functions.


.. conda:package:: bioconductor-puma

   |downloads_bioconductor-puma| |docker_bioconductor-puma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.52.0-0</code>,  <code>3.48.0-0</code>,  <code>3.44.0-0</code>,  <code>3.42.0-0</code>,  <code>3.40.0-1</code>,  <code>3.40.0-0</code>,  <code>3.36.0-2</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  </span></summary>
      

      ``3.52.0-0``,  ``3.48.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.40.0-0``,  ``3.36.0-2``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-1``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0a0``
   :depends on bioconductor-affyio: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-affyio: ``>=1.80.0,<1.81.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0a0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mclust: 

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

    pixi global install bioconductor-puma

to add into an existing workspace instead, run::

    pixi add bioconductor-puma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-puma

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-puma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-puma:<tag>

(see `bioconductor-puma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-puma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-puma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-puma
   :alt:   (downloads)
.. |docker_bioconductor-puma| image:: https://quay.io/repository/biocontainers/bioconductor-puma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-puma
.. _`bioconductor-puma/tags`: https://quay.io/repository/biocontainers/bioconductor-puma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-puma";
        var versions = ["3.52.0","3.48.0","3.44.0","3.42.0","3.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-puma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-puma/README.html