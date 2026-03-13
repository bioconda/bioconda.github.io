:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ramclustr'
.. highlight: bash

r-ramclustr
===========

.. conda:recipe:: r-ramclustr
   :replaces_section_title:
   :noindex:

   A feature clustering algorithm for non\-targeted mass spectrometric metabolomics data. This method is compatible with gas and liquid chromatography coupled mass spectrometry\, including indiscriminant tandem mass spectrometry data \<DOI\: 10.1021\/ac501530d\>.

   :homepage: https://github.com/cbroeckl/RAMClustR
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-ramclustr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ramclustr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ramclustr/meta.yaml>`_

   


.. conda:package:: r-ramclustr

   |downloads_r-ramclustr| |docker_r-ramclustr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-1</code>,  </span></summary>
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.0.9-1``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: 
   :depends on bioconductor-pcamethods: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-biocmanager: 
   :depends on r-dynamictreecut: 
   :depends on r-e1071: 
   :depends on r-fastcluster: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-httr: 
   :depends on r-interpretmsspectrum: 
   :depends on r-jsonlite: 
   :depends on r-rcurl: 
   :depends on r-readxl: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-webchem: 
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

    pixi global install r-ramclustr

to add into an existing workspace instead, run::

    pixi add r-ramclustr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ramclustr

Alternatively, to install into a new environment, run::

    conda create -n envname r-ramclustr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ramclustr:<tag>

(see `r-ramclustr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ramclustr| image:: https://img.shields.io/conda/dn/bioconda/r-ramclustr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ramclustr
   :alt:   (downloads)
.. |docker_r-ramclustr| image:: https://quay.io/repository/biocontainers/r-ramclustr/status
   :target: https://quay.io/repository/biocontainers/r-ramclustr
.. _`r-ramclustr/tags`: https://quay.io/repository/biocontainers/r-ramclustr?tab=tags


.. raw:: html

    <script>
        var package = "r-ramclustr";
        var versions = ["1.3.1","1.3.1","1.3.0","1.3.0","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ramclustr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ramclustr/README.html