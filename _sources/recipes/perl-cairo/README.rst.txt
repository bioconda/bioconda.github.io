:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cairo'
.. highlight: bash

perl-cairo
==========

.. conda:recipe:: perl-cairo
   :replaces_section_title:
   :noindex:

   Perl interface to the cairo 2d vector graphics library

   :homepage: http://gtk2-perl.sourceforge.net
   :license: lgpl_2_1
   :recipe: /`perl-cairo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo/meta.yaml>`_

   


.. conda:package:: perl-cairo

   |downloads_perl-cairo| |docker_perl-cairo|

   :versions:
      
      

      ``1.109-2``,  ``1.109-1``,  ``1.109-0``,  ``1.106-2``,  ``1.106-1``,  ``1.106-0``

      

   
   :depends on cairo: ``>=1.16.0,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-extutils-depends: 
   :depends on perl-extutils-pkgconfig: 
   :depends on xorg-libsm: 
   :depends on xorg-libxext: 
   :depends on xorg-libxrender: 

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

    pixi global install perl-cairo

to add into an existing workspace instead, run::

    pixi add perl-cairo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-cairo

Alternatively, to install into a new environment, run::

    conda create -n envname perl-cairo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-cairo:<tag>

(see `perl-cairo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-cairo| image:: https://img.shields.io/conda/dn/bioconda/perl-cairo.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cairo
   :alt:   (downloads)
.. |docker_perl-cairo| image:: https://quay.io/repository/biocontainers/perl-cairo/status
   :target: https://quay.io/repository/biocontainers/perl-cairo
.. _`perl-cairo/tags`: https://quay.io/repository/biocontainers/perl-cairo?tab=tags


.. raw:: html

    <script>
        var package = "perl-cairo";
        var versions = ["1.109","1.109","1.109","1.106","1.106"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cairo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cairo/README.html