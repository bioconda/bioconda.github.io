:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge-dups-runner'
.. highlight: bash

purge-dups-runner
=================

.. conda:recipe:: purge-dups-runner
   :replaces_section_title:
   :noindex:

   High Performance Cluster \(HPC\) runner.

   :homepage: https://github.com/dfguan/runner
   :license: MIT / MIT
   :recipe: /`purge-dups-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner/meta.yaml>`_

   


.. conda:package:: purge-dups-runner

   |downloads_purge-dups-runner| |docker_purge-dups-runner|

   :versions:
      
      

      ``2019.12.20-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install purge-dups-runner

to add into an existing workspace instead, run::

    pixi add purge-dups-runner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install purge-dups-runner

Alternatively, to install into a new environment, run::

    conda create -n envname purge-dups-runner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/purge-dups-runner:<tag>

(see `purge-dups-runner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_purge-dups-runner| image:: https://img.shields.io/conda/dn/bioconda/purge-dups-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/purge-dups-runner
   :alt:   (downloads)
.. |docker_purge-dups-runner| image:: https://quay.io/repository/biocontainers/purge-dups-runner/status
   :target: https://quay.io/repository/biocontainers/purge-dups-runner
.. _`purge-dups-runner/tags`: https://quay.io/repository/biocontainers/purge-dups-runner?tab=tags


.. raw:: html

    <script>
        var package = "purge-dups-runner";
        var versions = ["2019.12.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge-dups-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge-dups-runner/README.html