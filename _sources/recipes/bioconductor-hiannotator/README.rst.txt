:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiannotator'
.. highlight: bash

bioconductor-hiannotator
========================

.. conda:recipe:: bioconductor-hiannotator
   :replaces_section_title:
   :noindex:

   Functions for annotating GRanges objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hiAnnotator.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hiannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator/meta.yaml>`_
   :links: biotools: :biotools:`hiannotator`, doi: :doi:`10.1038/nmeth.3252`

   hiAnnotator contains set of functions which allow users to annotate a GRanges object with custom set of annotations. The basic philosophy of this package is to take two GRanges objects \(query \& subject\) with common set of seqnames \(i.e. chromosomes\) and return associated annotation per seqnames and rows from the query matching seqnames and rows from the subject \(i.e. genes or cpg islands\). The package comes with three types of annotation functions which calculates if a position from query is\: within a feature\, near a feature\, or count features in defined window sizes. Moreover\, each function is equipped with parallel backend to utilize the foreach package. In addition\, the package is equipped with wrapper functions\, which finds appropriate columns needed to make a GRanges object from a common data frame.


.. conda:package:: bioconductor-hiannotator

   |downloads_bioconductor-hiannotator| |docker_bioconductor-hiannotator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-iterators: 
   :depends on r-scales: 

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

    pixi global install bioconductor-hiannotator

to add into an existing workspace instead, run::

    pixi add bioconductor-hiannotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hiannotator

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hiannotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hiannotator:<tag>

(see `bioconductor-hiannotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hiannotator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiannotator
   :alt:   (downloads)
.. |docker_bioconductor-hiannotator| image:: https://quay.io/repository/biocontainers/bioconductor-hiannotator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiannotator
.. _`bioconductor-hiannotator/tags`: https://quay.io/repository/biocontainers/bioconductor-hiannotator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiannotator";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html