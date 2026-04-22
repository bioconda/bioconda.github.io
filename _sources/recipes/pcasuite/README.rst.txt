:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcasuite'
.. highlight: bash

pcasuite
========

.. conda:recipe:: pcasuite
   :replaces_section_title:
   :noindex:

   PCAzip compresses a trajectory\, recentering the snapshots using a standard RMS or a gaussian version.

   :homepage: https://github.com/mmb-irb/pcasuite
   :license: APACHE / Apache Software License
   :recipe: /`pcasuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite/meta.yaml>`_

   PCAunzip recreates the original trajectory from the projection data. PCZdump analyzes the compressed trajectory and gives coefficients and values computed from the stored trajectory.


.. conda:package:: pcasuite

   |downloads_pcasuite| |docker_pcasuite|

   :versions:
      
      

      ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bison: 
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libnetcdf: ``>=4.9.2,<4.9.3.0a0``
   :depends on libstdcxx: ``>=13``

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

    pixi global install pcasuite

to add into an existing workspace instead, run::

    pixi add pcasuite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pcasuite

Alternatively, to install into a new environment, run::

    conda create -n envname pcasuite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pcasuite:<tag>

(see `pcasuite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pcasuite| image:: https://img.shields.io/conda/dn/bioconda/pcasuite.svg?style=flat
   :target: https://anaconda.org/bioconda/pcasuite
   :alt:   (downloads)
.. |docker_pcasuite| image:: https://quay.io/repository/biocontainers/pcasuite/status
   :target: https://quay.io/repository/biocontainers/pcasuite
.. _`pcasuite/tags`: https://quay.io/repository/biocontainers/pcasuite?tab=tags


.. raw:: html

    <script>
        var package = "pcasuite";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcasuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcasuite/README.html