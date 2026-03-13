:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-log4perl'
.. highlight: bash

perl-tie-log4perl
=================

.. conda:recipe:: perl-tie-log4perl
   :replaces_section_title:
   :noindex:

   Tie a filehandle to log via Log4perl

   :homepage: http://metacpan.org/pod/Tie::Log4perl
   :license: perl_5
   :recipe: /`perl-tie-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl/meta.yaml>`_

   


.. conda:package:: perl-tie-log4perl

   |downloads_perl-tie-log4perl| |docker_perl-tie-log4perl|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-log-log4perl: 

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

    pixi global install perl-tie-log4perl

to add into an existing workspace instead, run::

    pixi add perl-tie-log4perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tie-log4perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tie-log4perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tie-log4perl:<tag>

(see `perl-tie-log4perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tie-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-log4perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-log4perl
   :alt:   (downloads)
.. |docker_perl-tie-log4perl| image:: https://quay.io/repository/biocontainers/perl-tie-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-tie-log4perl
.. _`perl-tie-log4perl/tags`: https://quay.io/repository/biocontainers/perl-tie-log4perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-log4perl";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-log4perl/README.html