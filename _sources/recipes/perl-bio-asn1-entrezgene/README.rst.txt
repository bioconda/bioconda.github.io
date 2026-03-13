:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-asn1-entrezgene'
.. highlight: bash

perl-bio-asn1-entrezgene
========================

.. conda:recipe:: perl-bio-asn1-entrezgene
   :replaces_section_title:
   :noindex:

   Regular expression\-based Perl Parser for NCBI Entrez Gene

   :homepage: http://search.cpan.org/dist/Bio-ASN1-EntrezGene
   :license: perl_5
   :recipe: /`perl-bio-asn1-entrezgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-asn1-entrezgene/meta.yaml>`_

   


.. conda:package:: perl-bio-asn1-entrezgene

   |downloads_perl-bio-asn1-entrezgene| |docker_perl-bio-asn1-entrezgene|

   :versions:
      
      

      ``1.73-3``,  ``1.73-2``,  ``1.73-1``,  ``1.73-0``,  ``1.72-2``,  ``1.72-1``,  ``1.70-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-bioperl-core: 
   :depends on perl-carp: 
   :depends on perl-data-dumper: 
   :depends on perl-parent: 
   :depends on perl-test-most: 

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

    pixi global install perl-bio-asn1-entrezgene

to add into an existing workspace instead, run::

    pixi add perl-bio-asn1-entrezgene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-asn1-entrezgene

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-asn1-entrezgene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-asn1-entrezgene:<tag>

(see `perl-bio-asn1-entrezgene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-asn1-entrezgene| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-asn1-entrezgene.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-asn1-entrezgene
   :alt:   (downloads)
.. |docker_perl-bio-asn1-entrezgene| image:: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene/status
   :target: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene
.. _`perl-bio-asn1-entrezgene/tags`: https://quay.io/repository/biocontainers/perl-bio-asn1-entrezgene?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-asn1-entrezgene";
        var versions = ["1.73","1.73","1.73","1.73","1.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-asn1-entrezgene/README.html