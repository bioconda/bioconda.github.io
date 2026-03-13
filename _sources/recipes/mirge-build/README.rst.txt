:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge-build'
.. highlight: bash

mirge-build
===========

.. conda:recipe:: mirge-build
   :replaces_section_title:
   :noindex:

   miRge\-build\: Building libraries of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3_build
   :documentation: https://mirge-build.readthedocs.io/
   
   :developer docs: https://github.com/mhalushka/miRge3_build/
   :license: MIT / MIT
   :recipe: /`mirge-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build/meta.yaml>`_

   


.. conda:package:: mirge-build

   |downloads_mirge-build| |docker_mirge-build|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on biopython: ``1.77``
   :depends on bowtie: ``1.2.3``
   :depends on python: 
   :depends on scikit-learn: ``0.23.1``
   :depends on scipy: ``1.4.1``

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

    pixi global install mirge-build

to add into an existing workspace instead, run::

    pixi add mirge-build

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirge-build

Alternatively, to install into a new environment, run::

    conda create -n envname mirge-build

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirge-build:<tag>

(see `mirge-build/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirge-build| image:: https://img.shields.io/conda/dn/bioconda/mirge-build.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge-build
   :alt:   (downloads)
.. |docker_mirge-build| image:: https://quay.io/repository/biocontainers/mirge-build/status
   :target: https://quay.io/repository/biocontainers/mirge-build
.. _`mirge-build/tags`: https://quay.io/repository/biocontainers/mirge-build?tab=tags


.. raw:: html

    <script>
        var package = "mirge-build";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge-build/README.html