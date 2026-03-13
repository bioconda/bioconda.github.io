:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'data_hacks'
.. highlight: bash

data_hacks
==========

.. conda:recipe:: data_hacks
   :replaces_section_title:
   :noindex:

   Command line utilities for data analysis.

   :homepage: https://github.com/bitly/data_hacks
   :license: Apache 2.0
   :recipe: /`data_hacks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/data_hacks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/data_hacks/meta.yaml>`_

   


.. conda:package:: data_hacks

   |downloads_data_hacks| |docker_data_hacks|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends on python: ``<3``

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

    pixi global install data_hacks

to add into an existing workspace instead, run::

    pixi add data_hacks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install data_hacks

Alternatively, to install into a new environment, run::

    conda create -n envname data_hacks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/data_hacks:<tag>

(see `data_hacks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_data_hacks| image:: https://img.shields.io/conda/dn/bioconda/data_hacks.svg?style=flat
   :target: https://anaconda.org/bioconda/data_hacks
   :alt:   (downloads)
.. |docker_data_hacks| image:: https://quay.io/repository/biocontainers/data_hacks/status
   :target: https://quay.io/repository/biocontainers/data_hacks
.. _`data_hacks/tags`: https://quay.io/repository/biocontainers/data_hacks?tab=tags


.. raw:: html

    <script>
        var package = "data_hacks";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/data_hacks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/data_hacks/README.html