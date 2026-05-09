:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ale-core'
.. highlight: bash

ale-core
========

.. conda:recipe:: ale-core
   :replaces_section_title:
   :noindex:

   ALE\: Assembly Likelihood Estimator. Core C implemented  scoring programs only without supplementary plotting scripts.

   :homepage: https://github.com/sc932/ALE
   :license: NCSA
   :recipe: /`ale-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale-core/meta.yaml>`_

   This package is designed to hold the core scoring functionality of ALE without the 10\+ year old supplementary python plotting scripts 


.. conda:package:: ale-core

   |downloads_ale-core| |docker_ale-core|

   :versions:
      
      

      ``20220503-1``,  ``20220503-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: ``>=1.21,<2.0a0``
   :depends on zlib: 

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

    pixi global install ale-core

to add into an existing workspace instead, run::

    pixi add ale-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ale-core

Alternatively, to install into a new environment, run::

    conda create -n envname ale-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ale-core:<tag>

(see `ale-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ale-core| image:: https://img.shields.io/conda/dn/bioconda/ale-core.svg?style=flat
   :target: https://anaconda.org/bioconda/ale-core
   :alt:   (downloads)
.. |docker_ale-core| image:: https://quay.io/repository/biocontainers/ale-core/status
   :target: https://quay.io/repository/biocontainers/ale-core
.. _`ale-core/tags`: https://quay.io/repository/biocontainers/ale-core?tab=tags


.. raw:: html

    <script>
        var package = "ale-core";
        var versions = ["20220503","20220503"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ale-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ale-core/README.html