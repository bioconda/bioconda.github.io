:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomart'
.. highlight: bash

bioconductor-biomart
====================

.. conda:recipe:: bioconductor-biomart
   :replaces_section_title:
   :noindex:

   Interface to BioMart databases \(i.e. Ensembl\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biomaRt.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biomart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart/meta.yaml>`_
   :links: biotools: :biotools:`biomaRt`, doi: :doi:`10.1038/nprot.2009.97`

   In recent years a wealth of biological data has become available in public data repositories. Easy access to these valuable data resources and firm integration with data analysis is needed for comprehensive bioinformatics data analysis. biomaRt provides an interface to a growing collection of databases implementing the BioMart software suite \(\<http\:\/\/www.biomart.org\>\). The package enables retrieval of large amounts of data in a uniform way without the need to know the underlying database schemas or write complex SQL queries. The most prominent examples of BioMart databases are maintain by Ensembl\, which provides biomaRt users direct access to a diverse set of data and enables a wide range of powerful online queries from gene annotation to database mining.


.. conda:package:: bioconductor-biomart

   |downloads_bioconductor-biomart| |docker_bioconductor-biomart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.66.1-0</code>,  <code>2.66.0-0</code>,  <code>2.62.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.1-0</code>,  <code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.3-0</code>,  </span></summary>
      

      ``2.66.1-0``,  ``2.66.0-0``,  ``2.62.0-0``,  ``2.58.0-0``,  ``2.56.1-0``,  ``2.54.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.3-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.3-0``,  ``2.38.0-0``,  ``2.36.1-0``,  ``2.34.2-0``,  ``2.34.0-0``,  ``2.32.1-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.1-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-httr2: 
   :depends on r-progress: 
   :depends on r-stringr: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-biomart

to add into an existing workspace instead, run::

    pixi add bioconductor-biomart

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biomart

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biomart

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biomart:<tag>

(see `bioconductor-biomart/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biomart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomart
   :alt:   (downloads)
.. |docker_bioconductor-biomart| image:: https://quay.io/repository/biocontainers/bioconductor-biomart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomart
.. _`bioconductor-biomart/tags`: https://quay.io/repository/biocontainers/bioconductor-biomart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomart";
        var versions = ["2.66.1","2.66.0","2.62.0","2.58.0","2.56.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomart/README.html