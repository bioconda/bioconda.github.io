:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tidy'
.. highlight: bash

perl-html-tidy
==============

.. conda:recipe:: perl-html-tidy
   :replaces_section_title:
   :noindex:

   \(X\)HTML validation in a Perl object.

   :homepage: https://github.com/petdance/html-tidy
   :documentation: https://metacpan.org/pod/HTML::Tidy
   
   :license: Artistic_2
   :recipe: /`perl-html-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy/meta.yaml>`_

   


.. conda:package:: perl-html-tidy

   |downloads_perl-html-tidy| |docker_perl-html-tidy|

   :versions:
      
      

      ``1.60-7``,  ``1.60-6``,  ``1.60-5``,  ``1.60-3``,  ``1.60-2``,  ``1.60-1``,  ``1.60-0``,  ``1.56-2``,  ``1.56-1``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-encode: 
   :depends on perl-exporter: 
   :depends on perl-getopt-long: ``>=2.58,<3.0a0``
   :depends on tidyp: ``>=1.4,<2.0a0``

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

    pixi global install perl-html-tidy

to add into an existing workspace instead, run::

    pixi add perl-html-tidy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-tidy

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-tidy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-tidy:<tag>

(see `perl-html-tidy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tidy.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tidy
   :alt:   (downloads)
.. |docker_perl-html-tidy| image:: https://quay.io/repository/biocontainers/perl-html-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-html-tidy
.. _`perl-html-tidy/tags`: https://quay.io/repository/biocontainers/perl-html-tidy?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tidy";
        var versions = ["1.60","1.60","1.60","1.60","1.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tidy/README.html