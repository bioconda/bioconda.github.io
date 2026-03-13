:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqlalchemy-datatables'
.. highlight: bash

sqlalchemy-datatables
=====================

.. conda:recipe:: sqlalchemy-datatables
   :replaces_section_title:
   :noindex:

   SQLAlchemy integration of jQuery DataTables

   :homepage: https://github.com/pegase745/sqlalchemy-datatables
   :license: MIT License
   :recipe: /`sqlalchemy-datatables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables/meta.yaml>`_

   


.. conda:package:: sqlalchemy-datatables

   |downloads_sqlalchemy-datatables| |docker_sqlalchemy-datatables|

   :versions:
      
      

      ``2.0.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends on dateutil: 
   :depends on python: ``>3``
   :depends on sqlalchemy: 

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

    pixi global install sqlalchemy-datatables

to add into an existing workspace instead, run::

    pixi add sqlalchemy-datatables

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sqlalchemy-datatables

Alternatively, to install into a new environment, run::

    conda create -n envname sqlalchemy-datatables

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sqlalchemy-datatables:<tag>

(see `sqlalchemy-datatables/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sqlalchemy-datatables| image:: https://img.shields.io/conda/dn/bioconda/sqlalchemy-datatables.svg?style=flat
   :target: https://anaconda.org/bioconda/sqlalchemy-datatables
   :alt:   (downloads)
.. |docker_sqlalchemy-datatables| image:: https://quay.io/repository/biocontainers/sqlalchemy-datatables/status
   :target: https://quay.io/repository/biocontainers/sqlalchemy-datatables
.. _`sqlalchemy-datatables/tags`: https://quay.io/repository/biocontainers/sqlalchemy-datatables?tab=tags


.. raw:: html

    <script>
        var package = "sqlalchemy-datatables";
        var versions = ["2.0.1","0.3.0","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html