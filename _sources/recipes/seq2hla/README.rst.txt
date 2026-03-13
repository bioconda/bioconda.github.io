:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2hla'
.. highlight: bash

seq2hla
=======

.. conda:recipe:: seq2hla
   :replaces_section_title:
   :noindex:

   Precision HLA typing and expression from next\-generation RNA sequencing data

   :homepage: https://github.com/TRON-Bioinformatics/seq2HLA
   :license: MIT
   :recipe: /`seq2hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla/meta.yaml>`_
   :links: biotools: :biotools:`seq2hla`

   


.. conda:package:: seq2hla

   |downloads_seq2hla| |docker_seq2hla|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends on biopython: ``>=1.58``
   :depends on bowtie: ``1.1.2``
   :depends on coreutils: 
   :depends on python: ``<3``
   :depends on r-base: 

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

    pixi global install seq2hla

to add into an existing workspace instead, run::

    pixi add seq2hla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seq2hla

Alternatively, to install into a new environment, run::

    conda create -n envname seq2hla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seq2hla:<tag>

(see `seq2hla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seq2hla| image:: https://img.shields.io/conda/dn/bioconda/seq2hla.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2hla
   :alt:   (downloads)
.. |docker_seq2hla| image:: https://quay.io/repository/biocontainers/seq2hla/status
   :target: https://quay.io/repository/biocontainers/seq2hla
.. _`seq2hla/tags`: https://quay.io/repository/biocontainers/seq2hla?tab=tags


.. raw:: html

    <script>
        var package = "seq2hla";
        var versions = ["2.3","2.3","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2hla/README.html