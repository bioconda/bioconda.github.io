:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-probe-perl'
.. highlight: bash

perl-probe-perl
===============

.. conda:recipe:: perl-probe-perl
   :replaces_section_title:
   :noindex:

   Information about the currently running perl

   :homepage: http://metacpan.org/pod/Probe::Perl
   :license: perl_5
   :recipe: /`perl-probe-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl/meta.yaml>`_

   


.. conda:package:: perl-probe-perl

   |downloads_perl-probe-perl| |docker_perl-probe-perl|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-probe-perl

to add into an existing workspace instead, run::

    pixi add perl-probe-perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-probe-perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-probe-perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-probe-perl:<tag>

(see `perl-probe-perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-probe-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-probe-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-probe-perl
   :alt:   (downloads)
.. |docker_perl-probe-perl| image:: https://quay.io/repository/biocontainers/perl-probe-perl/status
   :target: https://quay.io/repository/biocontainers/perl-probe-perl
.. _`perl-probe-perl/tags`: https://quay.io/repository/biocontainers/perl-probe-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-probe-perl";
        var versions = ["0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-probe-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-probe-perl/README.html