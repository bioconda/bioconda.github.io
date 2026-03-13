:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itol-config'
.. highlight: bash

itol-config
===========

.. conda:recipe:: itol-config
   :replaces_section_title:
   :noindex:

   Package to create iTOL config files

   :homepage: https://github.com/jodyphelan/itol-config
   :documentation: https://jodyphelan.github.io/itol-config/
   
   :license: MIT / MIT
   :recipe: /`itol-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itol-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itol-config/meta.yaml>`_

   


.. conda:package:: itol-config

   |downloads_itol-config| |docker_itol-config|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on python: ``>=3.8``
   :depends on tomli: 

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

    pixi global install itol-config

to add into an existing workspace instead, run::

    pixi add itol-config

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install itol-config

Alternatively, to install into a new environment, run::

    conda create -n envname itol-config

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/itol-config:<tag>

(see `itol-config/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_itol-config| image:: https://img.shields.io/conda/dn/bioconda/itol-config.svg?style=flat
   :target: https://anaconda.org/bioconda/itol-config
   :alt:   (downloads)
.. |docker_itol-config| image:: https://quay.io/repository/biocontainers/itol-config/status
   :target: https://quay.io/repository/biocontainers/itol-config
.. _`itol-config/tags`: https://quay.io/repository/biocontainers/itol-config?tab=tags


.. raw:: html

    <script>
        var package = "itol-config";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itol-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itol-config/README.html