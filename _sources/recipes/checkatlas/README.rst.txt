:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkatlas'
.. highlight: bash

checkatlas
==========

.. conda:recipe:: checkatlas
   :replaces_section_title:
   :noindex:

   One liner tool to check the quality of your single\-cell atlases.

   :homepage: https://checkatlas.readthedocs.io/
   :developer docs: https://github.com/becavin-lab/checkatlas
   :license: BSD / BSD 3-Clause
   :recipe: /`checkatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkatlas/meta.yaml>`_

   


.. conda:package:: checkatlas

   |downloads_checkatlas| |docker_checkatlas|

   :versions:
      
      

      ``0.7.1-0``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.4.17-0``,  ``0.4.13-0``,  ``0.4.7-0``,  ``0.4.2-0``

      

   
   :depends on llvmlite: ``>=0.39.1,<0.40.0``
   :depends on numba: ``>=0.56.4,<0.57.0``
   :depends on numpy: ``>=1.23.5,<2.0.0``
   :depends on python: ``>=3.10``
   :depends on rpy2: ``3.5.10``
   :depends on scanpy: ``>=1.9.1,<2.0.0``
   :depends on scikit-learn: ``>=1.2.1,<2.0.0``
   :depends on types-pyyaml: ``>=6.0.12.6,<7.0.0.0``

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

    pixi global install checkatlas

to add into an existing workspace instead, run::

    pixi add checkatlas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install checkatlas

Alternatively, to install into a new environment, run::

    conda create -n envname checkatlas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/checkatlas:<tag>

(see `checkatlas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_checkatlas| image:: https://img.shields.io/conda/dn/bioconda/checkatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/checkatlas
   :alt:   (downloads)
.. |docker_checkatlas| image:: https://quay.io/repository/biocontainers/checkatlas/status
   :target: https://quay.io/repository/biocontainers/checkatlas
.. _`checkatlas/tags`: https://quay.io/repository/biocontainers/checkatlas?tab=tags


.. raw:: html

    <script>
        var package = "checkatlas";
        var versions = ["0.7.1","0.6.0","0.5.6","0.4.17","0.4.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkatlas/README.html