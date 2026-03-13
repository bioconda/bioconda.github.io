:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psap'
.. highlight: bash

psap
====

.. conda:recipe:: psap
   :replaces_section_title:
   :noindex:

   CLI interface for the PSAP classifier. PSAP implements a RandomForest approach to predict the probability of proteins to mediate protein phase separation \(PPS\).

   :homepage: https://github.com/vanheeringen-lab/psap
   :license: MIT
   :recipe: /`psap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psap/meta.yaml>`_

   


.. conda:package:: psap

   |downloads_psap| |docker_psap|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends on biopython: ``>=1.73``
   :depends on black: ``>=20.8b1``
   :depends on loguru: ``>=0.5.3``
   :depends on matplotlib-base: ``>=3.3.4``
   :depends on pandas: ``>=1.0.1``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``>=0.21.3``
   :depends on scipy: ``>=1.2.0``
   :depends on seaborn: ``>=0.11.1``
   :depends on sklearn-json: ``>=0.1.0``
   :depends on tqdm: ``>=4.38.0``
   :depends on versioneer: ``>=0.19``

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

    pixi global install psap

to add into an existing workspace instead, run::

    pixi add psap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psap

Alternatively, to install into a new environment, run::

    conda create -n envname psap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psap:<tag>

(see `psap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psap| image:: https://img.shields.io/conda/dn/bioconda/psap.svg?style=flat
   :target: https://anaconda.org/bioconda/psap
   :alt:   (downloads)
.. |docker_psap| image:: https://quay.io/repository/biocontainers/psap/status
   :target: https://quay.io/repository/biocontainers/psap
.. _`psap/tags`: https://quay.io/repository/biocontainers/psap?tab=tags


.. raw:: html

    <script>
        var package = "psap";
        var versions = ["1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psap/README.html