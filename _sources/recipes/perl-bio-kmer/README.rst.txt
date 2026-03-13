:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-kmer'
.. highlight: bash

perl-bio-kmer
=============

.. conda:recipe:: perl-bio-kmer
   :replaces_section_title:
   :noindex:

   A perl module for helping with kmer analysis.

   :homepage: https://metacpan.org/pod/Bio::Kmer
   :license: MIT
   :recipe: /`perl-bio-kmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-kmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-kmer/meta.yaml>`_

   


.. conda:package:: perl-bio-kmer

   |downloads_perl-bio-kmer| |docker_perl-bio-kmer|

   :versions:
      
      

      ``0.55-0``

      

   
   :depends on kmer-jellyfish: ``>=2``
   :depends on kmer-jellyfish: ``>=2.3.1,<2.3.2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on perl: ``>=5.26``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on perl-file-which: 

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

    pixi global install perl-bio-kmer

to add into an existing workspace instead, run::

    pixi add perl-bio-kmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-kmer

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-kmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-kmer:<tag>

(see `perl-bio-kmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-kmer| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-kmer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-kmer
   :alt:   (downloads)
.. |docker_perl-bio-kmer| image:: https://quay.io/repository/biocontainers/perl-bio-kmer/status
   :target: https://quay.io/repository/biocontainers/perl-bio-kmer
.. _`perl-bio-kmer/tags`: https://quay.io/repository/biocontainers/perl-bio-kmer?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-kmer";
        var versions = ["0.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-kmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-kmer/README.html