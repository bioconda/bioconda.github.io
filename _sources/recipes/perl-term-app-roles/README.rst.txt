:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-app-roles'
.. highlight: bash

perl-term-app-roles
===================

.. conda:recipe:: perl-term-app-roles
   :replaces_section_title:
   :noindex:

   Collection of roles for terminal\-based application

   :homepage: https://metacpan.org/release/Term-App-Roles
   :license: perl_5
   :recipe: /`perl-term-app-roles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles/meta.yaml>`_

   


.. conda:package:: perl-term-app-roles

   |downloads_perl-term-app-roles| |docker_perl-term-app-roles|

   :versions:
      
      

      ``0.031-0``,  ``0.030-1``,  ``0.030-0``,  ``0.02-0``,  ``0.01-2``,  ``0.01-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-moo: 
   :depends on perl-term-detect-software: 

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

    pixi global install perl-term-app-roles

to add into an existing workspace instead, run::

    pixi add perl-term-app-roles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-term-app-roles

Alternatively, to install into a new environment, run::

    conda create -n envname perl-term-app-roles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-term-app-roles:<tag>

(see `perl-term-app-roles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-term-app-roles| image:: https://img.shields.io/conda/dn/bioconda/perl-term-app-roles.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-app-roles
   :alt:   (downloads)
.. |docker_perl-term-app-roles| image:: https://quay.io/repository/biocontainers/perl-term-app-roles/status
   :target: https://quay.io/repository/biocontainers/perl-term-app-roles
.. _`perl-term-app-roles/tags`: https://quay.io/repository/biocontainers/perl-term-app-roles?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-app-roles";
        var versions = ["0.031","0.030","0.030","0.02","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-app-roles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-app-roles/README.html