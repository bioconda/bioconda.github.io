:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdbecif'
.. highlight: bash

pdbecif
=======

.. conda:recipe:: pdbecif
   :replaces_section_title:
   :noindex:

   A lightweight pure python package for reading\, writing and manipulating mmCIF files distributed by the wwPDB.

   :homepage: https://github.com/pdbeurope/pdbecif
   :documentation: https://pdbeurope.github.io/pdbecif
   
   :license: APACHE / Apache-2.0
   :recipe: /`pdbecif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbecif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbecif/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-021-04271-9`

   PDBeCIF is a package that is used to work with mmCIF formatted files.
   The package ontains modules for accessing mmCIF data in different ways depending on the type of task required.



.. conda:package:: pdbecif

   |downloads_pdbecif| |docker_pdbecif|

   :versions:
      
      

      ``1.5-0``

      

   
   :depends on python: ``>=3.10``

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

    pixi global install pdbecif

to add into an existing workspace instead, run::

    pixi add pdbecif

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pdbecif

Alternatively, to install into a new environment, run::

    conda create -n envname pdbecif

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pdbecif:<tag>

(see `pdbecif/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pdbecif| image:: https://img.shields.io/conda/dn/bioconda/pdbecif.svg?style=flat
   :target: https://anaconda.org/bioconda/pdbecif
   :alt:   (downloads)
.. |docker_pdbecif| image:: https://quay.io/repository/biocontainers/pdbecif/status
   :target: https://quay.io/repository/biocontainers/pdbecif
.. _`pdbecif/tags`: https://quay.io/repository/biocontainers/pdbecif?tab=tags


.. raw:: html

    <script>
        var package = "pdbecif";
        var versions = ["1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdbecif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdbecif/README.html