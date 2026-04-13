:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spclust'
.. highlight: bash

spclust
=======

.. conda:recipe:: spclust
   :replaces_section_title:
   :noindex:

   Spectral clustering for biological sequences

   :homepage: https://github.com/johnymatar/SpCLUST/
   :license: gpl-3.0-or-later
   :recipe: /`spclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust/meta.yaml>`_

   


.. conda:package:: spclust

   |downloads_spclust| |docker_spclust|

   :versions:
      
      

      ``28.5.19-1``,  ``28.5.19-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on openmpi-mpicxx: 
   :depends on zlib: 

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

    pixi global install spclust

to add into an existing workspace instead, run::

    pixi add spclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spclust

Alternatively, to install into a new environment, run::

    conda create -n envname spclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spclust:<tag>

(see `spclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spclust| image:: https://img.shields.io/conda/dn/bioconda/spclust.svg?style=flat
   :target: https://anaconda.org/bioconda/spclust
   :alt:   (downloads)
.. |docker_spclust| image:: https://quay.io/repository/biocontainers/spclust/status
   :target: https://quay.io/repository/biocontainers/spclust
.. _`spclust/tags`: https://quay.io/repository/biocontainers/spclust?tab=tags


.. raw:: html

    <script>
        var package = "spclust";
        var versions = ["28.5.19","28.5.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spclust/README.html