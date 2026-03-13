:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-procedural'
.. highlight: bash

perl-bio-procedural
===================

.. conda:recipe:: perl-bio-procedural/1.7.4
   :replaces_section_title:
   :noindex:

   Simple low\-dependency procedural interfaces to BioPerl.

   :homepage: https://metacpan.org/pod/Bio::Procedural
   :license: Perl_5
   :recipe: /`perl-bio-procedural <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural>`_/`1.7.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-procedural/1.7.4/meta.yaml>`_

   


.. conda:package:: perl-bio-procedural

   |downloads_perl-bio-procedural| |docker_perl-bio-procedural|

   :versions:
      
      

      ``1.7.4-1``,  ``1.7.4-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-db-embl: 
   :depends on perl-bio-db-refseq: 
   :depends on perl-bio-db-swissprot: 
   :depends on perl-bio-tools-run-remoteblast: 

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

    pixi global install perl-bio-procedural

to add into an existing workspace instead, run::

    pixi add perl-bio-procedural

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-procedural

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-procedural

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-procedural:<tag>

(see `perl-bio-procedural/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-procedural| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-procedural.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-procedural
   :alt:   (downloads)
.. |docker_perl-bio-procedural| image:: https://quay.io/repository/biocontainers/perl-bio-procedural/status
   :target: https://quay.io/repository/biocontainers/perl-bio-procedural
.. _`perl-bio-procedural/tags`: https://quay.io/repository/biocontainers/perl-bio-procedural?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-procedural";
        var versions = ["1.7.4","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-procedural/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-procedural/README.html