:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dropest'
.. highlight: bash

dropest
=======

.. conda:recipe:: dropest
   :replaces_section_title:
   :noindex:

   Pipeline for initial analysis of droplet\-based single\-cell RNA\-seq data

   :homepage: https://github.com/hms-dbmi/dropEst/
   :license: GPL3
   :recipe: /`dropest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropest/meta.yaml>`_

   


.. conda:package:: dropest

   |downloads_dropest| |docker_dropest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.6-7</code>,  <code>0.8.6-6</code>,  <code>0.8.6-5</code>,  <code>0.8.6-4</code>,  <code>0.8.6-3</code>,  <code>0.8.6-2</code>,  <code>0.8.6-1</code>,  <code>0.8.6-0</code>,  <code>0.8.5-1</code>,  </span></summary>
      

      ``0.8.6-7``,  ``0.8.6-6``,  ``0.8.6-5``,  ``0.8.6-4``,  ``0.8.6-3``,  ``0.8.6-2``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.8.5-1``,  ``0.8.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends on boost: ``>=1.78.0,<1.78.1.0a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ks: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-pcapp: 
   :depends on r-rcpp: 
   :depends on r-rcppeigen: 
   :depends on r-rcppprogress: 
   :depends on r-rinside: 
   :depends on zlib: 

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

    pixi global install dropest

to add into an existing workspace instead, run::

    pixi add dropest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dropest

Alternatively, to install into a new environment, run::

    conda create -n envname dropest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dropest:<tag>

(see `dropest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dropest| image:: https://img.shields.io/conda/dn/bioconda/dropest.svg?style=flat
   :target: https://anaconda.org/bioconda/dropest
   :alt:   (downloads)
.. |docker_dropest| image:: https://quay.io/repository/biocontainers/dropest/status
   :target: https://quay.io/repository/biocontainers/dropest
.. _`dropest/tags`: https://quay.io/repository/biocontainers/dropest?tab=tags


.. raw:: html

    <script>
        var package = "dropest";
        var versions = ["0.8.6","0.8.6","0.8.6","0.8.6","0.8.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropest/README.html