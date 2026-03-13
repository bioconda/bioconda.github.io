:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2022'
.. highlight: bash

bioconductor-jaspar2022
=======================

.. conda:recipe:: bioconductor-jaspar2022
   :replaces_section_title:
   :noindex:

   Data package for JASPAR database \(version 2022\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/JASPAR2022.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2022 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2022>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2022/meta.yaml>`_

   JASPAR is an open\-access database containing manually curated\, non\-redundant transcription factor \(TF\) binding profiles for TFs across six taxonomic groups. In this 9th release\, we expanded the CORE collection with 341 new profiles \(148 for plants\, 101 for vertebrates\, 85 for urochordates\, and 7 for insects\)\, which corresponds to a 19\% expansion over the previous release. To search thisdatabases\, please use the package TFBSTools \(\>\= 1.31.2\).


.. conda:package:: bioconductor-jaspar2022

   |downloads_bioconductor-jaspar2022| |docker_bioconductor-jaspar2022|

   :versions:
      
      

      ``0.99.8-1``,  ``0.99.8-0``,  ``0.99.7-1``,  ``0.99.7-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-jaspar2022

to add into an existing workspace instead, run::

    pixi add bioconductor-jaspar2022

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-jaspar2022

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-jaspar2022

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-jaspar2022:<tag>

(see `bioconductor-jaspar2022/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-jaspar2022| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2022.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2022
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2022| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2022/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2022
.. _`bioconductor-jaspar2022/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2022?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2022";
        var versions = ["0.99.8","0.99.8","0.99.7","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2022/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2022/README.html