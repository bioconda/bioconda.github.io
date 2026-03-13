:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastremap-bio'
.. highlight: bash

fastremap-bio
=============

.. conda:recipe:: fastremap-bio
   :replaces_section_title:
   :noindex:

   FastRemap\, a C\+\+ tool for quickly remapping reads between genome assemblies based on the commonly used CrossMap tool.

   :homepage: https://github.com/CMU-SAFARI/FastRemap
   :license: MIT
   :recipe: /`fastremap-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastremap-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastremap-bio/meta.yaml>`_

   


.. conda:package:: fastremap-bio

   |downloads_fastremap-bio| |docker_fastremap-bio|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install fastremap-bio

to add into an existing workspace instead, run::

    pixi add fastremap-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastremap-bio

Alternatively, to install into a new environment, run::

    conda create -n envname fastremap-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastremap-bio:<tag>

(see `fastremap-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastremap-bio| image:: https://img.shields.io/conda/dn/bioconda/fastremap-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/fastremap-bio
   :alt:   (downloads)
.. |docker_fastremap-bio| image:: https://quay.io/repository/biocontainers/fastremap-bio/status
   :target: https://quay.io/repository/biocontainers/fastremap-bio
.. _`fastremap-bio/tags`: https://quay.io/repository/biocontainers/fastremap-bio?tab=tags


.. raw:: html

    <script>
        var package = "fastremap-bio";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastremap-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastremap-bio/README.html