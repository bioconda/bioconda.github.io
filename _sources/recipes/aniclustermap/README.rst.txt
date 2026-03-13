:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aniclustermap'
.. highlight: bash

aniclustermap
=============

.. conda:recipe:: aniclustermap
   :replaces_section_title:
   :noindex:

   A tool for drawing ANI clustermap between all\-vs\-all microbial genomes

   :homepage: https://github.com/moshi4/ANIclustermap
   :documentation: https://github.com/moshi4/ANIclustermap/blob/v2.0.1/README.md
   
   :license: MIT / MIT
   :recipe: /`aniclustermap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap/meta.yaml>`_

   


.. conda:package:: aniclustermap

   |downloads_aniclustermap| |docker_aniclustermap|

   :versions:
      
      

      ``2.0.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on fastani: ``>=1.33``
   :depends on pandas: ``>=1.4.1``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.9.0``
   :depends on seaborn: ``>=0.11.2``
   :depends on skani: ``>=0.2.2``
   :depends on typer: ``>=0.15.2``

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

    pixi global install aniclustermap

to add into an existing workspace instead, run::

    pixi add aniclustermap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aniclustermap

Alternatively, to install into a new environment, run::

    conda create -n envname aniclustermap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aniclustermap:<tag>

(see `aniclustermap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aniclustermap| image:: https://img.shields.io/conda/dn/bioconda/aniclustermap.svg?style=flat
   :target: https://anaconda.org/bioconda/aniclustermap
   :alt:   (downloads)
.. |docker_aniclustermap| image:: https://quay.io/repository/biocontainers/aniclustermap/status
   :target: https://quay.io/repository/biocontainers/aniclustermap
.. _`aniclustermap/tags`: https://quay.io/repository/biocontainers/aniclustermap?tab=tags


.. raw:: html

    <script>
        var package = "aniclustermap";
        var versions = ["2.0.1","1.4.0","1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aniclustermap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aniclustermap/README.html