:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'robust-bias-aware'
.. highlight: bash

robust-bias-aware
=================

.. conda:recipe:: robust-bias-aware
   :replaces_section_title:
   :noindex:

   Robust bias aware.

   :homepage: https://github.com/bionetslab/robust_bias_aware_pip_package
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`robust-bias-aware <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/robust-bias-aware>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/robust-bias-aware/meta.yaml>`_

   


.. conda:package:: robust-bias-aware

   |downloads_robust-bias-aware| |docker_robust-bias-aware|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on matplotlib-base: ``>=3.2.2``
   :depends on networkx: ``>=2.6.3``
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=1.3.5``
   :depends on pcst-fast: 
   :depends on python: ``>=3.7``

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

    pixi global install robust-bias-aware

to add into an existing workspace instead, run::

    pixi add robust-bias-aware

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install robust-bias-aware

Alternatively, to install into a new environment, run::

    conda create -n envname robust-bias-aware

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/robust-bias-aware:<tag>

(see `robust-bias-aware/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_robust-bias-aware| image:: https://img.shields.io/conda/dn/bioconda/robust-bias-aware.svg?style=flat
   :target: https://anaconda.org/bioconda/robust-bias-aware
   :alt:   (downloads)
.. |docker_robust-bias-aware| image:: https://quay.io/repository/biocontainers/robust-bias-aware/status
   :target: https://quay.io/repository/biocontainers/robust-bias-aware
.. _`robust-bias-aware/tags`: https://quay.io/repository/biocontainers/robust-bias-aware?tab=tags


.. raw:: html

    <script>
        var package = "robust-bias-aware";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/robust-bias-aware/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/robust-bias-aware/README.html