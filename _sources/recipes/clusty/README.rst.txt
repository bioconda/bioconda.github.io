:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusty'
.. highlight: bash

clusty
======

.. conda:recipe:: clusty
   :replaces_section_title:
   :noindex:

   Clusty is a tool for large\-scale data clustering.

   :homepage: https://github.com/refresh-bio/clusty
   :documentation: https://github.com/refresh-bio/clusty/blob/v1.2.2/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`clusty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusty/meta.yaml>`_

   


.. conda:package:: clusty

   |downloads_clusty| |docker_clusty|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install clusty

to add into an existing workspace instead, run::

    pixi add clusty

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clusty

Alternatively, to install into a new environment, run::

    conda create -n envname clusty

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clusty:<tag>

(see `clusty/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clusty| image:: https://img.shields.io/conda/dn/bioconda/clusty.svg?style=flat
   :target: https://anaconda.org/bioconda/clusty
   :alt:   (downloads)
.. |docker_clusty| image:: https://quay.io/repository/biocontainers/clusty/status
   :target: https://quay.io/repository/biocontainers/clusty
.. _`clusty/tags`: https://quay.io/repository/biocontainers/clusty?tab=tags


.. raw:: html

    <script>
        var package = "clusty";
        var versions = ["1.2.2","1.2.0","1.1.5","1.1.4","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusty/README.html