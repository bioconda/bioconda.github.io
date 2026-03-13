:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prequal'
.. highlight: bash

prequal
=======

.. conda:recipe:: prequal
   :replaces_section_title:
   :noindex:

   a pre\-alignment quality filter for comparative sequence analyses

   :homepage: https://github.com/simonwhelan/prequal
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`prequal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal/meta.yaml>`_

   


.. conda:package:: prequal

   |downloads_prequal| |docker_prequal|

   :versions:
      
      

      ``1.02-7``,  ``1.02-6``,  ``1.02-5``,  ``1.02-4``,  ``1.02-3``,  ``1.02-2``,  ``1.02-1``,  ``1.02-0``

      

   
   :depends on boost-cpp: 
   :depends on zlib: ``1.*``

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

    pixi global install prequal

to add into an existing workspace instead, run::

    pixi add prequal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prequal

Alternatively, to install into a new environment, run::

    conda create -n envname prequal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prequal:<tag>

(see `prequal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prequal| image:: https://img.shields.io/conda/dn/bioconda/prequal.svg?style=flat
   :target: https://anaconda.org/bioconda/prequal
   :alt:   (downloads)
.. |docker_prequal| image:: https://quay.io/repository/biocontainers/prequal/status
   :target: https://quay.io/repository/biocontainers/prequal
.. _`prequal/tags`: https://quay.io/repository/biocontainers/prequal?tab=tags


.. raw:: html

    <script>
        var package = "prequal";
        var versions = ["1.02","1.02","1.02","1.02","1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prequal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prequal/README.html