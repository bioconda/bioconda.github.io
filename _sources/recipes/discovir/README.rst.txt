:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discovir'
.. highlight: bash

discovir
========

.. conda:recipe:: discovir
   :replaces_section_title:
   :noindex:

   A Snakemake Pipeline for Integrated Viral Discovery.

   :homepage: https://github.com/matheus-cosentino/discovir
   :license: GPL / GPL-3.0-or-later
   :recipe: /`discovir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovir/meta.yaml>`_

   


.. conda:package:: discovir

   |downloads_discovir| |docker_discovir|

   :versions:
      
      

      ``1.0.1.beta-0``

      

   
   :depends on bash: 
   :depends on coreutils: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on snakemake: ``>=9.11.1``
   :depends on snakemake-executor-plugin-slurm: ``>=2.0.0``

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

    pixi global install discovir

to add into an existing workspace instead, run::

    pixi add discovir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install discovir

Alternatively, to install into a new environment, run::

    conda create -n envname discovir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/discovir:<tag>

(see `discovir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_discovir| image:: https://img.shields.io/conda/dn/bioconda/discovir.svg?style=flat
   :target: https://anaconda.org/bioconda/discovir
   :alt:   (downloads)
.. |docker_discovir| image:: https://quay.io/repository/biocontainers/discovir/status
   :target: https://quay.io/repository/biocontainers/discovir
.. _`discovir/tags`: https://quay.io/repository/biocontainers/discovir?tab=tags


.. raw:: html

    <script>
        var package = "discovir";
        var versions = ["1.0.1.beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discovir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discovir/README.html