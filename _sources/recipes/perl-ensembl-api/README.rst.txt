:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-api'
.. highlight: bash

perl-ensembl-api
================

.. conda:recipe:: perl-ensembl-api
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-api/meta.yaml>`_

   


.. conda:package:: perl-ensembl-api

   |downloads_perl-ensembl-api| |docker_perl-ensembl-api|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends on perl: 
   :depends on perl-ensembl-compara: ``98.*``
   :depends on perl-ensembl-funcgen: ``98.*``
   :depends on perl-ensembl-io: ``98.*``
   :depends on perl-ensembl-variation: ``98.*``

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

    pixi global install perl-ensembl-api

to add into an existing workspace instead, run::

    pixi add perl-ensembl-api

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ensembl-api

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ensembl-api

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ensembl-api:<tag>

(see `perl-ensembl-api/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ensembl-api| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-api.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-api
   :alt:   (downloads)
.. |docker_perl-ensembl-api| image:: https://quay.io/repository/biocontainers/perl-ensembl-api/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-api
.. _`perl-ensembl-api/tags`: https://quay.io/repository/biocontainers/perl-ensembl-api?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-api";
        var versions = ["98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-api/README.html