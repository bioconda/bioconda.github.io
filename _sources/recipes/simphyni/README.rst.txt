:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simphyni'
.. highlight: bash

simphyni
========

.. conda:recipe:: simphyni
   :replaces_section_title:
   :noindex:

   SimPhyni\: a tool for phylogenetic trait simulation and inference.

   :homepage: https://github.com/jpeyemi/SimPhyNI
   :license: MIT
   :recipe: /`simphyni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simphyni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simphyni/meta.yaml>`_

   


.. conda:package:: simphyni

   |downloads_simphyni| |docker_simphyni|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on annotated-types: ``>=0.7.0``
   :depends on biopython: ``>=1.85``
   :depends on certifi: ``>=2025.1.31``
   :depends on charset-normalizer: ``>=3.4.1``
   :depends on ete3: ``>=3.1.3``
   :depends on idna: ``>=3.10``
   :depends on itolapi: ``>=4.1.5``
   :depends on jinja2: ``>=3.1.6``
   :depends on joblib: ``>=1.4.2``
   :depends on markupsafe: ``>=3.0.2``
   :depends on matplotlib-base: ``>=3.10.1``
   :depends on numba: ``>=0.62.0``
   :depends on numpy: ``>=2.2.3``
   :depends on pandas: ``>=2.2.3``
   :depends on pastml: ``>=1.9.50``
   :depends on pydantic: ``>=2.10.6``
   :depends on pydantic-core: ``>=2.27.2``
   :depends on python: ``>=3.11,<3.13``
   :depends on requests: ``>=2.32.3``
   :depends on scikit-learn: ``>=1.6.1``
   :depends on scipy: ``1.14.0.*``
   :depends on seaborn: ``>=0.13.0,<0.14``
   :depends on snakemake: ``>=9.10``
   :depends on statsmodels: ``>=0.14.4``
   :depends on urllib3: ``>=2.4.0``

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

    pixi global install simphyni

to add into an existing workspace instead, run::

    pixi add simphyni

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install simphyni

Alternatively, to install into a new environment, run::

    conda create -n envname simphyni

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/simphyni:<tag>

(see `simphyni/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_simphyni| image:: https://img.shields.io/conda/dn/bioconda/simphyni.svg?style=flat
   :target: https://anaconda.org/bioconda/simphyni
   :alt:   (downloads)
.. |docker_simphyni| image:: https://quay.io/repository/biocontainers/simphyni/status
   :target: https://quay.io/repository/biocontainers/simphyni
.. _`simphyni/tags`: https://quay.io/repository/biocontainers/simphyni?tab=tags


.. raw:: html

    <script>
        var package = "simphyni";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simphyni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simphyni/README.html