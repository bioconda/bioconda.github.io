:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popoolation2'
.. highlight: bash

popoolation2
============

.. conda:recipe:: popoolation2
   :replaces_section_title:
   :noindex:

   PoPoolation2 allows to compare allele frequencies for SNPs between two or more populations and to identify significant differences.

   :homepage: https://sourceforge.net/projects/popoolation2
   :license: BSD / BSD-3
   :recipe: /`popoolation2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popoolation2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popoolation2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btr589`

   


.. conda:package:: popoolation2

   |downloads_popoolation2| |docker_popoolation2|

   :versions:
      
      

      ``1.201-0``

      

   
   :depends on bwa: 
   :depends on igv: 
   :depends on openjdk: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-text-nsp: 
   :depends on python: 
   :depends on r-base: 
   :depends on samtools: 

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

    pixi global install popoolation2

to add into an existing workspace instead, run::

    pixi add popoolation2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install popoolation2

Alternatively, to install into a new environment, run::

    conda create -n envname popoolation2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/popoolation2:<tag>

(see `popoolation2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_popoolation2| image:: https://img.shields.io/conda/dn/bioconda/popoolation2.svg?style=flat
   :target: https://anaconda.org/bioconda/popoolation2
   :alt:   (downloads)
.. |docker_popoolation2| image:: https://quay.io/repository/biocontainers/popoolation2/status
   :target: https://quay.io/repository/biocontainers/popoolation2
.. _`popoolation2/tags`: https://quay.io/repository/biocontainers/popoolation2?tab=tags


.. raw:: html

    <script>
        var package = "popoolation2";
        var versions = ["1.201"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popoolation2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popoolation2/README.html