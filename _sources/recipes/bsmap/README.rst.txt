:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bsmap'
.. highlight: bash

bsmap
=====

.. conda:recipe:: bsmap
   :replaces_section_title:
   :noindex:

   BSMAP is a short reads mapping software for bisulfite sequencing reads.

   :homepage: https://code.google.com/archive/p/bsmap/
   :license: GPL / GNU GPL v3
   :recipe: /`bsmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsmap/meta.yaml>`_
   :links: biotools: :biotools:`bsmap`, doi: :doi:`10.1186/1471-2105-10-232`

   


.. conda:package:: bsmap

   |downloads_bsmap| |docker_bsmap|

   :versions:
      
      

      ``2.90-5``,  ``2.90-4``,  ``2.90-3``,  ``2.90-2``,  ``2.90-1``,  ``2.90-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on python: ``2.7.*``
   :depends on samtools: 
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

    pixi global install bsmap

to add into an existing workspace instead, run::

    pixi add bsmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bsmap

Alternatively, to install into a new environment, run::

    conda create -n envname bsmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bsmap:<tag>

(see `bsmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bsmap| image:: https://img.shields.io/conda/dn/bioconda/bsmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bsmap
   :alt:   (downloads)
.. |docker_bsmap| image:: https://quay.io/repository/biocontainers/bsmap/status
   :target: https://quay.io/repository/biocontainers/bsmap
.. _`bsmap/tags`: https://quay.io/repository/biocontainers/bsmap?tab=tags


.. raw:: html

    <script>
        var package = "bsmap";
        var versions = ["2.90","2.90","2.90","2.90","2.90"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bsmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bsmap/README.html