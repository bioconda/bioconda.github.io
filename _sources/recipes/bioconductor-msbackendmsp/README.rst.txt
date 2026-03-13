:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmsp'
.. highlight: bash

bioconductor-msbackendmsp
=========================

.. conda:recipe:: bioconductor-msbackendmsp
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for NIST msp Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendMsp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmsp/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and handling of MS\/MS spectra from NIST MSP Format \(msp\) files. Import of data from files with different MSP \*flavours\* is supported. Objects from this package add support for MSP files to Bioconductor\'s Spectra package. This package is thus not supposed to be used without the Spectra package that provides a complete infrastructure for MS data handling.


.. conda:package:: bioconductor-msbackendmsp

   |downloads_bioconductor-msbackendmsp| |docker_bioconductor-msbackendmsp|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-msbackendmsp

to add into an existing workspace instead, run::

    pixi add bioconductor-msbackendmsp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msbackendmsp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msbackendmsp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msbackendmsp:<tag>

(see `bioconductor-msbackendmsp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msbackendmsp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmsp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmsp
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmsp| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp
.. _`bioconductor-msbackendmsp/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmsp";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmsp/README.html