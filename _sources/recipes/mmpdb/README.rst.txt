:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmpdb'
.. highlight: bash

mmpdb
=====

.. conda:recipe:: mmpdb
   :replaces_section_title:
   :noindex:

   A package to identify matched molecular pairs and use them to predict property changes

   :homepage: https://github.com/rdkit/mmpdb
   :documentation: https://github.com/rdkit/mmpdb/blob/master/README.md
   
   :license: BSD-4-Clause
   :recipe: /`mmpdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmpdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmpdb/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jcim.8b00173`

   


.. conda:package:: mmpdb

   |downloads_mmpdb| |docker_mmpdb|

   :versions:
      
      

      ``3.1.4-0``,  ``3.1.3-0``

      

   
   :depends on click: 
   :depends on peewee: ``>=3.0``
   :depends on psutil: 
   :depends on psycopg2: 
   :depends on python: ``>=3.10``
   :depends on rdkit: ``>=2024.03``
   :depends on scipy: 

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

    pixi global install mmpdb

to add into an existing workspace instead, run::

    pixi add mmpdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mmpdb

Alternatively, to install into a new environment, run::

    conda create -n envname mmpdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mmpdb:<tag>

(see `mmpdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mmpdb| image:: https://img.shields.io/conda/dn/bioconda/mmpdb.svg?style=flat
   :target: https://anaconda.org/bioconda/mmpdb
   :alt:   (downloads)
.. |docker_mmpdb| image:: https://quay.io/repository/biocontainers/mmpdb/status
   :target: https://quay.io/repository/biocontainers/mmpdb
.. _`mmpdb/tags`: https://quay.io/repository/biocontainers/mmpdb?tab=tags


.. raw:: html

    <script>
        var package = "mmpdb";
        var versions = ["3.1.4","3.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmpdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmpdb/README.html