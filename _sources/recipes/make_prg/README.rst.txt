:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'make_prg'
.. highlight: bash

make_prg
========

.. conda:recipe:: make_prg
   :replaces_section_title:
   :noindex:

   A tool to create and update PRGs from a set of Multiple Sequence Alignments.

   :homepage: https://github.com/iqbal-lab-org/make_prg
   :license: MIT
   :recipe: /`make_prg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/make_prg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/make_prg/meta.yaml>`_

   


.. conda:package:: make_prg

   |downloads_make_prg| |docker_make_prg|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on biopython: ``1.79``
   :depends on intervaltree: ``>=3.1.0,<4.0.0``
   :depends on loguru: ``>=0.6.0,<0.7.0``
   :depends on numpy: ``>=1.24.4,<2.0.0``
   :depends on python: ``>=3.8,<=3.11``
   :depends on scikit-learn: ``>=1.3.0,<1.4.0``
   :depends on setuptools: ``>=65,<66``

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

    pixi global install make_prg

to add into an existing workspace instead, run::

    pixi add make_prg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install make_prg

Alternatively, to install into a new environment, run::

    conda create -n envname make_prg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/make_prg:<tag>

(see `make_prg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_make_prg| image:: https://img.shields.io/conda/dn/bioconda/make_prg.svg?style=flat
   :target: https://anaconda.org/bioconda/make_prg
   :alt:   (downloads)
.. |docker_make_prg| image:: https://quay.io/repository/biocontainers/make_prg/status
   :target: https://quay.io/repository/biocontainers/make_prg
.. _`make_prg/tags`: https://quay.io/repository/biocontainers/make_prg?tab=tags


.. raw:: html

    <script>
        var package = "make_prg";
        var versions = ["0.5.0","0.4.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/make_prg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/make_prg/README.html