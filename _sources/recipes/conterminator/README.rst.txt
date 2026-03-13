:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conterminator'
.. highlight: bash

conterminator
=============

.. conda:recipe:: conterminator
   :replaces_section_title:
   :noindex:

   Conterminator\: software to detect contamination in large sequence sets

   :homepage: https://github.com/martin-steinegger/conterminator
   :license: GPL3
   :recipe: /`conterminator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02023-1`, biotools: :biotools:`conterminator`

   


.. conda:package:: conterminator

   |downloads_conterminator| |docker_conterminator|

   :versions:
      
      

      ``1.c74b5-1``,  ``1.c74b5-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gawk: 
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on openmp: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install conterminator

to add into an existing workspace instead, run::

    pixi add conterminator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install conterminator

Alternatively, to install into a new environment, run::

    conda create -n envname conterminator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/conterminator:<tag>

(see `conterminator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_conterminator| image:: https://img.shields.io/conda/dn/bioconda/conterminator.svg?style=flat
   :target: https://anaconda.org/bioconda/conterminator
   :alt:   (downloads)
.. |docker_conterminator| image:: https://quay.io/repository/biocontainers/conterminator/status
   :target: https://quay.io/repository/biocontainers/conterminator
.. _`conterminator/tags`: https://quay.io/repository/biocontainers/conterminator?tab=tags


.. raw:: html

    <script>
        var package = "conterminator";
        var versions = ["1.c74b5","1.c74b5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conterminator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conterminator/README.html