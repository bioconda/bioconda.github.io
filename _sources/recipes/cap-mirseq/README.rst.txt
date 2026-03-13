:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cap-mirseq'
.. highlight: bash

cap-mirseq
==========

.. conda:recipe:: cap-mirseq
   :replaces_section_title:
   :noindex:

   A comprehensive analysis pipeline for deep microRNA sequencing

   :homepage: http://bioinformaticstools.mayo.edu/research/cap-mirseq/
   :license: GPL
   :recipe: /`cap-mirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq/meta.yaml>`_

   


.. conda:package:: cap-mirseq

   |downloads_cap-mirseq| |docker_cap-mirseq|

   :versions:
      
      

      ``version-0``

      

   
   :depends on bedtools: ``>=2.17.0``
   :depends on bioconductor-edger: ``>=3.14.0``
   :depends on bowtie: ``>=1.1.2``
   :depends on fastqc: ``>=0.11.5``
   :depends on java-jdk: 
   :depends on mirdeep2: ``>=2.0.0.7``
   :depends on perl-threaded: 
   :depends on picard: ``>=1.97``
   :depends on r-base: ``3.2.2*``
   :depends on r-essentials: 
   :depends on samtools: ``>=0.1.19``
   :depends on vcftools: ``>=0.1.11``

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

    pixi global install cap-mirseq

to add into an existing workspace instead, run::

    pixi add cap-mirseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cap-mirseq

Alternatively, to install into a new environment, run::

    conda create -n envname cap-mirseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cap-mirseq:<tag>

(see `cap-mirseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cap-mirseq| image:: https://img.shields.io/conda/dn/bioconda/cap-mirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/cap-mirseq
   :alt:   (downloads)
.. |docker_cap-mirseq| image:: https://quay.io/repository/biocontainers/cap-mirseq/status
   :target: https://quay.io/repository/biocontainers/cap-mirseq
.. _`cap-mirseq/tags`: https://quay.io/repository/biocontainers/cap-mirseq?tab=tags


.. raw:: html

    <script>
        var package = "cap-mirseq";
        var versions = ["version"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cap-mirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cap-mirseq/README.html