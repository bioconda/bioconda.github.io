:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ifeature'
.. highlight: bash

ifeature
========

.. conda:recipe:: ifeature
   :replaces_section_title:
   :noindex:

   A python package for feature extraction and selection from protein and peptide sequences

   :homepage: https://github.com/Jie-Yuan/iFeature
   :license: MIT / MIT
   :recipe: /`ifeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature/meta.yaml>`_

   


.. conda:package:: ifeature

   |downloads_ifeature| |docker_ifeature|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends on jieba: 
   :depends on lightgbm: ``3.0.0``
   :depends on numpy: ``>=1.10.4``
   :depends on pandas: ``>=0.18.1``
   :depends on python: 
   :depends on six: ``1.15.0``
   :depends on tqdm: ``4.49.0``
   :depends on wrapt: ``1.12.1``

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

    pixi global install ifeature

to add into an existing workspace instead, run::

    pixi add ifeature

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ifeature

Alternatively, to install into a new environment, run::

    conda create -n envname ifeature

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ifeature:<tag>

(see `ifeature/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ifeature| image:: https://img.shields.io/conda/dn/bioconda/ifeature.svg?style=flat
   :target: https://anaconda.org/bioconda/ifeature
   :alt:   (downloads)
.. |docker_ifeature| image:: https://quay.io/repository/biocontainers/ifeature/status
   :target: https://quay.io/repository/biocontainers/ifeature
.. _`ifeature/tags`: https://quay.io/repository/biocontainers/ifeature?tab=tags


.. raw:: html

    <script>
        var package = "ifeature";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ifeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ifeature/README.html