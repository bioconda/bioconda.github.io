:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploflow'
.. highlight: bash

haploflow
=========

.. conda:recipe:: haploflow
   :replaces_section_title:
   :noindex:

   Strain\-aware viral genome assembler for short read sequence data

   :homepage: https://github.com/hzi-bifo/Haploflow
   :license: Apache-2.0 AND MIT
   :recipe: /`haploflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow/meta.yaml>`_

   Haploflow is a strain\-aware viral genome assembler for short read sequence data. 
   It uses a flow algorithm on a deBruijn graph data structure to resolve viral strains. 
   Haploflow is still actively under development and written entirely in C\+\+.



.. conda:package:: haploflow

   |downloads_haploflow| |docker_haploflow|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
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

    pixi global install haploflow

to add into an existing workspace instead, run::

    pixi add haploflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haploflow

Alternatively, to install into a new environment, run::

    conda create -n envname haploflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haploflow:<tag>

(see `haploflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haploflow| image:: https://img.shields.io/conda/dn/bioconda/haploflow.svg?style=flat
   :target: https://anaconda.org/bioconda/haploflow
   :alt:   (downloads)
.. |docker_haploflow| image:: https://quay.io/repository/biocontainers/haploflow/status
   :target: https://quay.io/repository/biocontainers/haploflow
.. _`haploflow/tags`: https://quay.io/repository/biocontainers/haploflow?tab=tags


.. raw:: html

    <script>
        var package = "haploflow";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploflow/README.html