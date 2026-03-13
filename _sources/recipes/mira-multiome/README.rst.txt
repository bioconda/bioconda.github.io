:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira-multiome'
.. highlight: bash

mira-multiome
=============

.. conda:recipe:: mira-multiome
   :replaces_section_title:
   :noindex:

   Single\-cell multiomics data analysis

   :homepage: https://mira-multiome.readthedocs.io/en/latest/
   :license: BSD-3-Clause-LBNL
   :recipe: /`mira-multiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome/meta.yaml>`_

   


.. conda:package:: mira-multiome

   |downloads_mira-multiome| |docker_mira-multiome|

   :versions:
      
      

      ``2.1.1-0``,  ``2.1.0-0``

      

   
   :depends on anndata: ``>=0.7.6,<1``
   :depends on lisa2: ``>=2.3.0``
   :depends on matplotlib-base: ``>=3.4,<4``
   :depends on moods: ``>=1.9.4.1``
   :depends on networkx: ``>=2.3,<3``
   :depends on optuna: ``>=2.8,<3``
   :depends on pyfaidx: ``>=0.5,<1``
   :depends on pyro-ppl: ``>=1.5.2,<2``
   :depends on python: ``>=3.7,<3.12``
   :depends on pytorch: ``>=1.8.0,<2``
   :depends on requests: ``>=2,<3``
   :depends on tensorboard: 
   :depends on tqdm: 

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

    pixi global install mira-multiome

to add into an existing workspace instead, run::

    pixi add mira-multiome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mira-multiome

Alternatively, to install into a new environment, run::

    conda create -n envname mira-multiome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mira-multiome:<tag>

(see `mira-multiome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mira-multiome| image:: https://img.shields.io/conda/dn/bioconda/mira-multiome.svg?style=flat
   :target: https://anaconda.org/bioconda/mira-multiome
   :alt:   (downloads)
.. |docker_mira-multiome| image:: https://quay.io/repository/biocontainers/mira-multiome/status
   :target: https://quay.io/repository/biocontainers/mira-multiome
.. _`mira-multiome/tags`: https://quay.io/repository/biocontainers/mira-multiome?tab=tags


.. raw:: html

    <script>
        var package = "mira-multiome";
        var versions = ["2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira-multiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira-multiome/README.html