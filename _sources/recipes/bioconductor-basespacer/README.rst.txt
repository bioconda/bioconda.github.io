:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basespacer'
.. highlight: bash

bioconductor-basespacer
=======================

.. conda:recipe:: bioconductor-basespacer
   :replaces_section_title:
   :noindex:

   R SDK for BaseSpace RESTful API

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BaseSpaceR.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-basespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer/meta.yaml>`_
   :links: biotools: :biotools:`basespacer`, doi: :doi:`10.1038/nmeth.3252`

   A rich R interface to Illumina\'s BaseSpace cloud computing environment\, enabling the fast development of data analysis and visualisation tools.


.. conda:package:: bioconductor-basespacer

   |downloads_bioconductor-basespacer| |docker_bioconductor-basespacer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcurl: 
   :depends on r-rjsonio: 

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

    pixi global install bioconductor-basespacer

to add into an existing workspace instead, run::

    pixi add bioconductor-basespacer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basespacer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basespacer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basespacer:<tag>

(see `bioconductor-basespacer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basespacer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basespacer
   :alt:   (downloads)
.. |docker_bioconductor-basespacer| image:: https://quay.io/repository/biocontainers/bioconductor-basespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basespacer
.. _`bioconductor-basespacer/tags`: https://quay.io/repository/biocontainers/bioconductor-basespacer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basespacer";
        var versions = ["1.54.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basespacer/README.html