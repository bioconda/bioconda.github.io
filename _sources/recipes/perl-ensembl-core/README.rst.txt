:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-core'
.. highlight: bash

perl-ensembl-core
=================

.. conda:recipe:: perl-ensembl-core
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-core/meta.yaml>`_

   


.. conda:package:: perl-ensembl-core

   |downloads_perl-ensembl-core| |docker_perl-ensembl-core|

   :versions:
      
      

      ``98-2``,  ``98-1``,  ``98-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-list-moreutils: 

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

    pixi global install perl-ensembl-core

to add into an existing workspace instead, run::

    pixi add perl-ensembl-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ensembl-core

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ensembl-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ensembl-core:<tag>

(see `perl-ensembl-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ensembl-core| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-core.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-core
   :alt:   (downloads)
.. |docker_perl-ensembl-core| image:: https://quay.io/repository/biocontainers/perl-ensembl-core/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-core
.. _`perl-ensembl-core/tags`: https://quay.io/repository/biocontainers/perl-ensembl-core?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-core";
        var versions = ["98","98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-core/README.html