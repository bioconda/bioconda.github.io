:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer2circos'
.. highlight: bash

mummer2circos
=============

.. conda:recipe:: mummer2circos
   :replaces_section_title:
   :noindex:

   Circular bacterial genome plots based on BLAST or NUCMER\/PROMER alignments

   :homepage: https://github.com/metagenlab/mummer2circos
   :license: MIT
   :recipe: /`mummer2circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer2circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer2circos/meta.yaml>`_

   


.. conda:package:: mummer2circos

   |downloads_mummer2circos| |docker_mummer2circos|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends on biopython: ``1.72.*``
   :depends on blast: 
   :depends on circos: ``0.69.8 0``
   :depends on libiconv: 
   :depends on libwebp: ``0.5.*``
   :depends on matplotlib-base: 
   :depends on mummer: 
   :depends on pandas: 
   :depends on perl-math-bezier: ``0.01 pl526_1``
   :depends on perl-math-round: ``0.07 pl526_1``
   :depends on perl-math-vecstat: ``0.08 pl526_1``
   :depends on perl-set-intspan: ``1.19 pl526_1``
   :depends on perl-statistics-basic: ``1.6611 pl526_2``
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

    pixi global install mummer2circos

to add into an existing workspace instead, run::

    pixi add mummer2circos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mummer2circos

Alternatively, to install into a new environment, run::

    conda create -n envname mummer2circos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mummer2circos:<tag>

(see `mummer2circos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mummer2circos| image:: https://img.shields.io/conda/dn/bioconda/mummer2circos.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer2circos
   :alt:   (downloads)
.. |docker_mummer2circos| image:: https://quay.io/repository/biocontainers/mummer2circos/status
   :target: https://quay.io/repository/biocontainers/mummer2circos
.. _`mummer2circos/tags`: https://quay.io/repository/biocontainers/mummer2circos?tab=tags


.. raw:: html

    <script>
        var package = "mummer2circos";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer2circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer2circos/README.html