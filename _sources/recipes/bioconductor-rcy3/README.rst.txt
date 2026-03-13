:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcy3'
.. highlight: bash

bioconductor-rcy3
=================

.. conda:recipe:: bioconductor-rcy3
   :replaces_section_title:
   :noindex:

   Functions to Access and Control Cytoscape

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RCy3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3/meta.yaml>`_

   Vizualize\, analyze and explore networks using Cytoscape via R. Anything you can do using the graphical user interface of Cytoscape\, you can now do with a single RCy3 function.


.. conda:package:: bioconductor-rcy3

   |downloads_bioconductor-rcy3| |docker_bioconductor-rcy3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.1-0</code>,  <code>2.26.0-0</code>,  <code>2.22.1-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.2-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.30.1-0``,  ``2.26.0-0``,  ``2.22.1-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.2-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.3-0``,  ``2.2.9-0``,  ``2.2.6-0``,  ``2.0.88-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on cytoscape: ``>=3.7.1``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-base64enc: 
   :depends on r-base64url: 
   :depends on r-fs: 
   :depends on r-glue: 
   :depends on r-gplots: 
   :depends on r-httr: 
   :depends on r-irdisplay: 
   :depends on r-irkernel: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcurl: 
   :depends on r-rjsonio: 
   :depends on r-stringi: 
   :depends on r-uuid: 
   :depends on r-xml: 

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

    pixi global install bioconductor-rcy3

to add into an existing workspace instead, run::

    pixi add bioconductor-rcy3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcy3

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcy3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcy3:<tag>

(see `bioconductor-rcy3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcy3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcy3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcy3
   :alt:   (downloads)
.. |docker_bioconductor-rcy3| image:: https://quay.io/repository/biocontainers/bioconductor-rcy3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcy3
.. _`bioconductor-rcy3/tags`: https://quay.io/repository/biocontainers/bioconductor-rcy3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcy3";
        var versions = ["2.30.1","2.26.0","2.22.1","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcy3/README.html