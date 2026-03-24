:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-scheduler-plugin-greedy'
.. highlight: bash

snakemake-scheduler-plugin-greedy
=================================

.. conda:recipe:: snakemake-scheduler-plugin-greedy
   :replaces_section_title:
   :noindex:

   A greedy Snakemake scheduler plugin.

   :homepage: https://github.com/snakemake/snakemake-scheduler-plugin-greedy
   :license: MIT / MIT
   :recipe: /`snakemake-scheduler-plugin-greedy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-greedy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-greedy/meta.yaml>`_

   


.. conda:package:: snakemake-scheduler-plugin-greedy

   |downloads_snakemake-scheduler-plugin-greedy| |docker_snakemake-scheduler-plugin-greedy|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends on python: 
   :depends on snakemake-interface-common: ``>=1.23.0,<2.0.0``
   :depends on snakemake-interface-scheduler-plugins: ``>=2.0.2,<3.0.0``

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

    pixi global install snakemake-scheduler-plugin-greedy

to add into an existing workspace instead, run::

    pixi add snakemake-scheduler-plugin-greedy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-scheduler-plugin-greedy

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-scheduler-plugin-greedy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-scheduler-plugin-greedy:<tag>

(see `snakemake-scheduler-plugin-greedy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-scheduler-plugin-greedy| image:: https://img.shields.io/conda/dn/bioconda/snakemake-scheduler-plugin-greedy.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-scheduler-plugin-greedy
   :alt:   (downloads)
.. |docker_snakemake-scheduler-plugin-greedy| image:: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-greedy/status
   :target: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-greedy
.. _`snakemake-scheduler-plugin-greedy/tags`: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-greedy?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-scheduler-plugin-greedy";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-scheduler-plugin-greedy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-scheduler-plugin-greedy/README.html