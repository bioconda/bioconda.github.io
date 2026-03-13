:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circulocov'
.. highlight: bash

circulocov
==========

.. conda:recipe:: circulocov
   :replaces_section_title:
   :noindex:

   CirculoCov is a Python tool designed for circular\-aware coverage analysis of draft genomes

   :homepage: https://github.com/erinyoung/CirculoCov
   :documentation: https://github.com/erinyoung/CirculoCov/blob/main/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`circulocov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circulocov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circulocov/meta.yaml>`_

   


.. conda:package:: circulocov

   |downloads_circulocov| |docker_circulocov|

   :versions:
      
      

      ``0.1.20240104-0``

      

   
   :depends on biopython: ``>=1.58``
   :depends on matplotlib-base: ``>=3.8.2``
   :depends on minimap2: ``>=2.25``
   :depends on numpy: ``>=1.26.2``
   :depends on pandas: ``>=2.1.4``
   :depends on pycirclize: ``>=1.3.0``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.8,<4.0``

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

    pixi global install circulocov

to add into an existing workspace instead, run::

    pixi add circulocov

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circulocov

Alternatively, to install into a new environment, run::

    conda create -n envname circulocov

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circulocov:<tag>

(see `circulocov/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circulocov| image:: https://img.shields.io/conda/dn/bioconda/circulocov.svg?style=flat
   :target: https://anaconda.org/bioconda/circulocov
   :alt:   (downloads)
.. |docker_circulocov| image:: https://quay.io/repository/biocontainers/circulocov/status
   :target: https://quay.io/repository/biocontainers/circulocov
.. _`circulocov/tags`: https://quay.io/repository/biocontainers/circulocov?tab=tags


.. raw:: html

    <script>
        var package = "circulocov";
        var versions = ["0.1.20240104"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circulocov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circulocov/README.html