:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplomap'
.. highlight: bash

duplomap
========

.. conda:recipe:: duplomap
   :replaces_section_title:
   :noindex:

   Tool designed to improve precision and recall of long\-read alignments in segmental duplications.

   :homepage: https://gitlab.com/tprodanov/duplomap
   :license: MIT
   :recipe: /`duplomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap/meta.yaml>`_

   


.. conda:package:: duplomap

   |downloads_duplomap| |docker_duplomap|

   :versions:
      
      

      ``0.9.5-4``,  ``0.9.5-3``,  ``0.9.5-2``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: 

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

    pixi global install duplomap

to add into an existing workspace instead, run::

    pixi add duplomap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install duplomap

Alternatively, to install into a new environment, run::

    conda create -n envname duplomap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/duplomap:<tag>

(see `duplomap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_duplomap| image:: https://img.shields.io/conda/dn/bioconda/duplomap.svg?style=flat
   :target: https://anaconda.org/bioconda/duplomap
   :alt:   (downloads)
.. |docker_duplomap| image:: https://quay.io/repository/biocontainers/duplomap/status
   :target: https://quay.io/repository/biocontainers/duplomap
.. _`duplomap/tags`: https://quay.io/repository/biocontainers/duplomap?tab=tags


.. raw:: html

    <script>
        var package = "duplomap";
        var versions = ["0.9.5","0.9.5","0.9.5","0.9.5","0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplomap/README.html