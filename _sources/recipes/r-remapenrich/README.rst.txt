:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-remapenrich'
.. highlight: bash

r-remapenrich
=============

.. conda:recipe:: r-remapenrich
   :replaces_section_title:
   :noindex:

   Bioinformatics tools to compute statistical enrichment of geonomic regions for ReMap peaks

   :homepage: https://github.com/nigiord/ReMapEnrich
   :license: AGPL / AGPL-3
   :recipe: /`r-remapenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-remapenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-remapenrich/meta.yaml>`_

   


.. conda:package:: r-remapenrich

   |downloads_r-remapenrich| |docker_r-remapenrich|

   :versions:
      
      

      ``0.99.0-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-r.utils: 
   :depends on r-rmysql: 

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

    pixi global install r-remapenrich

to add into an existing workspace instead, run::

    pixi add r-remapenrich

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-remapenrich

Alternatively, to install into a new environment, run::

    conda create -n envname r-remapenrich

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-remapenrich:<tag>

(see `r-remapenrich/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-remapenrich| image:: https://img.shields.io/conda/dn/bioconda/r-remapenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/r-remapenrich
   :alt:   (downloads)
.. |docker_r-remapenrich| image:: https://quay.io/repository/biocontainers/r-remapenrich/status
   :target: https://quay.io/repository/biocontainers/r-remapenrich
.. _`r-remapenrich/tags`: https://quay.io/repository/biocontainers/r-remapenrich?tab=tags


.. raw:: html

    <script>
        var package = "r-remapenrich";
        var versions = ["0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-remapenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-remapenrich/README.html