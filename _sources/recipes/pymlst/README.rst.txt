:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymlst'
.. highlight: bash

pymlst
======

.. conda:recipe:: pymlst
   :replaces_section_title:
   :noindex:

   python Mlst Local Search Tool

   :homepage: https://github.com/bvalot/pyMLST.git
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pymlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst/meta.yaml>`_

   


.. conda:package:: pymlst

   |downloads_pymlst| |docker_pymlst|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``

      

   
   :depends on alembic: ``>=1.6``
   :depends on beautifulsoup4: ``>=4.9``
   :depends on biopython: ``>=1.78``
   :depends on click: ``>=7.1``
   :depends on decorator: ``>=4.4``
   :depends on git: ``>=1.7``
   :depends on gitpython: ``>=3.1``
   :depends on kma: ``>=1.3``
   :depends on mafft: ``>=7.3``
   :depends on networkx: ``>=2.5``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.2``
   :depends on pytest: ``>=6.2``
   :depends on python: ``>=3.7``
   :depends on questionary: ``>=1.9``
   :depends on requests: ``>=2.23``
   :depends on sqlalchemy: ``>=1.4,<2``
   :depends on ucsc-blat: ``>=360``

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

    pixi global install pymlst

to add into an existing workspace instead, run::

    pixi add pymlst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pymlst

Alternatively, to install into a new environment, run::

    conda create -n envname pymlst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pymlst:<tag>

(see `pymlst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pymlst| image:: https://img.shields.io/conda/dn/bioconda/pymlst.svg?style=flat
   :target: https://anaconda.org/bioconda/pymlst
   :alt:   (downloads)
.. |docker_pymlst| image:: https://quay.io/repository/biocontainers/pymlst/status
   :target: https://quay.io/repository/biocontainers/pymlst
.. _`pymlst/tags`: https://quay.io/repository/biocontainers/pymlst?tab=tags


.. raw:: html

    <script>
        var package = "pymlst";
        var versions = ["2.2.2","2.2.1","2.1.6","2.1.5","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymlst/README.html