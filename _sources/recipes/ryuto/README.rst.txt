:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ryuto'
.. highlight: bash

ryuto
=====

.. conda:recipe:: ryuto
   :replaces_section_title:
   :noindex:

   Network\-Flow based Transcriptome Reconstruction

   :homepage: https://github.com/studla/RYUTO/
   :license: BSD
   :recipe: /`ryuto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto/meta.yaml>`_

   


.. conda:package:: ryuto

   |downloads_ryuto| |docker_ryuto|

   :versions:
      
      

      ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
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

    pixi global install ryuto

to add into an existing workspace instead, run::

    pixi add ryuto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ryuto

Alternatively, to install into a new environment, run::

    conda create -n envname ryuto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ryuto:<tag>

(see `ryuto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ryuto| image:: https://img.shields.io/conda/dn/bioconda/ryuto.svg?style=flat
   :target: https://anaconda.org/bioconda/ryuto
   :alt:   (downloads)
.. |docker_ryuto| image:: https://quay.io/repository/biocontainers/ryuto/status
   :target: https://quay.io/repository/biocontainers/ryuto
.. _`ryuto/tags`: https://quay.io/repository/biocontainers/ryuto?tab=tags


.. raw:: html

    <script>
        var package = "ryuto";
        var versions = ["1.6.3","1.6.3","1.6.3","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ryuto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ryuto/README.html