:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liquorice'
.. highlight: bash

liquorice
=========

.. conda:recipe:: liquorice
   :replaces_section_title:
   :noindex:

   A tool for bias correction and quantification of changes in coverage around regions of interest in cfDNA WGS datasets

   :homepage: https://github.com/epigen/LIQUORICE
   :license: GPL / GPL-3.0
   :recipe: /`liquorice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liquorice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liquorice/meta.yaml>`_

   See https\:\/\/liquorice.readthedocs.io for more information.


.. conda:package:: liquorice

   |downloads_liquorice| |docker_liquorice|

   :versions:
      
      

      ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``

      

   
   :depends on biopython: ``1.79``
   :depends on deeptools: ``3.5.1``
   :depends on joblib: ``1.0.1``
   :depends on lmfit: ``1.0.2``
   :depends on matplotlib-base: ``3.1.1``
   :depends on modin: ``0.8.2``
   :depends on numpy: ``1.21.2``
   :depends on pandas: ``1.1.4``
   :depends on parallel: 
   :depends on pybedtools: ``0.8.2``
   :depends on pybigwig: ``0.3.18``
   :depends on pysam: ``0.16.0.1``
   :depends on python: ``>=3.7.9``
   :depends on scikit-learn: ``0.24.2``
   :depends on scipy: ``1.7.1``
   :depends on seaborn: ``0.11.2``
   :depends on swifter: ``1.0.9``

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

    pixi global install liquorice

to add into an existing workspace instead, run::

    pixi add liquorice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install liquorice

Alternatively, to install into a new environment, run::

    conda create -n envname liquorice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/liquorice:<tag>

(see `liquorice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_liquorice| image:: https://img.shields.io/conda/dn/bioconda/liquorice.svg?style=flat
   :target: https://anaconda.org/bioconda/liquorice
   :alt:   (downloads)
.. |docker_liquorice| image:: https://quay.io/repository/biocontainers/liquorice/status
   :target: https://quay.io/repository/biocontainers/liquorice
.. _`liquorice/tags`: https://quay.io/repository/biocontainers/liquorice?tab=tags


.. raw:: html

    <script>
        var package = "liquorice";
        var versions = ["0.5.6","0.5.5","0.5.5","0.5.4","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liquorice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liquorice/README.html