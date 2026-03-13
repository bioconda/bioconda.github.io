:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spapros'
.. highlight: bash

spapros
=======

.. conda:recipe:: spapros
   :replaces_section_title:
   :noindex:

   Probe set selection for targeted spatial transcriptomics.

   :homepage: https://github.com/theislab/spapros
   :documentation: https://spapros.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`spapros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spapros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spapros/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-024-02496-z`, biotools: :biotools:`spapros`

   


.. conda:package:: spapros

   |downloads_spapros| |docker_spapros|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on bandit: ``>=1.7.6``
   :depends on click: ``>=8.0.1``
   :depends on jinja2: ``>=3.0.1``
   :depends on jupyter-sphinx: ``>=0.3.2``
   :depends on leidenalg: ``>=0.8.7``
   :depends on matplotlib-base: ``>=3.6.3``
   :depends on nox: ``>=2023.04.22``
   :depends on nox-poetry: ``>=1.0.3``
   :depends on numpy: ``<2``
   :depends on pandas: ``>=2.0.0,<3.0.0``
   :depends on pandoc: ``>=2.1``
   :depends on pillow: ``>=10.0.2``
   :depends on python: ``>=3.11,<3.14``
   :depends on pyyaml: ``>=6.0.1``
   :depends on questionary: ``>=1.10.0``
   :depends on rich: ``>=10.1.0``
   :depends on ruamel.yaml: ``>=0.17.10``
   :depends on scanpy: ``>=1.9.8``
   :depends on seaborn-base: ``>=0.11.1``
   :depends on upsetplot: ``>=0.7.0``
   :depends on venndata: ``>=0.1.0``
   :depends on xgboost: ``>=1.6.1``

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

    pixi global install spapros

to add into an existing workspace instead, run::

    pixi add spapros

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spapros

Alternatively, to install into a new environment, run::

    conda create -n envname spapros

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spapros:<tag>

(see `spapros/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spapros| image:: https://img.shields.io/conda/dn/bioconda/spapros.svg?style=flat
   :target: https://anaconda.org/bioconda/spapros
   :alt:   (downloads)
.. |docker_spapros| image:: https://quay.io/repository/biocontainers/spapros/status
   :target: https://quay.io/repository/biocontainers/spapros
.. _`spapros/tags`: https://quay.io/repository/biocontainers/spapros?tab=tags


.. raw:: html

    <script>
        var package = "spapros";
        var versions = ["0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spapros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spapros/README.html