:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'niemagraphgen'
.. highlight: bash

niemagraphgen
=============

.. conda:recipe:: niemagraphgen
   :replaces_section_title:
   :noindex:

   Niema\'s C\+\+ implementations of graph generators

   :homepage: https://github.com/niemasd/NiemaGraphGen
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`niemagraphgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemagraphgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemagraphgen/meta.yaml>`_
   :links: biotools: :biotools:`niemagraphgen`, doi: :doi:`10.46471/gigabyte.37`

   


.. conda:package:: niemagraphgen

   |downloads_niemagraphgen| |docker_niemagraphgen|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install niemagraphgen

to add into an existing workspace instead, run::

    pixi add niemagraphgen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install niemagraphgen

Alternatively, to install into a new environment, run::

    conda create -n envname niemagraphgen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/niemagraphgen:<tag>

(see `niemagraphgen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_niemagraphgen| image:: https://img.shields.io/conda/dn/bioconda/niemagraphgen.svg?style=flat
   :target: https://anaconda.org/bioconda/niemagraphgen
   :alt:   (downloads)
.. |docker_niemagraphgen| image:: https://quay.io/repository/biocontainers/niemagraphgen/status
   :target: https://quay.io/repository/biocontainers/niemagraphgen
.. _`niemagraphgen/tags`: https://quay.io/repository/biocontainers/niemagraphgen?tab=tags


.. raw:: html

    <script>
        var package = "niemagraphgen";
        var versions = ["1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/niemagraphgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/niemagraphgen/README.html