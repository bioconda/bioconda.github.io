:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathview-plus'
.. highlight: bash

pathview-plus
=============

.. conda:recipe:: pathview-plus
   :replaces_section_title:
   :noindex:

   Full\-featured Python implementation of R pathview \+ SBGNview with support for KEGG\, Reactome\, MetaCyc\, and more.

   :homepage: https://github.com/raw-lab/pathview-plus
   :documentation: https://github.com/raw-lab/pathview-plus/blob/v2.0.2/README.md
   
   :license: OTHER / CC BY-NC 4.0
   :recipe: /`pathview-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathview-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathview-plus/meta.yaml>`_

   


.. conda:package:: pathview-plus

   |downloads_pathview-plus| |docker_pathview-plus|

   :versions:
      
      

      ``2.0.2-0``

      

   
   :depends on networkx: ``>=3.1``
   :depends on numpy: ``>=1.24.0``
   :depends on pillow: ``>=10.0.0``
   :depends on polars: ``>=0.19.0``
   :depends on pyarrow: 
   :depends on python: ``>=3.8``
   :depends on requests: ``>=2.31.0``
   :depends on seaborn: ``>=0.12.0``

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

    pixi global install pathview-plus

to add into an existing workspace instead, run::

    pixi add pathview-plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathview-plus

Alternatively, to install into a new environment, run::

    conda create -n envname pathview-plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathview-plus:<tag>

(see `pathview-plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathview-plus| image:: https://img.shields.io/conda/dn/bioconda/pathview-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/pathview-plus
   :alt:   (downloads)
.. |docker_pathview-plus| image:: https://quay.io/repository/biocontainers/pathview-plus/status
   :target: https://quay.io/repository/biocontainers/pathview-plus
.. _`pathview-plus/tags`: https://quay.io/repository/biocontainers/pathview-plus?tab=tags


.. raw:: html

    <script>
        var package = "pathview-plus";
        var versions = ["2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathview-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathview-plus/README.html