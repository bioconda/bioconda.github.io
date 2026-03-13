:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a3partitioner'
.. highlight: bash

a3partitioner
=============

.. conda:recipe:: a3partitioner
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for creating APOBEC3 and non\-APOBEC3 partitions

   :homepage: https://github.com/DaanJansen94/a3partitioner
   :documentation: https://github.com/DaanJansen94/a3partitioner/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`a3partitioner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a3partitioner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a3partitioner/meta.yaml>`_

   


.. conda:package:: a3partitioner

   |downloads_a3partitioner| |docker_a3partitioner|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on python: ``>=3.6,<4.0``

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

    pixi global install a3partitioner

to add into an existing workspace instead, run::

    pixi add a3partitioner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install a3partitioner

Alternatively, to install into a new environment, run::

    conda create -n envname a3partitioner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/a3partitioner:<tag>

(see `a3partitioner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_a3partitioner| image:: https://img.shields.io/conda/dn/bioconda/a3partitioner.svg?style=flat
   :target: https://anaconda.org/bioconda/a3partitioner
   :alt:   (downloads)
.. |docker_a3partitioner| image:: https://quay.io/repository/biocontainers/a3partitioner/status
   :target: https://quay.io/repository/biocontainers/a3partitioner
.. _`a3partitioner/tags`: https://quay.io/repository/biocontainers/a3partitioner?tab=tags


.. raw:: html

    <script>
        var package = "a3partitioner";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a3partitioner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a3partitioner/README.html