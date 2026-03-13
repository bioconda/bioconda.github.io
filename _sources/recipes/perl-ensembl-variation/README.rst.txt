:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-variation'
.. highlight: bash

perl-ensembl-variation
======================

.. conda:recipe:: perl-ensembl-variation
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-variation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-variation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-variation/meta.yaml>`_

   


.. conda:package:: perl-ensembl-variation

   |downloads_perl-ensembl-variation| |docker_perl-ensembl-variation|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends on perl: 
   :depends on perl-bio-bigfile: 
   :depends on perl-bio-db-hts: 
   :depends on perl-ensembl-core: 
   :depends on perl-json: 
   :depends on perl-sereal: 
   :depends on perl-set-intervaltree: 
   :depends on perl-string-approx: 

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

    pixi global install perl-ensembl-variation

to add into an existing workspace instead, run::

    pixi add perl-ensembl-variation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ensembl-variation

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ensembl-variation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ensembl-variation:<tag>

(see `perl-ensembl-variation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ensembl-variation| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-variation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-variation
   :alt:   (downloads)
.. |docker_perl-ensembl-variation| image:: https://quay.io/repository/biocontainers/perl-ensembl-variation/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-variation
.. _`perl-ensembl-variation/tags`: https://quay.io/repository/biocontainers/perl-ensembl-variation?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-variation";
        var versions = ["98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-variation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-variation/README.html