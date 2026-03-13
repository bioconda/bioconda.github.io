:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'validate-fasta-database'
.. highlight: bash

validate-fasta-database
=======================

.. conda:recipe:: validate-fasta-database
   :replaces_section_title:
   :noindex:

   Code for Galaxy tool for quality control on FASTA database

   :homepage: https://github.com/caleb-easterly/validate_fasta_database
   :license: GPL-3.0
   :recipe: /`validate-fasta-database <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database/meta.yaml>`_

   


.. conda:package:: validate-fasta-database

   |downloads_validate-fasta-database| |docker_validate-fasta-database|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on openjdk: ``>=7``
   :depends on python: 

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

    pixi global install validate-fasta-database

to add into an existing workspace instead, run::

    pixi add validate-fasta-database

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install validate-fasta-database

Alternatively, to install into a new environment, run::

    conda create -n envname validate-fasta-database

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/validate-fasta-database:<tag>

(see `validate-fasta-database/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_validate-fasta-database| image:: https://img.shields.io/conda/dn/bioconda/validate-fasta-database.svg?style=flat
   :target: https://anaconda.org/bioconda/validate-fasta-database
   :alt:   (downloads)
.. |docker_validate-fasta-database| image:: https://quay.io/repository/biocontainers/validate-fasta-database/status
   :target: https://quay.io/repository/biocontainers/validate-fasta-database
.. _`validate-fasta-database/tags`: https://quay.io/repository/biocontainers/validate-fasta-database?tab=tags


.. raw:: html

    <script>
        var package = "validate-fasta-database";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/validate-fasta-database/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/validate-fasta-database/README.html