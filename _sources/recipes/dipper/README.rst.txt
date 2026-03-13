:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dipper'
.. highlight: bash

dipper
======

.. conda:recipe:: dipper
   :replaces_section_title:
   :noindex:

   DIPPER\: An ultrafast tool for phylogenetic tree reconstruction.

   :homepage: https://github.com/TurakhiaLab/DIPPER
   :documentation: https://turakhia.ucsd.edu/DIPPER
   
   :license: MIT / MIT
   :recipe: /`dipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipper/meta.yaml>`_

   DIPPER \(DIstance\-based Phylogenetic PlacER\) is a tool designed for ultrafast and ultralarge phylogenetic tree reconstruction on GPUs. It is capable of reconstructing a phylogenetic tree with 10 million taxa\, with a minimal memory footprint.


.. conda:package:: dipper

   |downloads_dipper| |docker_dipper|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on tbb: ``>=2021.13.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install dipper

to add into an existing workspace instead, run::

    pixi add dipper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dipper

Alternatively, to install into a new environment, run::

    conda create -n envname dipper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dipper:<tag>

(see `dipper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dipper| image:: https://img.shields.io/conda/dn/bioconda/dipper.svg?style=flat
   :target: https://anaconda.org/bioconda/dipper
   :alt:   (downloads)
.. |docker_dipper| image:: https://quay.io/repository/biocontainers/dipper/status
   :target: https://quay.io/repository/biocontainers/dipper
.. _`dipper/tags`: https://quay.io/repository/biocontainers/dipper?tab=tags


.. raw:: html

    <script>
        var package = "dipper";
        var versions = ["0.1.3","0.1.2","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dipper/README.html