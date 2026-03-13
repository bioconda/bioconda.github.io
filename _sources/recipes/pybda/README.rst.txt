:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybda'
.. highlight: bash

pybda
=====

.. conda:recipe:: pybda
   :replaces_section_title:
   :noindex:

   Big biological data analytics powered by Apache Spark

   :homepage: https://github.com/cbg-ethz/pybda
   :documentation: https://pybda.readthedocs.io/en/latest/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pybda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybda/meta.yaml>`_

   


.. conda:package:: pybda

   |downloads_pybda| |docker_pybda|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends on click: ``>=6.7``
   :depends on joypy: ``>=0.1.10``
   :depends on matplotlib: 
   :depends on numpy: ``>=1.15.0``
   :depends on pandas: ``>=0.23.3``
   :depends on pyspark: ``2.4.0.*``
   :depends on python: ``3.6.*``
   :depends on scipy: ``>=1.0.0``
   :depends on seaborn: 
   :depends on snakemake: ``>=5.2.2``
   :depends on sparkhpc: ``>=0.3.post4``

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

    pixi global install pybda

to add into an existing workspace instead, run::

    pixi add pybda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybda

Alternatively, to install into a new environment, run::

    conda create -n envname pybda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybda:<tag>

(see `pybda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybda| image:: https://img.shields.io/conda/dn/bioconda/pybda.svg?style=flat
   :target: https://anaconda.org/bioconda/pybda
   :alt:   (downloads)
.. |docker_pybda| image:: https://quay.io/repository/biocontainers/pybda/status
   :target: https://quay.io/repository/biocontainers/pybda
.. _`pybda/tags`: https://quay.io/repository/biocontainers/pybda?tab=tags


.. raw:: html

    <script>
        var package = "pybda";
        var versions = ["0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybda/README.html