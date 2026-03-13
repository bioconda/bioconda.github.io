:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbaf'
.. highlight: bash

bioconductor-cbaf
=================

.. conda:recipe:: bioconductor-cbaf
   :replaces_section_title:
   :noindex:

   Automated functions for comparing various omic data from cbioportal.org

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cbaf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cbaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbaf/meta.yaml>`_

   This package contains functions that allow analysing and comparing omic data across various cancers\/cancer subgroups easily. So far\, it is compatible with RNA\-seq\, microRNA\-seq\, microarray and methylation datasets that are stored on cbioportal.org.


.. conda:package:: bioconductor-cbaf

   |downloads_bioconductor-cbaf| |docker_bioconductor-cbaf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-cbioportaldata: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-openxlsx: 
   :depends on r-rcolorbrewer: 
   :depends on r-zip: 

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

    pixi global install bioconductor-cbaf

to add into an existing workspace instead, run::

    pixi add bioconductor-cbaf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cbaf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cbaf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cbaf:<tag>

(see `bioconductor-cbaf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cbaf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbaf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbaf
   :alt:   (downloads)
.. |docker_bioconductor-cbaf| image:: https://quay.io/repository/biocontainers/bioconductor-cbaf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbaf
.. _`bioconductor-cbaf/tags`: https://quay.io/repository/biocontainers/bioconductor-cbaf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbaf";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbaf/README.html