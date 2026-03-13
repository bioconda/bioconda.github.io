:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blue-crab'
.. highlight: bash

blue-crab
=========

.. conda:recipe:: blue-crab
   :replaces_section_title:
   :noindex:

   lossless nanopore pod5 \<\=\> s\/blow5 file conversion

   :homepage: https://github.com/Psy-Fer/blue-crab
   :documentation: https://github.com/Psy-Fer/blue-crab/blob/v0.4.0/docs/cli.md
   
   :license: MIT / MIT
   :recipe: /`blue-crab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blue-crab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blue-crab/meta.yaml>`_

   


.. conda:package:: blue-crab

   |downloads_blue-crab| |docker_blue-crab|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends on pod5: ``>=0.3.27``
   :depends on pyarrow: ``20``
   :depends on pyslow5: ``>=1.3.0``
   :depends on python: ``>=3.9``

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

    pixi global install blue-crab

to add into an existing workspace instead, run::

    pixi add blue-crab

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blue-crab

Alternatively, to install into a new environment, run::

    conda create -n envname blue-crab

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blue-crab:<tag>

(see `blue-crab/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blue-crab| image:: https://img.shields.io/conda/dn/bioconda/blue-crab.svg?style=flat
   :target: https://anaconda.org/bioconda/blue-crab
   :alt:   (downloads)
.. |docker_blue-crab| image:: https://quay.io/repository/biocontainers/blue-crab/status
   :target: https://quay.io/repository/biocontainers/blue-crab
.. _`blue-crab/tags`: https://quay.io/repository/biocontainers/blue-crab?tab=tags


.. raw:: html

    <script>
        var package = "blue-crab";
        var versions = ["0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blue-crab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blue-crab/README.html