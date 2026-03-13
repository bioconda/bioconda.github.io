:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cayman'
.. highlight: bash

cayman
======

.. conda:recipe:: cayman
   :replaces_section_title:
   :noindex:

   A command\-line profiling tool for profiling CAZyme abundances in metagenomic datasets.

   :homepage: https://github.com/zellerlab/cayman
   :license: MIT / MIT
   :recipe: /`cayman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cayman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cayman/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.01.08.574624`

   


.. conda:package:: cayman

   |downloads_cayman| |docker_cayman|

   :versions:
      
      

      ``0.10.2-0``,  ``0.10.1-0``

      

   
   :depends on bwa: 
   :depends on gqlib: ``>=2.14.3``
   :depends on pyhmmer: ``>=0.7.0``
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

    pixi global install cayman

to add into an existing workspace instead, run::

    pixi add cayman

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cayman

Alternatively, to install into a new environment, run::

    conda create -n envname cayman

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cayman:<tag>

(see `cayman/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cayman| image:: https://img.shields.io/conda/dn/bioconda/cayman.svg?style=flat
   :target: https://anaconda.org/bioconda/cayman
   :alt:   (downloads)
.. |docker_cayman| image:: https://quay.io/repository/biocontainers/cayman/status
   :target: https://quay.io/repository/biocontainers/cayman
.. _`cayman/tags`: https://quay.io/repository/biocontainers/cayman?tab=tags


.. raw:: html

    <script>
        var package = "cayman";
        var versions = ["0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cayman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cayman/README.html