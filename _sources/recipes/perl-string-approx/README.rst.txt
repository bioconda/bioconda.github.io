:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-approx'
.. highlight: bash

perl-string-approx
==================

.. conda:recipe:: perl-string-approx/3.27
   :replaces_section_title:
   :noindex:

   Perl extension for approximate matching \(fuzzy matching\).

   :homepage: https://metacpan.org/pod/String::Approx
   :license: Unknown
   :recipe: /`perl-string-approx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx>`_/`3.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx/3.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx/3.27/meta.yaml>`_

   


.. conda:package:: perl-string-approx

   |downloads_perl-string-approx| |docker_perl-string-approx|

   :versions:
      
      

      ``3.27-6``,  ``3.27-5``,  ``3.27-4``,  ``3.27-3``,  ``3.27-2``,  ``3.27-1``,  ``3.27-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.26``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-test-more: 

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

    pixi global install perl-string-approx

to add into an existing workspace instead, run::

    pixi add perl-string-approx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-string-approx

Alternatively, to install into a new environment, run::

    conda create -n envname perl-string-approx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-string-approx:<tag>

(see `perl-string-approx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-string-approx| image:: https://img.shields.io/conda/dn/bioconda/perl-string-approx.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-approx
   :alt:   (downloads)
.. |docker_perl-string-approx| image:: https://quay.io/repository/biocontainers/perl-string-approx/status
   :target: https://quay.io/repository/biocontainers/perl-string-approx
.. _`perl-string-approx/tags`: https://quay.io/repository/biocontainers/perl-string-approx?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-approx";
        var versions = ["3.27","3.27","3.27","3.27","3.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-approx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-approx/README.html