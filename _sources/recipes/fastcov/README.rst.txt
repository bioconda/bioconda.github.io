:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastcov'
.. highlight: bash

fastcov
=======

.. conda:recipe:: fastcov
   :replaces_section_title:
   :noindex:

   This package installs fastcov and all it\'s dependencies. fastcov is used to plot coverage plots based on BAM files.

   :homepage: https://github.com/RaverJay/fastcov
   :license: MIT
   :recipe: /`fastcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastcov/meta.yaml>`_

   


.. conda:package:: fastcov

   |downloads_fastcov| |docker_fastcov|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends on matplotlib-base: ``>3.8.3*``
   :depends on pandas: ``>2.2.1*``
   :depends on pysam: ``>0.22.0*``
   :depends on python: 
   :depends on seaborn: ``>0.13.2*``

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

    pixi global install fastcov

to add into an existing workspace instead, run::

    pixi add fastcov

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastcov

Alternatively, to install into a new environment, run::

    conda create -n envname fastcov

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastcov:<tag>

(see `fastcov/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastcov| image:: https://img.shields.io/conda/dn/bioconda/fastcov.svg?style=flat
   :target: https://anaconda.org/bioconda/fastcov
   :alt:   (downloads)
.. |docker_fastcov| image:: https://quay.io/repository/biocontainers/fastcov/status
   :target: https://quay.io/repository/biocontainers/fastcov
.. _`fastcov/tags`: https://quay.io/repository/biocontainers/fastcov?tab=tags


.. raw:: html

    <script>
        var package = "fastcov";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastcov/README.html