:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepblast'
.. highlight: bash

deepblast
=========

.. conda:recipe:: deepblast
   :replaces_section_title:
   :noindex:

   Neural Networks for Protein Sequence Alignment.

   :homepage: https://github.com/flatironinstitute/deepblast
   :license: BSD / BSD-3-Clause
   :recipe: /`deepblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepblast/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.11.03.365932`

   


.. conda:package:: deepblast

   |downloads_deepblast| |docker_deepblast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on biopython: ``>=1.78,<2.0``
   :depends on faiss: 
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on python: 
   :depends on pytorch: ``>=1.4``
   :depends on pytorch-lightning: ``>=0.8.1``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on sentencepiece: 
   :depends on tensorboard: 
   :depends on transformers: 

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

    pixi global install deepblast

to add into an existing workspace instead, run::

    pixi add deepblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepblast

Alternatively, to install into a new environment, run::

    conda create -n envname deepblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepblast:<tag>

(see `deepblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepblast| image:: https://img.shields.io/conda/dn/bioconda/deepblast.svg?style=flat
   :target: https://anaconda.org/bioconda/deepblast
   :alt:   (downloads)
.. |docker_deepblast| image:: https://quay.io/repository/biocontainers/deepblast/status
   :target: https://quay.io/repository/biocontainers/deepblast
.. _`deepblast/tags`: https://quay.io/repository/biocontainers/deepblast?tab=tags


.. raw:: html

    <script>
        var package = "deepblast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepblast/README.html