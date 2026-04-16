:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-methodmaker'
.. highlight: bash

perl-class-methodmaker
======================

.. conda:recipe:: perl-class-methodmaker
   :replaces_section_title:
   :noindex:

   Create generic methods for OO Perl

   :homepage: http://search.cpan.org/~schwigon/Class-MethodMaker-2.24/
   :license: perl_5
   :recipe: /`perl-class-methodmaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker/meta.yaml>`_

   


.. conda:package:: perl-class-methodmaker

   |downloads_perl-class-methodmaker| |docker_perl-class-methodmaker|

   :versions:
      
      

      ``2.25-1``,  ``2.25-0``,  ``2.24-5``,  ``2.24-4``,  ``2.24-3``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-getopt-long: ``>=2.58,<3.0a0``
   :depends on perl-pod-escapes: 
   :depends on perl-test: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-class-methodmaker

to add into an existing workspace instead, run::

    pixi add perl-class-methodmaker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-class-methodmaker

Alternatively, to install into a new environment, run::

    conda create -n envname perl-class-methodmaker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-class-methodmaker:<tag>

(see `perl-class-methodmaker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-class-methodmaker| image:: https://img.shields.io/conda/dn/bioconda/perl-class-methodmaker.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-methodmaker
   :alt:   (downloads)
.. |docker_perl-class-methodmaker| image:: https://quay.io/repository/biocontainers/perl-class-methodmaker/status
   :target: https://quay.io/repository/biocontainers/perl-class-methodmaker
.. _`perl-class-methodmaker/tags`: https://quay.io/repository/biocontainers/perl-class-methodmaker?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-methodmaker";
        var versions = ["2.25","2.25","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-methodmaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-methodmaker/README.html