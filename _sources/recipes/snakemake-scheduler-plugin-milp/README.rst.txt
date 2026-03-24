:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-scheduler-plugin-milp'
.. highlight: bash

snakemake-scheduler-plugin-milp
===============================

.. conda:recipe:: snakemake-scheduler-plugin-milp
   :replaces_section_title:
   :noindex:

   A Snakemake scheduler plugin using Mixed\-Integer Linear Programming \(MILP\).

   :homepage: https://github.com/snakemake/snakemake-scheduler-plugin-milp
   :license: MIT / MIT
   :recipe: /`snakemake-scheduler-plugin-milp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-milp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-scheduler-plugin-milp/meta.yaml>`_

   


.. conda:package:: snakemake-scheduler-plugin-milp

   |downloads_snakemake-scheduler-plugin-milp| |docker_snakemake-scheduler-plugin-milp|

   :versions:
      
      

      ``0.1.1-0``

      

   
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

    pixi global install snakemake-scheduler-plugin-milp

to add into an existing workspace instead, run::

    pixi add snakemake-scheduler-plugin-milp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-scheduler-plugin-milp

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-scheduler-plugin-milp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-scheduler-plugin-milp:<tag>

(see `snakemake-scheduler-plugin-milp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-scheduler-plugin-milp| image:: https://img.shields.io/conda/dn/bioconda/snakemake-scheduler-plugin-milp.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-scheduler-plugin-milp
   :alt:   (downloads)
.. |docker_snakemake-scheduler-plugin-milp| image:: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-milp/status
   :target: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-milp
.. _`snakemake-scheduler-plugin-milp/tags`: https://quay.io/repository/biocontainers/snakemake-scheduler-plugin-milp?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-scheduler-plugin-milp";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-scheduler-plugin-milp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-scheduler-plugin-milp/README.html