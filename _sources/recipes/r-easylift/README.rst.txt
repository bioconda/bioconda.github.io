:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-easylift'
.. highlight: bash

r-easylift
==========

.. conda:recipe:: r-easylift
   :replaces_section_title:
   :noindex:

   A convenience package for converting between popular mouse \& human builds.

   :homepage: https://github.com/caleblareau/easyLift
   :license: MIT / MIT
   :recipe: /`r-easylift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easylift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easylift/meta.yaml>`_

   


.. conda:package:: r-easylift

   |downloads_r-easylift| |docker_r-easylift|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-rtracklayer: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-easylift

to add into an existing workspace instead, run::

    pixi add r-easylift

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-easylift

Alternatively, to install into a new environment, run::

    conda create -n envname r-easylift

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-easylift:<tag>

(see `r-easylift/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-easylift| image:: https://img.shields.io/conda/dn/bioconda/r-easylift.svg?style=flat
   :target: https://anaconda.org/bioconda/r-easylift
   :alt:   (downloads)
.. |docker_r-easylift| image:: https://quay.io/repository/biocontainers/r-easylift/status
   :target: https://quay.io/repository/biocontainers/r-easylift
.. _`r-easylift/tags`: https://quay.io/repository/biocontainers/r-easylift?tab=tags


.. raw:: html

    <script>
        var package = "r-easylift";
        var versions = ["0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-easylift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-easylift/README.html