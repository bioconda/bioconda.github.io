:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aprfinder'
.. highlight: bash

aprfinder
=========

.. conda:recipe:: aprfinder
   :replaces_section_title:
   :noindex:

   Tool for finding aphased repeats.

   :homepage: https://github.com/jaroslav-kubin/aprfinder
   :license: MIT
   :recipe: /`aprfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aprfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aprfinder/meta.yaml>`_

   


.. conda:package:: aprfinder

   |downloads_aprfinder| |docker_aprfinder|

   :versions:
      
      

      ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-0``,  ``1.2-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install aprfinder

to add into an existing workspace instead, run::

    pixi add aprfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aprfinder

Alternatively, to install into a new environment, run::

    conda create -n envname aprfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aprfinder:<tag>

(see `aprfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aprfinder| image:: https://img.shields.io/conda/dn/bioconda/aprfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/aprfinder
   :alt:   (downloads)
.. |docker_aprfinder| image:: https://quay.io/repository/biocontainers/aprfinder/status
   :target: https://quay.io/repository/biocontainers/aprfinder
.. _`aprfinder/tags`: https://quay.io/repository/biocontainers/aprfinder?tab=tags


.. raw:: html

    <script>
        var package = "aprfinder";
        var versions = ["1.5","1.5","1.5","1.5","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aprfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aprfinder/README.html