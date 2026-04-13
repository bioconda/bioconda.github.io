:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncrf'
.. highlight: bash

ncrf
====

.. conda:recipe:: ncrf
   :replaces_section_title:
   :noindex:

   Noise\-Cancelling Repeat Finder\, Uncovering tandem repeats in error\-prone long\-read sequencing data.

   :homepage: https://github.com/makovalab-psu/NoiseCancellingRepeatFinder
   :license: MIT
   :recipe: /`ncrf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf/meta.yaml>`_

   


.. conda:package:: ncrf

   |downloads_ncrf| |docker_ncrf|

   :versions:
      
      

      ``1.01.02-6``,  ``1.01.02-5``,  ``1.01.02-4``,  ``1.01.02-3``,  ``1.01.02-2``,  ``1.01.02-1``,  ``1.01.02-0``,  ``1.00.06-0``,  ``1.0.4-0``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install ncrf

to add into an existing workspace instead, run::

    pixi add ncrf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncrf

Alternatively, to install into a new environment, run::

    conda create -n envname ncrf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncrf:<tag>

(see `ncrf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncrf| image:: https://img.shields.io/conda/dn/bioconda/ncrf.svg?style=flat
   :target: https://anaconda.org/bioconda/ncrf
   :alt:   (downloads)
.. |docker_ncrf| image:: https://quay.io/repository/biocontainers/ncrf/status
   :target: https://quay.io/repository/biocontainers/ncrf
.. _`ncrf/tags`: https://quay.io/repository/biocontainers/ncrf?tab=tags


.. raw:: html

    <script>
        var package = "ncrf";
        var versions = ["1.01.02","1.01.02","1.01.02","1.01.02","1.01.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncrf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncrf/README.html