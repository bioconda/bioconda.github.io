:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sc-musketeers'
.. highlight: bash

sc-musketeers
=============

.. conda:recipe:: sc-musketeers
   :replaces_section_title:
   :noindex:

   A tri\-partite modular autoencoder for addressing imbalanced cell type annotation and batch effect reduction

   :homepage: https://sc-musketeers.readthedocs.io/
   :license: GPL-3.0
   :recipe: /`sc-musketeers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc-musketeers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc-musketeers/meta.yaml>`_

   


.. conda:package:: sc-musketeers

   |downloads_sc-musketeers| |docker_sc-musketeers|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.7-0``

      

   
   :depends on keras: ``>=3.3.3,<4.0.0``
   :depends on matplotlib-base: ``>=3.9.3,<4.0.0``
   :depends on neptune: ``>=1.10.4,<2.0.0``
   :depends on numpy: ``>=1.23.0,<2.0.0``
   :depends on pandas: ``>=2.2.3,<3.0.0``
   :depends on pillow: ``>=11.0.0,<12.0.0``
   :depends on poetry: ``>=1.8.1,<2.0.0``
   :depends on pympler: ``>=1.0.1,<2.0.0``
   :depends on python: ``>=3.10.0,<4.0.0``
   :depends on scanpy: ``>=1.10.1,<2.0.0``
   :depends on scikit-learn: ``>=1.5.2,<2.0.0``
   :depends on seaborn: ``>=0.13.2,<0.14.0``
   :depends on tensorflow: ``>=2.10.0,<3.0.0``

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

    pixi global install sc-musketeers

to add into an existing workspace instead, run::

    pixi add sc-musketeers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sc-musketeers

Alternatively, to install into a new environment, run::

    conda create -n envname sc-musketeers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sc-musketeers:<tag>

(see `sc-musketeers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sc-musketeers| image:: https://img.shields.io/conda/dn/bioconda/sc-musketeers.svg?style=flat
   :target: https://anaconda.org/bioconda/sc-musketeers
   :alt:   (downloads)
.. |docker_sc-musketeers| image:: https://quay.io/repository/biocontainers/sc-musketeers/status
   :target: https://quay.io/repository/biocontainers/sc-musketeers
.. _`sc-musketeers/tags`: https://quay.io/repository/biocontainers/sc-musketeers?tab=tags


.. raw:: html

    <script>
        var package = "sc-musketeers";
        var versions = ["0.4.2","0.4.1","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sc-musketeers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sc-musketeers/README.html