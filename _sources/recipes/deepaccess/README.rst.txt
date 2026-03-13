:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepaccess'
.. highlight: bash

deepaccess
==========

.. conda:recipe:: deepaccess
   :replaces_section_title:
   :noindex:

   A package for training and interpreting an ensemble of neural networks for chromatin accessibility

   :homepage: https://github.com/gifford-lab/deepaccess-package
   :documentation: https://pypi.org/project/deepaccess/
   
   :license: MIT / MIT
   :recipe: /`deepaccess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaccess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaccess/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.02.26.433073`

   


.. conda:package:: deepaccess

   |downloads_deepaccess| |docker_deepaccess|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on bedtools: ``>=2.29.2``
   :depends on keras: ``>=2.4.3``
   :depends on matplotlib-base: ``>=3.3.3``
   :depends on numpy: ``>=1.19.0``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.24.1``
   :depends on scipy: ``>=1.6.2``
   :depends on tensorflow: ``>=2.4``

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

    pixi global install deepaccess

to add into an existing workspace instead, run::

    pixi add deepaccess

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepaccess

Alternatively, to install into a new environment, run::

    conda create -n envname deepaccess

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepaccess:<tag>

(see `deepaccess/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepaccess| image:: https://img.shields.io/conda/dn/bioconda/deepaccess.svg?style=flat
   :target: https://anaconda.org/bioconda/deepaccess
   :alt:   (downloads)
.. |docker_deepaccess| image:: https://quay.io/repository/biocontainers/deepaccess/status
   :target: https://quay.io/repository/biocontainers/deepaccess
.. _`deepaccess/tags`: https://quay.io/repository/biocontainers/deepaccess?tab=tags


.. raw:: html

    <script>
        var package = "deepaccess";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepaccess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepaccess/README.html