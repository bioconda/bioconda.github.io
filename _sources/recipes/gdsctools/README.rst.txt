:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdsctools'
.. highlight: bash

gdsctools
=========

.. conda:recipe:: gdsctools
   :replaces_section_title:
   :noindex:

   Set of tools and pipelines to analyse GDSC data \(cancerrxgene.org\)

   :homepage: http://pypi.python.org/pypi/gdsctools
   :license: BSD / BSD
   :recipe: /`gdsctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools/meta.yaml>`_

   


.. conda:package:: gdsctools

   |downloads_gdsctools| |docker_gdsctools|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``0.20.1-0``,  ``0.19.0-0``

      

   
   :depends on biokit: ``0.4.1``
   :depends on colorlog: 
   :depends on colormap: ``1.0.1``
   :depends on easydev: ``>=0.9.34``
   :depends on jinja2: 
   :depends on matplotlib: ``>=1.4.3``
   :depends on numexpr: 
   :depends on numpy: 
   :depends on pandas: ``0.20.1``
   :depends on python: 
   :depends on reports: ``0.3.1``
   :depends on scikit-learn: ``0.18.2``
   :depends on scipy: ``0.19.1``
   :depends on statsmodels: ``0.8.0``
   :depends on xlrd: 

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

    pixi global install gdsctools

to add into an existing workspace instead, run::

    pixi add gdsctools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gdsctools

Alternatively, to install into a new environment, run::

    conda create -n envname gdsctools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gdsctools:<tag>

(see `gdsctools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gdsctools| image:: https://img.shields.io/conda/dn/bioconda/gdsctools.svg?style=flat
   :target: https://anaconda.org/bioconda/gdsctools
   :alt:   (downloads)
.. |docker_gdsctools| image:: https://quay.io/repository/biocontainers/gdsctools/status
   :target: https://quay.io/repository/biocontainers/gdsctools
.. _`gdsctools/tags`: https://quay.io/repository/biocontainers/gdsctools?tab=tags


.. raw:: html

    <script>
        var package = "gdsctools";
        var versions = ["1.0.1","1.0.1","0.20.1","0.19.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdsctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdsctools/README.html