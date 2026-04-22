:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piscem-infer'
.. highlight: bash

piscem-infer
============

.. conda:recipe:: piscem-infer
   :replaces_section_title:
   :noindex:

   piscem\-infer is a flexible tool to perform target quantification from bulk\-sequencing data

   :homepage: https://github.com/COMBINE-lab/piscem-infer
   :license: BSD-3-Clause
   :recipe: /`piscem-infer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem-infer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem-infer/meta.yaml>`_

   


.. conda:package:: piscem-infer

   |downloads_piscem-infer| |docker_piscem-infer|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install piscem-infer

to add into an existing workspace instead, run::

    pixi add piscem-infer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install piscem-infer

Alternatively, to install into a new environment, run::

    conda create -n envname piscem-infer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/piscem-infer:<tag>

(see `piscem-infer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_piscem-infer| image:: https://img.shields.io/conda/dn/bioconda/piscem-infer.svg?style=flat
   :target: https://anaconda.org/bioconda/piscem-infer
   :alt:   (downloads)
.. |docker_piscem-infer| image:: https://quay.io/repository/biocontainers/piscem-infer/status
   :target: https://quay.io/repository/biocontainers/piscem-infer
.. _`piscem-infer/tags`: https://quay.io/repository/biocontainers/piscem-infer?tab=tags


.. raw:: html

    <script>
        var package = "piscem-infer";
        var versions = ["0.7.0","0.6.0","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piscem-infer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piscem-infer/README.html