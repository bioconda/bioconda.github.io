:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gc-meox-tms'
.. highlight: bash

gc-meox-tms
===========

.. conda:recipe:: gc-meox-tms
   :replaces_section_title:
   :noindex:

   In\-silico MeOX\/TMS derivatization of chemical compounds.

   :homepage: https://github.com/RECETOX/gc-meox-tms
   :license: MIT
   :recipe: /`gc-meox-tms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gc-meox-tms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gc-meox-tms/meta.yaml>`_

   This package performs in\-silico methoximation \(MeOX\) and trimethylsilylation \(TMS\) of chemical compounds from SMILES strings or RDKit molecule objects. It also can identify whether a given compound is already derivatized by MeOX or TMS method.


.. conda:package:: gc-meox-tms

   |downloads_gc-meox-tms| |docker_gc-meox-tms|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on python: ``>=3.8``
   :depends on rdkit: 

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

    pixi global install gc-meox-tms

to add into an existing workspace instead, run::

    pixi add gc-meox-tms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gc-meox-tms

Alternatively, to install into a new environment, run::

    conda create -n envname gc-meox-tms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gc-meox-tms:<tag>

(see `gc-meox-tms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gc-meox-tms| image:: https://img.shields.io/conda/dn/bioconda/gc-meox-tms.svg?style=flat
   :target: https://anaconda.org/bioconda/gc-meox-tms
   :alt:   (downloads)
.. |docker_gc-meox-tms| image:: https://quay.io/repository/biocontainers/gc-meox-tms/status
   :target: https://quay.io/repository/biocontainers/gc-meox-tms
.. _`gc-meox-tms/tags`: https://quay.io/repository/biocontainers/gc-meox-tms?tab=tags


.. raw:: html

    <script>
        var package = "gc-meox-tms";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gc-meox-tms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gc-meox-tms/README.html