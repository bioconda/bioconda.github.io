:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corneto'
.. highlight: bash

corneto
=======

.. conda:recipe:: corneto
   :replaces_section_title:
   :noindex:

   CORNETO\: A Unified Framework for Omics\-Driven Network Inference.

   :homepage: https://github.com/saezlab/corneto
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`corneto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corneto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corneto/meta.yaml>`_

   


.. conda:package:: corneto

   |downloads_corneto| |docker_corneto|

   :versions:
      
      

      ``1.0.0b3-0``,  ``1.0.0b2-0``,  ``1.0.0b0-0``,  ``1.0.0a0-0``

      

   
   :depends on cvxpy-base: ``>=1.6.5``
   :depends on ipython: 
   :depends on numpy: ``>=1.25``
   :depends on python: ``>=3.10``
   :depends on scipy: ``>=1.15.2``

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

    pixi global install corneto

to add into an existing workspace instead, run::

    pixi add corneto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install corneto

Alternatively, to install into a new environment, run::

    conda create -n envname corneto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/corneto:<tag>

(see `corneto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_corneto| image:: https://img.shields.io/conda/dn/bioconda/corneto.svg?style=flat
   :target: https://anaconda.org/bioconda/corneto
   :alt:   (downloads)
.. |docker_corneto| image:: https://quay.io/repository/biocontainers/corneto/status
   :target: https://quay.io/repository/biocontainers/corneto
.. _`corneto/tags`: https://quay.io/repository/biocontainers/corneto?tab=tags


.. raw:: html

    <script>
        var package = "corneto";
        var versions = ["1.0.0b3","1.0.0b2","1.0.0b0","1.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corneto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corneto/README.html