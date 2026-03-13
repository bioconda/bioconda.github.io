:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-compara'
.. highlight: bash

perl-ensembl-compara
====================

.. conda:recipe:: perl-ensembl-compara
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-compara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara/meta.yaml>`_

   


.. conda:package:: perl-ensembl-compara

   |downloads_perl-ensembl-compara| |docker_perl-ensembl-compara|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on perl-capture-tiny: 
   :depends on perl-data-predicate: 
   :depends on perl-ensembl-core: 
   :depends on perl-html-template: 
   :depends on perl-json: 
   :depends on perl-list-compare: 
   :depends on perl-lwp-simple: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-number-format: 
   :depends on perl-parse-recdescent: 
   :depends on perl-set-intervaltree: 
   :depends on perl-statistics-descriptive: 
   :depends on perl-text-csv: 
   :depends on perl-xml-writer: 

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

    pixi global install perl-ensembl-compara

to add into an existing workspace instead, run::

    pixi add perl-ensembl-compara

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ensembl-compara

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ensembl-compara

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ensembl-compara:<tag>

(see `perl-ensembl-compara/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ensembl-compara| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-compara.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-compara
   :alt:   (downloads)
.. |docker_perl-ensembl-compara| image:: https://quay.io/repository/biocontainers/perl-ensembl-compara/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-compara
.. _`perl-ensembl-compara/tags`: https://quay.io/repository/biocontainers/perl-ensembl-compara?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-compara";
        var versions = ["98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-compara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-compara/README.html