:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmassbank'
.. highlight: bash

bioconductor-msbackendmassbank
==============================

.. conda:recipe:: bioconductor-msbackendmassbank
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for MassBank record Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendMassbank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmassbank/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and export of MS\/MS library spectra from MassBank record files. Different backends are available that allow handling of data in plain MassBank text file format or allow also to interact directly with MassBank SQL databases. Objects from this package are supposed to be used with the Spectra Bioconductor package. This package thus adds MassBank support to the Spectra package.


.. conda:package:: bioconductor-msbackendmassbank

   |downloads_bioconductor-msbackendmassbank| |docker_bioconductor-msbackendmassbank|

   :versions:
      
      

      ``1.18.2-0``,  ``1.14.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dbi: 

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

    pixi global install bioconductor-msbackendmassbank

to add into an existing workspace instead, run::

    pixi add bioconductor-msbackendmassbank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msbackendmassbank

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msbackendmassbank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msbackendmassbank:<tag>

(see `bioconductor-msbackendmassbank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msbackendmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmassbank
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank
.. _`bioconductor-msbackendmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmassbank";
        var versions = ["1.18.2","1.14.0","1.10.1","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmassbank/README.html