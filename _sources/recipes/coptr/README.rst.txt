:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coptr'
.. highlight: bash

coptr
=====

.. conda:recipe:: coptr
   :replaces_section_title:
   :noindex:

   Accurate and robust inference of microbial growth dynamics from metagenomic sequencing reads.

   :homepage: https://github.com/tyjo/coptr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`coptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coptr/meta.yaml>`_

   


.. conda:package:: coptr

   |downloads_coptr| |docker_coptr|

   :versions:
      
      

      ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends on bowtie2: ``>=2.4.1``
   :depends on matplotlib-base: ``>=3.3.2``
   :depends on numpy: ``>=1.19.1,<=1.24.4``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.7,<=3.8``
   :depends on scipy: ``>=1.5.2,<2.0.0``

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

    pixi global install coptr

to add into an existing workspace instead, run::

    pixi add coptr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coptr

Alternatively, to install into a new environment, run::

    conda create -n envname coptr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coptr:<tag>

(see `coptr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coptr| image:: https://img.shields.io/conda/dn/bioconda/coptr.svg?style=flat
   :target: https://anaconda.org/bioconda/coptr
   :alt:   (downloads)
.. |docker_coptr| image:: https://quay.io/repository/biocontainers/coptr/status
   :target: https://quay.io/repository/biocontainers/coptr
.. _`coptr/tags`: https://quay.io/repository/biocontainers/coptr?tab=tags


.. raw:: html

    <script>
        var package = "coptr";
        var versions = ["1.1.4","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coptr/README.html