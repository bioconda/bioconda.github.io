:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crossfilt'
.. highlight: bash

crossfilt
=========

.. conda:recipe:: crossfilt
   :replaces_section_title:
   :noindex:

   Tools to filter reads causing alignment bias in cross\-species genomic comparisons.

   :homepage: https://github.com/kennethabarr/CrossFilt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`crossfilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossfilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossfilt/meta.yaml>`_

   


.. conda:package:: crossfilt

   |downloads_crossfilt| |docker_crossfilt|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends on bx-python: 
   :depends on intervaltree: 
   :depends on pysam: 
   :depends on python: ``>=3.10``

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

    pixi global install crossfilt

to add into an existing workspace instead, run::

    pixi add crossfilt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crossfilt

Alternatively, to install into a new environment, run::

    conda create -n envname crossfilt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crossfilt:<tag>

(see `crossfilt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crossfilt| image:: https://img.shields.io/conda/dn/bioconda/crossfilt.svg?style=flat
   :target: https://anaconda.org/bioconda/crossfilt
   :alt:   (downloads)
.. |docker_crossfilt| image:: https://quay.io/repository/biocontainers/crossfilt/status
   :target: https://quay.io/repository/biocontainers/crossfilt
.. _`crossfilt/tags`: https://quay.io/repository/biocontainers/crossfilt?tab=tags


.. raw:: html

    <script>
        var package = "crossfilt";
        var versions = ["0.2.1","0.1.5","0.1.4","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crossfilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crossfilt/README.html