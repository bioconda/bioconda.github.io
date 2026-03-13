:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velvet-sc'
.. highlight: bash

velvet-sc
=========

.. conda:recipe:: velvet-sc
   :replaces_section_title:
   :noindex:

   Efficient de novo assembly of single\-cell bacterial genomes from short\-read data sets

   :homepage: http://bix.ucsd.edu/projects/singlecell/
   :license: GPL / GPL-2.0
   :recipe: /`velvet-sc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet-sc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet-sc/meta.yaml>`_

   


.. conda:package:: velvet-sc

   |downloads_velvet-sc| |docker_velvet-sc|

   :versions:
      
      

      ``0.7.62-5``,  ``0.7.62-4``,  ``0.7.62-3``,  ``0.7.62-2``,  ``0.7.62-1``,  ``0.7.62-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on perl: 

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

    pixi global install velvet-sc

to add into an existing workspace instead, run::

    pixi add velvet-sc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install velvet-sc

Alternatively, to install into a new environment, run::

    conda create -n envname velvet-sc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/velvet-sc:<tag>

(see `velvet-sc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_velvet-sc| image:: https://img.shields.io/conda/dn/bioconda/velvet-sc.svg?style=flat
   :target: https://anaconda.org/bioconda/velvet-sc
   :alt:   (downloads)
.. |docker_velvet-sc| image:: https://quay.io/repository/biocontainers/velvet-sc/status
   :target: https://quay.io/repository/biocontainers/velvet-sc
.. _`velvet-sc/tags`: https://quay.io/repository/biocontainers/velvet-sc?tab=tags


.. raw:: html

    <script>
        var package = "velvet-sc";
        var versions = ["0.7.62","0.7.62","0.7.62","0.7.62","0.7.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velvet-sc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velvet-sc/README.html