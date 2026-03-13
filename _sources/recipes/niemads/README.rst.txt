:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'niemads'
.. highlight: bash

niemads
=======

.. conda:recipe:: niemads
   :replaces_section_title:
   :noindex:

   NiemaDS\: Non\-standard data structures for Python 2 and 3

   :homepage: https://github.com/niemasd/NiemaDS
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`niemads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemads/meta.yaml>`_

   


.. conda:package:: niemads

   |downloads_niemads| |docker_niemads|

   :versions:
      
      

      ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``

      

   
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

    pixi global install niemads

to add into an existing workspace instead, run::

    pixi add niemads

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install niemads

Alternatively, to install into a new environment, run::

    conda create -n envname niemads

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/niemads:<tag>

(see `niemads/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_niemads| image:: https://img.shields.io/conda/dn/bioconda/niemads.svg?style=flat
   :target: https://anaconda.org/bioconda/niemads
   :alt:   (downloads)
.. |docker_niemads| image:: https://quay.io/repository/biocontainers/niemads/status
   :target: https://quay.io/repository/biocontainers/niemads
.. _`niemads/tags`: https://quay.io/repository/biocontainers/niemads?tab=tags


.. raw:: html

    <script>
        var package = "niemads";
        var versions = ["1.0.16","1.0.15","1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/niemads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/niemads/README.html