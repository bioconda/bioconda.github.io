:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_manager'
.. highlight: bash

biobb_structure_manager
=======================

.. conda:recipe:: biobb_structure_manager
   :replaces_section_title:
   :noindex:

   BioBB\_structure\_manager is a library to efficiently load and process biomolecular 3D structures.

   :homepage: https://github.com/bioexcel/BioBB_structure_manager
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_manager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager/meta.yaml>`_

   \[\!\[Codacy Badge\]\(https\:\/\/api.codacy.com\/project\/badge\/Grade\/3dbc32af83244f1fba8961cfe059ae37\)\]\(https\:\/\/www.codacy.com\/app\/jlgelpi\/structure\_manager\?utm\_source\=mmb.irbbarcelona.org\&amp\;utm\_medium\=referral\&amp\;utm\_content\=gitlab\/BioExcel\/structure\_manager\&amp\;utm\_campaign\=Badge\_Grade\)

   \#\#\# Structure Manager package
   Python package to manage 3D structures. Wraps Bio.PDB with additional features.



.. conda:package:: biobb_structure_manager

   |downloads_biobb_structure_manager| |docker_biobb_structure_manager|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``1.0.0-0``,  ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends on biopython: ``1.76``
   :depends on python: ``3.7.*``

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

    pixi global install biobb_structure_manager

to add into an existing workspace instead, run::

    pixi add biobb_structure_manager

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_structure_manager

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_structure_manager

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_structure_manager:<tag>

(see `biobb_structure_manager/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_structure_manager| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_manager.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_manager
   :alt:   (downloads)
.. |docker_biobb_structure_manager| image:: https://quay.io/repository/biocontainers/biobb_structure_manager/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_manager
.. _`biobb_structure_manager/tags`: https://quay.io/repository/biocontainers/biobb_structure_manager?tab=tags


.. raw:: html

    <script>
        var package = "biobb_structure_manager";
        var versions = ["3.0.2","3.0.1","3.0.0","1.0.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_manager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_manager/README.html