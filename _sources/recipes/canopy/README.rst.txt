:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canopy'
.. highlight: bash

canopy
======

.. conda:recipe:: canopy
   :replaces_section_title:
   :noindex:

   Canopy \- Metagenomics Canopy Clustering Implementation

   :homepage: https://github.com/hildebra/canopy2/
   :license: GPL-2.0-or-later
   :recipe: /`canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canopy/meta.yaml>`_

   


.. conda:package:: canopy

   |downloads_canopy| |docker_canopy|

   :versions:
      
      

      ``0.25-1``,  ``0.25-0``

      

   
   :depends on _openmp_mutex: ``* *_llvm``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on llvm-openmp: ``>=19.1.5``
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

    pixi global install canopy

to add into an existing workspace instead, run::

    pixi add canopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install canopy

Alternatively, to install into a new environment, run::

    conda create -n envname canopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/canopy:<tag>

(see `canopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_canopy| image:: https://img.shields.io/conda/dn/bioconda/canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/canopy
   :alt:   (downloads)
.. |docker_canopy| image:: https://quay.io/repository/biocontainers/canopy/status
   :target: https://quay.io/repository/biocontainers/canopy
.. _`canopy/tags`: https://quay.io/repository/biocontainers/canopy?tab=tags


.. raw:: html

    <script>
        var package = "canopy";
        var versions = ["0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canopy/README.html