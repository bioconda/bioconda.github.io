:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybamtools'
.. highlight: bash

pybamtools
==========

.. conda:recipe:: pybamtools
   :replaces_section_title:
   :noindex:

   Tools for working on BAM data

   :homepage: https://github.com/blankenberg/pyBamTools
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`pybamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools/meta.yaml>`_

   


.. conda:package:: pybamtools

   |downloads_pybamtools| |docker_pybamtools|

   :versions:
      
      

      ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends on numpy: 
   :depends on pybamparser: ``0.0.3``
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

    pixi global install pybamtools

to add into an existing workspace instead, run::

    pixi add pybamtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybamtools

Alternatively, to install into a new environment, run::

    conda create -n envname pybamtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybamtools:<tag>

(see `pybamtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybamtools| image:: https://img.shields.io/conda/dn/bioconda/pybamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybamtools
   :alt:   (downloads)
.. |docker_pybamtools| image:: https://quay.io/repository/biocontainers/pybamtools/status
   :target: https://quay.io/repository/biocontainers/pybamtools
.. _`pybamtools/tags`: https://quay.io/repository/biocontainers/pybamtools?tab=tags


.. raw:: html

    <script>
        var package = "pybamtools";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybamtools/README.html