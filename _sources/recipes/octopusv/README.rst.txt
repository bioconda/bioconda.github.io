:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'octopusv'
.. highlight: bash

octopusv
========

.. conda:recipe:: octopusv
   :replaces_section_title:
   :noindex:

   OctopusV\: Advanced Structural Variant Analysis Toolkit.

   :homepage: https://github.com/ylab-hi/octopusV
   :license: MIT / MIT
   :recipe: /`octopusv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopusv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopusv/meta.yaml>`_

   


.. conda:package:: octopusv

   |downloads_octopusv| |docker_octopusv|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on jinja2: ``>=3.1.5``
   :depends on loguru: ``>=0.7.2``
   :depends on matplotlib-base: ``>=3.9.2``
   :depends on natsort: ``>=8.4.0``
   :depends on pytest-cov: ``>=4.1.0``
   :depends on python: ``>=3.10,<3.13``
   :depends on rich: ``>=13.7.1``
   :depends on seaborn: ``>=0.13.2``
   :depends on typer: ``>=0.12.3``

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

    pixi global install octopusv

to add into an existing workspace instead, run::

    pixi add octopusv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install octopusv

Alternatively, to install into a new environment, run::

    conda create -n envname octopusv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/octopusv:<tag>

(see `octopusv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_octopusv| image:: https://img.shields.io/conda/dn/bioconda/octopusv.svg?style=flat
   :target: https://anaconda.org/bioconda/octopusv
   :alt:   (downloads)
.. |docker_octopusv| image:: https://quay.io/repository/biocontainers/octopusv/status
   :target: https://quay.io/repository/biocontainers/octopusv
.. _`octopusv/tags`: https://quay.io/repository/biocontainers/octopusv?tab=tags


.. raw:: html

    <script>
        var package = "octopusv";
        var versions = ["0.3.0","0.2.4","0.2.3","0.2.2","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopusv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopusv/README.html