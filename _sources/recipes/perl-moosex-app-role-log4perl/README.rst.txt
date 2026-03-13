:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-app-role-log4perl'
.. highlight: bash

perl-moosex-app-role-log4perl
=============================

.. conda:recipe:: perl-moosex-app-role-log4perl
   :replaces_section_title:
   :noindex:

   Add basic Log\:\:Log4perl logging to a MooseX\:\:App application as a role.

   :homepage: https://metacpan.org/pod/MooseX::App::Role::Log4perl
   :license: perl_5
   :recipe: /`perl-moosex-app-role-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app-role-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app-role-log4perl/meta.yaml>`_

   


.. conda:package:: perl-moosex-app-role-log4perl

   |downloads_perl-moosex-app-role-log4perl| |docker_perl-moosex-app-role-log4perl|

   :versions:
      
      

      ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-log-log4perl: 
   :depends on perl-moosex-app: 

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

    pixi global install perl-moosex-app-role-log4perl

to add into an existing workspace instead, run::

    pixi add perl-moosex-app-role-log4perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-app-role-log4perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-app-role-log4perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-app-role-log4perl:<tag>

(see `perl-moosex-app-role-log4perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-app-role-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app-role-log4perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-app-role-log4perl
   :alt:   (downloads)
.. |docker_perl-moosex-app-role-log4perl| image:: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl
.. _`perl-moosex-app-role-log4perl/tags`: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-app-role-log4perl";
        var versions = ["0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app-role-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app-role-log4perl/README.html