:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brass'
.. highlight: bash

brass
=====

.. conda:recipe:: brass
   :replaces_section_title:
   :noindex:

   BRASS analyses one or more related BAM files of paired\-end sequencing to determine potential rearrangement breakpoints.

   :homepage: https://github.com/cancerit/BRASS
   :license: AGPL-3-0
   :recipe: /`brass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass/meta.yaml>`_

   


.. conda:package:: brass

   |downloads_brass| |docker_brass|

   :versions:
      
      

      ``5.1.6-7``,  ``5.1.6-2``

      

   
   :depends on bedtools: 
   :depends on blat: 
   :depends on cansam: 
   :depends on exonerate: 
   :depends on libgcc: 
   :depends on perl-bio-db-hts: 
   :depends on perl-bio-featureio: 
   :depends on perl-bioperl-core: ``==1.6.924``
   :depends on perl-capture-tiny: 
   :depends on perl-file-sharedir: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-graph-readwrite: 
   :depends on perl-grass: 
   :depends on perl-math-combinatorics: 
   :depends on perl-number-format: 
   :depends on perl-pcap: 
   :depends on perl-statistics-basic: 
   :depends on perl-text-diff: 
   :depends on velvet: 

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

    pixi global install brass

to add into an existing workspace instead, run::

    pixi add brass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install brass

Alternatively, to install into a new environment, run::

    conda create -n envname brass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/brass:<tag>

(see `brass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_brass| image:: https://img.shields.io/conda/dn/bioconda/brass.svg?style=flat
   :target: https://anaconda.org/bioconda/brass
   :alt:   (downloads)
.. |docker_brass| image:: https://quay.io/repository/biocontainers/brass/status
   :target: https://quay.io/repository/biocontainers/brass
.. _`brass/tags`: https://quay.io/repository/biocontainers/brass?tab=tags


.. raw:: html

    <script>
        var package = "brass";
        var versions = ["5.1.6","5.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brass/README.html