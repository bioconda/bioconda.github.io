:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectripy'
.. highlight: bash

bioconductor-spectripy
======================

.. conda:recipe:: bioconductor-spectripy
   :replaces_section_title:
   :noindex:

   Enhancing Cross\-Language Mass Spectrometry Data Analysis with R and Python

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SpectriPy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spectripy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectripy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectripy/meta.yaml>`_

   The SpectriPy package allows integration of Python\-based MS analysis code with the Spectra package. Spectra objects can be converted into Python MS data structures. In addition\, SpectriPy integrates and wraps the similarity scoring and processing\/filtering functions from the Python matchms package into R.


.. conda:package:: bioconductor-spectripy

   |downloads_bioconductor-spectripy| |docker_bioconductor-spectripy|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-spectripy

to add into an existing workspace instead, run::

    pixi add bioconductor-spectripy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spectripy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spectripy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spectripy:<tag>

(see `bioconductor-spectripy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spectripy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectripy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectripy
   :alt:   (downloads)
.. |docker_bioconductor-spectripy| image:: https://quay.io/repository/biocontainers/bioconductor-spectripy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectripy
.. _`bioconductor-spectripy/tags`: https://quay.io/repository/biocontainers/bioconductor-spectripy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectripy";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectripy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectripy/README.html