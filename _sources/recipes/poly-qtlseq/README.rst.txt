:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poly-qtlseq'
.. highlight: bash

poly-qtlseq
===========

.. conda:recipe:: poly-qtlseq
   :replaces_section_title:
   :noindex:

   PolyploidQtlSeq is a program that extends QTL\-seq for polyploid F1 populations.

   :homepage: https://github.com/TatsumiMizubayashi/PolyploidQtlSeq
   :license: MIT License
   :recipe: /`poly-qtlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poly-qtlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poly-qtlseq/meta.yaml>`_

   


.. conda:package:: poly-qtlseq

   |downloads_poly-qtlseq| |docker_poly-qtlseq|

   :versions:
      
      

      ``1.2.6-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bcftools: ``>=1.16``
   :depends on bwa: 
   :depends on dotnet-runtime: ``>=8,<9``
   :depends on fastp: ``>=0.23``
   :depends on samtools: ``>=1.16``
   :depends on snpeff: 

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

    pixi global install poly-qtlseq

to add into an existing workspace instead, run::

    pixi add poly-qtlseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poly-qtlseq

Alternatively, to install into a new environment, run::

    conda create -n envname poly-qtlseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poly-qtlseq:<tag>

(see `poly-qtlseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poly-qtlseq| image:: https://img.shields.io/conda/dn/bioconda/poly-qtlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/poly-qtlseq
   :alt:   (downloads)
.. |docker_poly-qtlseq| image:: https://quay.io/repository/biocontainers/poly-qtlseq/status
   :target: https://quay.io/repository/biocontainers/poly-qtlseq
.. _`poly-qtlseq/tags`: https://quay.io/repository/biocontainers/poly-qtlseq?tab=tags


.. raw:: html

    <script>
        var package = "poly-qtlseq";
        var versions = ["1.2.6","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poly-qtlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poly-qtlseq/README.html