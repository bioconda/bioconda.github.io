:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgautils'
.. highlight: bash

bioconductor-tcgautils
======================

.. conda:recipe:: bioconductor-tcgautils
   :replaces_section_title:
   :noindex:

   TCGA utility functions for data management

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TCGAutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tcgautils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils/meta.yaml>`_

   A suite of helper functions for checking and manipulating TCGA data including data obtained from the curatedTCGAData experiment package. These functions aim to simplify and make working with TCGA data more manageable. Exported functions include those that import data from flat files into Bioconductor objects\, convert row annotations\, and identifier translation via the GDC API.


.. conda:package:: bioconductor-tcgautils

   |downloads_bioconductor-tcgautils| |docker_bioconductor-tcgautils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.2-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.2-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.2-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicdatacommons: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-raggedexperiment: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rvest: 
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

    pixi global install bioconductor-tcgautils

to add into an existing workspace instead, run::

    pixi add bioconductor-tcgautils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tcgautils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tcgautils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tcgautils:<tag>

(see `bioconductor-tcgautils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tcgautils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgautils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgautils
   :alt:   (downloads)
.. |docker_bioconductor-tcgautils| image:: https://quay.io/repository/biocontainers/bioconductor-tcgautils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgautils
.. _`bioconductor-tcgautils/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgautils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgautils";
        var versions = ["1.30.2","1.26.0","1.22.0","1.20.2","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html