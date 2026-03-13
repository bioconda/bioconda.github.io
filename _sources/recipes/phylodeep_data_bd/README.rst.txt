:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodeep_data_bd'
.. highlight: bash

phylodeep_data_bd
=================

.. conda:recipe:: phylodeep_data_bd
   :replaces_section_title:
   :noindex:

   Package containing data for the phylodeep package.

   :homepage: https://github.com/evolbioinfo/phylodeep_data_bd
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phylodeep_data_bd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep_data_bd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep_data_bd/meta.yaml>`_

   


.. conda:package:: phylodeep_data_bd

   |downloads_phylodeep_data_bd| |docker_phylodeep_data_bd|

   :versions:
      
      

      ``0.6-0``

      

   
   :depends on pandas: ``>=1.0.0``
   :depends on python: ``>=3``

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

    pixi global install phylodeep_data_bd

to add into an existing workspace instead, run::

    pixi add phylodeep_data_bd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylodeep_data_bd

Alternatively, to install into a new environment, run::

    conda create -n envname phylodeep_data_bd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylodeep_data_bd:<tag>

(see `phylodeep_data_bd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylodeep_data_bd| image:: https://img.shields.io/conda/dn/bioconda/phylodeep_data_bd.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodeep_data_bd
   :alt:   (downloads)
.. |docker_phylodeep_data_bd| image:: https://quay.io/repository/biocontainers/phylodeep_data_bd/status
   :target: https://quay.io/repository/biocontainers/phylodeep_data_bd
.. _`phylodeep_data_bd/tags`: https://quay.io/repository/biocontainers/phylodeep_data_bd?tab=tags


.. raw:: html

    <script>
        var package = "phylodeep_data_bd";
        var versions = ["0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodeep_data_bd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodeep_data_bd/README.html