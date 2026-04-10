:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbwa'
.. highlight: bash

bioconductor-rbwa
=================

.. conda:recipe:: bioconductor-rbwa
   :replaces_section_title:
   :noindex:

   R wrapper for BWA\-backtrack and BWA\-MEM aligners

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rbwa.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rbwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa/meta.yaml>`_

   Provides an R wrapper for BWA alignment algorithms. Both BWA\-backtrack and BWA\-MEM are available. Convenience function to build a BWA index from a reference genome is also provided. Currently not supported for Windows machines.


.. conda:package:: bioconductor-rbwa

   |downloads_bioconductor-rbwa| |docker_bioconductor-rbwa|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install bioconductor-rbwa

to add into an existing workspace instead, run::

    pixi add bioconductor-rbwa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rbwa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rbwa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rbwa:<tag>

(see `bioconductor-rbwa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rbwa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbwa
   :alt:   (downloads)
.. |docker_bioconductor-rbwa| image:: https://quay.io/repository/biocontainers/bioconductor-rbwa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbwa
.. _`bioconductor-rbwa/tags`: https://quay.io/repository/biocontainers/bioconductor-rbwa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbwa";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbwa/README.html