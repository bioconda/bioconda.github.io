:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gargammel-slim'
.. highlight: bash

gargammel-slim
==============

.. conda:recipe:: gargammel-slim
   :replaces_section_title:
   :noindex:

   Tool for simulating ancient DNA datasets

   :homepage: https://github.com/grenaud/gargammel
   :license: GPL-3.0-only
   :recipe: /`gargammel-slim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim/meta.yaml>`_

   This a stripped version of Gargammel that only builds the programs 
   fragSim\, deamSim and adptSim. For a full Gargammel installation
   look at the gargammel package



.. conda:package:: gargammel-slim

   |downloads_gargammel-slim| |docker_gargammel-slim|

   :versions:
      
      

      ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends on bamtools: ``>=2.5.2,<2.6.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install gargammel-slim

to add into an existing workspace instead, run::

    pixi add gargammel-slim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gargammel-slim

Alternatively, to install into a new environment, run::

    conda create -n envname gargammel-slim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gargammel-slim:<tag>

(see `gargammel-slim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gargammel-slim| image:: https://img.shields.io/conda/dn/bioconda/gargammel-slim.svg?style=flat
   :target: https://anaconda.org/bioconda/gargammel-slim
   :alt:   (downloads)
.. |docker_gargammel-slim| image:: https://quay.io/repository/biocontainers/gargammel-slim/status
   :target: https://quay.io/repository/biocontainers/gargammel-slim
.. _`gargammel-slim/tags`: https://quay.io/repository/biocontainers/gargammel-slim?tab=tags


.. raw:: html

    <script>
        var package = "gargammel-slim";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gargammel-slim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gargammel-slim/README.html