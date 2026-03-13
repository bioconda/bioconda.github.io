:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ete2'
.. highlight: bash

ete2
====

.. conda:recipe:: ete2
   :replaces_section_title:
   :noindex:

   Phylogenetic tree analyses and exploration

   :homepage: http://etetoolkit.org/
   :license: GPLv3
   :recipe: /`ete2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2/meta.yaml>`_

   


.. conda:package:: ete2

   |downloads_ete2| |docker_ete2|

   :versions:
      
      

      ``2.3.10-4``,  ``2.3.10-3``,  ``2.3.10-2``,  ``2.3.10-1``,  ``2.3.10-0``,  ``2.2.1072-2``

      

   
   :depends on lxml: 
   :depends on mysql-python: 
   :depends on numpy: 
   :depends on pyqt: ``4.*``
   :depends on python: ``<3``

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

    pixi global install ete2

to add into an existing workspace instead, run::

    pixi add ete2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ete2

Alternatively, to install into a new environment, run::

    conda create -n envname ete2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ete2:<tag>

(see `ete2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ete2| image:: https://img.shields.io/conda/dn/bioconda/ete2.svg?style=flat
   :target: https://anaconda.org/bioconda/ete2
   :alt:   (downloads)
.. |docker_ete2| image:: https://quay.io/repository/biocontainers/ete2/status
   :target: https://quay.io/repository/biocontainers/ete2
.. _`ete2/tags`: https://quay.io/repository/biocontainers/ete2?tab=tags


.. raw:: html

    <script>
        var package = "ete2";
        var versions = ["2.3.10","2.3.10","2.3.10","2.3.10","2.3.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ete2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ete2/README.html