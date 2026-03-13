:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5seek'
.. highlight: bash

fast5seek
=========

.. conda:recipe:: fast5seek
   :replaces_section_title:
   :noindex:

   Get paths for fast5 files contained in BAM\, SAM\, or fastq.

   :homepage: https://github.com/mbhall88/fast5seek
   :license: MIT / MIT License
   :recipe: /`fast5seek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek/meta.yaml>`_

   


.. conda:package:: fast5seek

   |downloads_fast5seek| |docker_fast5seek|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on ont-fast5-api: 
   :depends on pysam: 
   :depends on python: ``>=3``

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

    pixi global install fast5seek

to add into an existing workspace instead, run::

    pixi add fast5seek

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fast5seek

Alternatively, to install into a new environment, run::

    conda create -n envname fast5seek

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fast5seek:<tag>

(see `fast5seek/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fast5seek| image:: https://img.shields.io/conda/dn/bioconda/fast5seek.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5seek
   :alt:   (downloads)
.. |docker_fast5seek| image:: https://quay.io/repository/biocontainers/fast5seek/status
   :target: https://quay.io/repository/biocontainers/fast5seek
.. _`fast5seek/tags`: https://quay.io/repository/biocontainers/fast5seek?tab=tags


.. raw:: html

    <script>
        var package = "fast5seek";
        var versions = ["0.1.1","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5seek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5seek/README.html