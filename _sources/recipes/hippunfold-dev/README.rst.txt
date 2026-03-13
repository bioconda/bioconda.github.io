:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hippunfold-dev'
.. highlight: bash

hippunfold-dev
==============

.. conda:recipe:: hippunfold-dev
   :replaces_section_title:
   :noindex:

   Meta\-package that installs hippunfold with development dependencies.


   :homepage: https://github.com/khanlab/hippunfold
   :license: MIT
   :recipe: /`hippunfold-dev <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev/meta.yaml>`_

   


.. conda:package:: hippunfold-dev

   |downloads_hippunfold-dev| |docker_hippunfold-dev|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on black: ``>=24.0.0``
   :depends on flake8: ``>=4.0.1``
   :depends on hippunfold: 
   :depends on isort: ``>=5.10.1``
   :depends on poethepoet: ``>=0.10.0``
   :depends on pylint: ``>=2.11.1``
   :depends on pytest: ``>=6.2.5``
   :depends on pytest-console-scripts: ``>=1.2.1``
   :depends on python: ``>=3.9,<4.0``
   :depends on snakefmt: ``>=0.10.0``

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

    pixi global install hippunfold-dev

to add into an existing workspace instead, run::

    pixi add hippunfold-dev

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hippunfold-dev

Alternatively, to install into a new environment, run::

    conda create -n envname hippunfold-dev

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hippunfold-dev:<tag>

(see `hippunfold-dev/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hippunfold-dev| image:: https://img.shields.io/conda/dn/bioconda/hippunfold-dev.svg?style=flat
   :target: https://anaconda.org/bioconda/hippunfold-dev
   :alt:   (downloads)
.. |docker_hippunfold-dev| image:: https://quay.io/repository/biocontainers/hippunfold-dev/status
   :target: https://quay.io/repository/biocontainers/hippunfold-dev
.. _`hippunfold-dev/tags`: https://quay.io/repository/biocontainers/hippunfold-dev?tab=tags


.. raw:: html

    <script>
        var package = "hippunfold-dev";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hippunfold-dev/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hippunfold-dev/README.html