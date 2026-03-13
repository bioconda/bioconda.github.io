:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eggnog'
.. highlight: bash

r-eggnog
========

.. conda:recipe:: r-eggnog
   :replaces_section_title:
   :noindex:

   EggNOG database annotations.

   :homepage: https://r.acidgenomics.com/packages/eggnog/
   :developer docs: https://github.com/acidgenomics/r-eggnog
   :license: GPL / AGPL-3.0
   :recipe: /`r-eggnog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eggnog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eggnog/meta.yaml>`_

   


.. conda:package:: r-eggnog

   |downloads_r-eggnog| |docker_r-eggnog|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidbase: ``>=0.7.1``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.3``
   :depends on r-pipette: ``>=0.14.1``

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

    pixi global install r-eggnog

to add into an existing workspace instead, run::

    pixi add r-eggnog

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-eggnog

Alternatively, to install into a new environment, run::

    conda create -n envname r-eggnog

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-eggnog:<tag>

(see `r-eggnog/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-eggnog| image:: https://img.shields.io/conda/dn/bioconda/r-eggnog.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eggnog
   :alt:   (downloads)
.. |docker_r-eggnog| image:: https://quay.io/repository/biocontainers/r-eggnog/status
   :target: https://quay.io/repository/biocontainers/r-eggnog
.. _`r-eggnog/tags`: https://quay.io/repository/biocontainers/r-eggnog?tab=tags


.. raw:: html

    <script>
        var package = "r-eggnog";
        var versions = ["0.3.1","0.3.0","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eggnog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eggnog/README.html