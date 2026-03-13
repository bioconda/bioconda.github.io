:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autogenes'
.. highlight: bash

autogenes
=========

.. conda:recipe:: autogenes
   :replaces_section_title:
   :noindex:

   Automatic Gene Selection for Bulk Deconvolution.

   :homepage: https://github.com/theislab/AutoGeneS
   :license: MIT
   :recipe: /`autogenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogenes/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2021.05.006`

   


.. conda:package:: autogenes

   |downloads_autogenes| |docker_autogenes|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on anndata: ``>=0.6.22.post1``
   :depends on cachetools: ``>=3.1.1``
   :depends on deap: ``>=1.3.0``
   :depends on dill: ``>=0.3.1.1``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.17.2``
   :depends on pandas: ``>=0.25.1``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.21.3``
   :depends on scipy: ``>=1.3``

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

    pixi global install autogenes

to add into an existing workspace instead, run::

    pixi add autogenes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install autogenes

Alternatively, to install into a new environment, run::

    conda create -n envname autogenes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/autogenes:<tag>

(see `autogenes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_autogenes| image:: https://img.shields.io/conda/dn/bioconda/autogenes.svg?style=flat
   :target: https://anaconda.org/bioconda/autogenes
   :alt:   (downloads)
.. |docker_autogenes| image:: https://quay.io/repository/biocontainers/autogenes/status
   :target: https://quay.io/repository/biocontainers/autogenes
.. _`autogenes/tags`: https://quay.io/repository/biocontainers/autogenes?tab=tags


.. raw:: html

    <script>
        var package = "autogenes";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autogenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autogenes/README.html