:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-version'
.. highlight: bash

perl-perl-version
=================

.. conda:recipe:: perl-perl-version
   :replaces_section_title:
   :noindex:

   Parse and manipulate Perl version strings

   :homepage: http://metacpan.org/pod/Perl::Version
   :license: perl_5
   :recipe: /`perl-perl-version <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version/meta.yaml>`_

   


.. conda:package:: perl-perl-version

   |downloads_perl-perl-version| |docker_perl-perl-version|

   :versions:
      
      

      ``1.019-0``,  ``1.018-0``,  ``1.013-4``,  ``1.013-3``,  ``1.013-2``,  ``1.013-1``,  ``1.013-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-data-dumper: 
   :depends on perl-file-slurp-tiny: 
   :depends on perl-getopt-long: 
   :depends on perl-pod-usage: 

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

    pixi global install perl-perl-version

to add into an existing workspace instead, run::

    pixi add perl-perl-version

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-perl-version

Alternatively, to install into a new environment, run::

    conda create -n envname perl-perl-version

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-perl-version:<tag>

(see `perl-perl-version/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-perl-version| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-version.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-version
   :alt:   (downloads)
.. |docker_perl-perl-version| image:: https://quay.io/repository/biocontainers/perl-perl-version/status
   :target: https://quay.io/repository/biocontainers/perl-perl-version
.. _`perl-perl-version/tags`: https://quay.io/repository/biocontainers/perl-perl-version?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-version";
        var versions = ["1.019","1.018","1.013","1.013","1.013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-version/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-version/README.html