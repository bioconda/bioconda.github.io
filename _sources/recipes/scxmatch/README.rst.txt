:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scxmatch'
.. highlight: bash

scxmatch
========

.. conda:recipe:: scxmatch
   :replaces_section_title:
   :noindex:

   Python implementation for single\-cell cross match test\, an efficient implementation of Rosenbaum\'s test.

   :homepage: https://github.com/bionetslab/scxmatch
   :license: MIT
   :recipe: /`scxmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxmatch/meta.yaml>`_

   


.. conda:package:: scxmatch

   |downloads_scxmatch| |docker_scxmatch|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on anndata: ``>=0.10.9``
   :depends on graph-tool: ``>=2.92,<3``
   :depends on python: ``>=3.9``
   :depends on scanpy: ``>=1.10.3,<2``
   :depends on scipy: ``>=1.13.1,<2``

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

    pixi global install scxmatch

to add into an existing workspace instead, run::

    pixi add scxmatch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scxmatch

Alternatively, to install into a new environment, run::

    conda create -n envname scxmatch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scxmatch:<tag>

(see `scxmatch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scxmatch| image:: https://img.shields.io/conda/dn/bioconda/scxmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/scxmatch
   :alt:   (downloads)
.. |docker_scxmatch| image:: https://quay.io/repository/biocontainers/scxmatch/status
   :target: https://quay.io/repository/biocontainers/scxmatch
.. _`scxmatch/tags`: https://quay.io/repository/biocontainers/scxmatch?tab=tags


.. raw:: html

    <script>
        var package = "scxmatch";
        var versions = ["0.1.1","0.1.0","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scxmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scxmatch/README.html