:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2016'
.. highlight: bash

bioconductor-jaspar2016
=======================

.. conda:recipe:: bioconductor-jaspar2016
   :replaces_section_title:
   :noindex:

   Data package for JASPAR 2016

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/JASPAR2016.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2016 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016/meta.yaml>`_

   Data package for JASPAR 2016. To search this databases\, please use the package TFBSTools \(\>\= 1.8.1\).


.. conda:package:: bioconductor-jaspar2016

   |downloads_bioconductor-jaspar2016| |docker_bioconductor-jaspar2016|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-jaspar2016

to add into an existing workspace instead, run::

    pixi add bioconductor-jaspar2016

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-jaspar2016

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-jaspar2016

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-jaspar2016:<tag>

(see `bioconductor-jaspar2016/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-jaspar2016| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2016.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2016
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2016| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2016/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2016
.. _`bioconductor-jaspar2016/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2016?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2016";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html