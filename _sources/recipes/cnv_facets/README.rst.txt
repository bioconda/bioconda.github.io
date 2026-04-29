:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnv_facets'
.. highlight: bash

cnv_facets
==========

.. conda:recipe:: cnv_facets
   :replaces_section_title:
   :noindex:

   Detect somatic copy number variants \(CNV\) in tumour\-normal samples using next generation sequencing data

   :homepage: https://github.com/dariober/cnv_facets
   :license: MIT / MIT
   :recipe: /`cnv_facets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets/meta.yaml>`_

   


.. conda:package:: cnv_facets

   |downloads_cnv_facets| |docker_cnv_facets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.1-1</code>,  <code>0.16.1-0</code>,  <code>0.16.0-1</code>,  <code>0.16.0-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  <code>0.14.0-1</code>,  <code>0.13.0-1</code>,  <code>0.12.1-1</code>,  </span></summary>
      

      ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.0-1``,  ``0.13.0-1``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.12.0-0``,  ``v0.11.3-2``,  ``v0.11.3-1``,  ``v0.11.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.21,<2.0a0``
   :depends on bcftools: ``>=1.9``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=12``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=12.4.0``
   :depends on libstdcxx: ``>=12``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on r-argparse: ``>=2.1.6``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-facets: ``>=0.6.2,<1.0a0``
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-jsonlite: 
   :depends on samtools: ``>=1.21,<2.0a0``
   :depends on snp-pileup: ``>=0.6.2,<0.7.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install cnv_facets

to add into an existing workspace instead, run::

    pixi add cnv_facets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnv_facets

Alternatively, to install into a new environment, run::

    conda create -n envname cnv_facets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnv_facets:<tag>

(see `cnv_facets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnv_facets| image:: https://img.shields.io/conda/dn/bioconda/cnv_facets.svg?style=flat
   :target: https://anaconda.org/bioconda/cnv_facets
   :alt:   (downloads)
.. |docker_cnv_facets| image:: https://quay.io/repository/biocontainers/cnv_facets/status
   :target: https://quay.io/repository/biocontainers/cnv_facets
.. _`cnv_facets/tags`: https://quay.io/repository/biocontainers/cnv_facets?tab=tags


.. raw:: html

    <script>
        var package = "cnv_facets";
        var versions = ["0.16.1","0.16.1","0.16.0","0.16.0","0.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnv_facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnv_facets/README.html