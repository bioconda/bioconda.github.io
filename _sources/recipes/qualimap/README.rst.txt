:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qualimap'
.. highlight: bash

qualimap
========

.. conda:recipe:: qualimap
   :replaces_section_title:
   :noindex:

   Quality control of alignment sequencing data and its derivatives like feature counts

   :homepage: http://qualimap.bioinfo.cipf.es/
   :license: GPL-2.0-or-later
   :recipe: /`qualimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap/meta.yaml>`_
   :links: biotools: :biotools:`qualimap`

   


.. conda:package:: qualimap

   |downloads_qualimap| |docker_qualimap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-0</code>,  <code>2.2.2d-2</code>,  <code>2.2.2d-1</code>,  <code>2.2.2d-0</code>,  <code>2.2.2c-2</code>,  <code>2.2.2c-1</code>,  <code>2.2.2c-0</code>,  <code>2.2.2b-1</code>,  <code>2.2.2b-0</code>,  </span></summary>
      

      ``2.3-0``,  ``2.2.2d-2``,  ``2.2.2d-1``,  ``2.2.2d-0``,  ``2.2.2c-2``,  ``2.2.2c-1``,  ``2.2.2c-0``,  ``2.2.2b-1``,  ``2.2.2b-0``,  ``2.2.2a-3``,  ``2.2.2a-2``,  ``2.2.2a-1``,  ``2.2.2a-0``,  ``2.2-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-1``,  ``2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-noiseq: 
   :depends on bioconductor-rsamtools: 
   :depends on bioconductor-rtracklayer: 
   :depends on fonts-conda-ecosystem: 
   :depends on openjdk: 
   :depends on r-optparse: 
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

    pixi global install qualimap

to add into an existing workspace instead, run::

    pixi add qualimap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qualimap

Alternatively, to install into a new environment, run::

    conda create -n envname qualimap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qualimap:<tag>

(see `qualimap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qualimap| image:: https://img.shields.io/conda/dn/bioconda/qualimap.svg?style=flat
   :target: https://anaconda.org/bioconda/qualimap
   :alt:   (downloads)
.. |docker_qualimap| image:: https://quay.io/repository/biocontainers/qualimap/status
   :target: https://quay.io/repository/biocontainers/qualimap
.. _`qualimap/tags`: https://quay.io/repository/biocontainers/qualimap?tab=tags


.. raw:: html

    <script>
        var package = "qualimap";
        var versions = ["2.3","2.2.2d","2.2.2d","2.2.2d","2.2.2c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualimap/README.html