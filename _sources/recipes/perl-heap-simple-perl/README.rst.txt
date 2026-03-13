:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-heap-simple-perl'
.. highlight: bash

perl-heap-simple-perl
=====================

.. conda:recipe:: perl-heap-simple-perl
   :replaces_section_title:
   :noindex:

   A pure perl implementation of the Heap\:\:Simple interface

   :homepage: http://metacpan.org/pod/Heap::Simple::Perl
   :license: unknown
   :recipe: /`perl-heap-simple-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-heap-simple-perl/meta.yaml>`_

   


.. conda:package:: perl-heap-simple-perl

   |downloads_perl-heap-simple-perl| |docker_perl-heap-simple-perl|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
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

    pixi global install perl-heap-simple-perl

to add into an existing workspace instead, run::

    pixi add perl-heap-simple-perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-heap-simple-perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-heap-simple-perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-heap-simple-perl:<tag>

(see `perl-heap-simple-perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-heap-simple-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-heap-simple-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-heap-simple-perl
   :alt:   (downloads)
.. |docker_perl-heap-simple-perl| image:: https://quay.io/repository/biocontainers/perl-heap-simple-perl/status
   :target: https://quay.io/repository/biocontainers/perl-heap-simple-perl
.. _`perl-heap-simple-perl/tags`: https://quay.io/repository/biocontainers/perl-heap-simple-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-heap-simple-perl";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-heap-simple-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-heap-simple-perl/README.html