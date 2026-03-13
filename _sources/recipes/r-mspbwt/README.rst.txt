:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mspbwt'
.. highlight: bash

r-mspbwt
========

.. conda:recipe:: r-mspbwt
   :replaces_section_title:
   :noindex:

   Multi Symbol Positional Burrows Wheeler Transform.

   :homepage: https://github.com/rwdavies/mspbwt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-mspbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mspbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mspbwt/meta.yaml>`_

   


.. conda:package:: r-mspbwt

   |downloads_r-mspbwt| |docker_r-mspbwt|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: ``>=1.11.8``
   :depends on r-rcpp: ``<=1.0.14``
   :depends on r-rrbgen: ``>=0.0.6``
   :depends on r-rrbgen: ``>=0.0.6,<0.1.0a0``
   :depends on r-stitch: ``>=1.7.0``
   :depends on r-stitch: ``>=1.8.2,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install r-mspbwt

to add into an existing workspace instead, run::

    pixi add r-mspbwt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mspbwt

Alternatively, to install into a new environment, run::

    conda create -n envname r-mspbwt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mspbwt:<tag>

(see `r-mspbwt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mspbwt| image:: https://img.shields.io/conda/dn/bioconda/r-mspbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mspbwt
   :alt:   (downloads)
.. |docker_r-mspbwt| image:: https://quay.io/repository/biocontainers/r-mspbwt/status
   :target: https://quay.io/repository/biocontainers/r-mspbwt
.. _`r-mspbwt/tags`: https://quay.io/repository/biocontainers/r-mspbwt?tab=tags


.. raw:: html

    <script>
        var package = "r-mspbwt";
        var versions = ["0.1.1","0.1.1","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mspbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mspbwt/README.html