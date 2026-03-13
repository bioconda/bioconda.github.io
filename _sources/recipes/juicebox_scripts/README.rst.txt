:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'juicebox_scripts'
.. highlight: bash

juicebox_scripts
================

.. conda:recipe:: juicebox_scripts
   :replaces_section_title:
   :noindex:

   A collection of scripts for working with Hi\-C data\, Juicebox\, and other genomic file formats

   :homepage: https://github.com/phasegenomics/juicebox_scripts
   :license: GNU GPLv3
   :recipe: /`juicebox_scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicebox_scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicebox_scripts/meta.yaml>`_

   


.. conda:package:: juicebox_scripts

   |downloads_juicebox_scripts| |docker_juicebox_scripts|

   :versions:
      
      

      ``0.1.0gita7ae991-0``

      

   
   :depends on python: ``>=3.9``

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

    pixi global install juicebox_scripts

to add into an existing workspace instead, run::

    pixi add juicebox_scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install juicebox_scripts

Alternatively, to install into a new environment, run::

    conda create -n envname juicebox_scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/juicebox_scripts:<tag>

(see `juicebox_scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_juicebox_scripts| image:: https://img.shields.io/conda/dn/bioconda/juicebox_scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/juicebox_scripts
   :alt:   (downloads)
.. |docker_juicebox_scripts| image:: https://quay.io/repository/biocontainers/juicebox_scripts/status
   :target: https://quay.io/repository/biocontainers/juicebox_scripts
.. _`juicebox_scripts/tags`: https://quay.io/repository/biocontainers/juicebox_scripts?tab=tags


.. raw:: html

    <script>
        var package = "juicebox_scripts";
        var versions = ["0.1.0gita7ae991"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/juicebox_scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/juicebox_scripts/README.html