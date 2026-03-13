:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ddpcrclust'
.. highlight: bash

bioconductor-ddpcrclust
=======================

.. conda:recipe:: bioconductor-ddpcrclust
   :replaces_section_title:
   :noindex:

   Clustering algorithm for ddPCR data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ddPCRclust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ddpcrclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust/meta.yaml>`_

   The ddPCRclust algorithm can automatically quantify the CPDs of non\-orthogonal ddPCR reactions with up to four targets. In order to determine the correct droplet count for each target\, it is crucial to both identify all clusters and label them correctly based on their position. For more information on what data can be analyzed and how a template needs to be formatted\, please check the vignette.


.. conda:package:: bioconductor-ddpcrclust

   |downloads_bioconductor-ddpcrclust| |docker_bioconductor-ddpcrclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowdensity: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-flowpeaks: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-samspectral: ``>=1.64.0,<1.65.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clue: 
   :depends on r-ggplot2: 
   :depends on r-openxlsx: 
   :depends on r-plotrix: 
   :depends on r-r.utils: 

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

    pixi global install bioconductor-ddpcrclust

to add into an existing workspace instead, run::

    pixi add bioconductor-ddpcrclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ddpcrclust

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ddpcrclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ddpcrclust:<tag>

(see `bioconductor-ddpcrclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ddpcrclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ddpcrclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ddpcrclust
   :alt:   (downloads)
.. |docker_bioconductor-ddpcrclust| image:: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust
.. _`bioconductor-ddpcrclust/tags`: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ddpcrclust";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html