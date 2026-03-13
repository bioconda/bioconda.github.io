:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmased'
.. highlight: bash

deepmased
=========

.. conda:recipe:: deepmased
   :replaces_section_title:
   :noindex:

   Deep learning for Metagenome Assembly Error Detection

   :homepage: https://github.com/leylabmpi/DeepMAsED
   :license: MIT / MIT
   :recipe: /`deepmased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmased/meta.yaml>`_

   Deep learning for Metagenome Assembly Error Detection
    See README for more information.


.. conda:package:: deepmased

   |downloads_deepmased| |docker_deepmased|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on ipython: 
   :depends on keras: 
   :depends on numpy: ``>=1.17.0``
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.3.1``
   :depends on snakemake: 
   :depends on tensorboard: 
   :depends on tensorflow: ``>=2.0``

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

    pixi global install deepmased

to add into an existing workspace instead, run::

    pixi add deepmased

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepmased

Alternatively, to install into a new environment, run::

    conda create -n envname deepmased

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepmased:<tag>

(see `deepmased/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepmased| image:: https://img.shields.io/conda/dn/bioconda/deepmased.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmased
   :alt:   (downloads)
.. |docker_deepmased| image:: https://quay.io/repository/biocontainers/deepmased/status
   :target: https://quay.io/repository/biocontainers/deepmased
.. _`deepmased/tags`: https://quay.io/repository/biocontainers/deepmased?tab=tags


.. raw:: html

    <script>
        var package = "deepmased";
        var versions = ["0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmased/README.html