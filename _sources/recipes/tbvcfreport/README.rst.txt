:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbvcfreport'
.. highlight: bash

tbvcfreport
===========

.. conda:recipe:: tbvcfreport
   :replaces_section_title:
   :noindex:

   Parses SnpEff annotated M.tb VCF\(s\) and generates an interactive HTML\-based report.

   :homepage: https://github.com/COMBAT-TB/tbvcfreport
   :documentation: https://github.com/COMBAT-TB/tbvcfreport/blob/master/README.md
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`tbvcfreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbvcfreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbvcfreport/meta.yaml>`_

   


.. conda:package:: tbvcfreport

   |downloads_tbvcfreport| |docker_tbvcfreport|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.10-0``,  ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends on click: 
   :depends on jinja2: 
   :depends on neo4j-python-driver: 
   :depends on python: ``>=3.10``
   :depends on vcfpy: 

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

    pixi global install tbvcfreport

to add into an existing workspace instead, run::

    pixi add tbvcfreport

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbvcfreport

Alternatively, to install into a new environment, run::

    conda create -n envname tbvcfreport

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbvcfreport:<tag>

(see `tbvcfreport/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbvcfreport| image:: https://img.shields.io/conda/dn/bioconda/tbvcfreport.svg?style=flat
   :target: https://anaconda.org/bioconda/tbvcfreport
   :alt:   (downloads)
.. |docker_tbvcfreport| image:: https://quay.io/repository/biocontainers/tbvcfreport/status
   :target: https://quay.io/repository/biocontainers/tbvcfreport
.. _`tbvcfreport/tags`: https://quay.io/repository/biocontainers/tbvcfreport?tab=tags


.. raw:: html

    <script>
        var package = "tbvcfreport";
        var versions = ["1.0.1","1.0.0","0.1.10","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbvcfreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbvcfreport/README.html