:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flumutdb'
.. highlight: bash

flumutdb
========

.. conda:recipe:: flumutdb
   :replaces_section_title:
   :noindex:

   Utility module for FluMut database.

   :homepage: https://github.com/izsvenezie-virology/FluMutDB
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`flumutdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumutdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumutdb/meta.yaml>`_

   


.. conda:package:: flumutdb

   |downloads_flumutdb| |docker_flumutdb|

   :versions:
      
      

      ``6.5-0``,  ``6.4-0``,  ``6.3-0``,  ``6.2-0``,  ``6.1-0``,  ``6.0-0``

      

   
   :depends on python: ``>=3.7``

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

    pixi global install flumutdb

to add into an existing workspace instead, run::

    pixi add flumutdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flumutdb

Alternatively, to install into a new environment, run::

    conda create -n envname flumutdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flumutdb:<tag>

(see `flumutdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flumutdb| image:: https://img.shields.io/conda/dn/bioconda/flumutdb.svg?style=flat
   :target: https://anaconda.org/bioconda/flumutdb
   :alt:   (downloads)
.. |docker_flumutdb| image:: https://quay.io/repository/biocontainers/flumutdb/status
   :target: https://quay.io/repository/biocontainers/flumutdb
.. _`flumutdb/tags`: https://quay.io/repository/biocontainers/flumutdb?tab=tags


.. raw:: html

    <script>
        var package = "flumutdb";
        var versions = ["6.5","6.4","6.3","6.2","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flumutdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flumutdb/README.html