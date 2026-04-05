:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-aceperl'
.. highlight: bash

perl-aceperl
============

.. conda:recipe:: perl-aceperl
   :replaces_section_title:
   :noindex:

   Object\-Oriented Access to ACEDB Databases

   :homepage: http://metacpan.org/pod/AcePerl
   :license: unknown
   :recipe: /`perl-aceperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl/meta.yaml>`_

   


.. conda:package:: perl-aceperl

   |downloads_perl-aceperl| |docker_perl-aceperl|

   :versions:
      
      

      ``1.92-8``,  ``1.92-7``,  ``1.92-6``,  ``1.92-5``,  ``1.92-4``,  ``1.92-3``,  ``1.92-2``,  ``1.92-1``,  ``1.92-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-cache-cache: 
   :depends on perl-digest-md5: 

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

    pixi global install perl-aceperl

to add into an existing workspace instead, run::

    pixi add perl-aceperl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-aceperl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-aceperl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-aceperl:<tag>

(see `perl-aceperl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-aceperl| image:: https://img.shields.io/conda/dn/bioconda/perl-aceperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-aceperl
   :alt:   (downloads)
.. |docker_perl-aceperl| image:: https://quay.io/repository/biocontainers/perl-aceperl/status
   :target: https://quay.io/repository/biocontainers/perl-aceperl
.. _`perl-aceperl/tags`: https://quay.io/repository/biocontainers/perl-aceperl?tab=tags


.. raw:: html

    <script>
        var package = "perl-aceperl";
        var versions = ["1.92","1.92","1.92","1.92","1.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-aceperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-aceperl/README.html