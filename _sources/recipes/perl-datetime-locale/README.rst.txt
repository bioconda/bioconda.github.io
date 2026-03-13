:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-locale'
.. highlight: bash

perl-datetime-locale
====================

.. conda:recipe:: perl-datetime-locale
   :replaces_section_title:
   :noindex:

   Localization support for DateTime.pm.

   :homepage: https://metacpan.org/pod/DateTime::Locale
   :license: Perl_5
   :recipe: /`perl-datetime-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale/meta.yaml>`_

   


.. conda:package:: perl-datetime-locale

   |downloads_perl-datetime-locale| |docker_perl-datetime-locale|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.45-1</code>,  <code>1.45-0</code>,  <code>1.44-1</code>,  <code>1.44-0</code>,  <code>1.43-0</code>,  <code>1.39-0</code>,  <code>1.38-1</code>,  <code>1.38-0</code>,  <code>1.37-0</code>,  </span></summary>
      

      ``1.45-1``,  ``1.45-0``,  ``1.44-1``,  ``1.44-0``,  ``1.43-0``,  ``1.39-0``,  ``1.38-1``,  ``1.38-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.12-5``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-cpan-meta-check: ``0.014.*``
   :depends on perl-dist-checkconflicts: ``0.11.*``
   :depends on perl-file-sharedir: 
   :depends on perl-file-sharedir-install: ``>=0.14,<0.15.0a0``
   :depends on perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends on perl-params-validationcompiler: ``0.31.*``
   :depends on perl-specio: ``0.52.*``
   :depends on perl-test-warnings: ``0.031.*``
   :depends on perl-test2-plugin-nowarnings: ``0.09.*``

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

    pixi global install perl-datetime-locale

to add into an existing workspace instead, run::

    pixi add perl-datetime-locale

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-datetime-locale

Alternatively, to install into a new environment, run::

    conda create -n envname perl-datetime-locale

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-datetime-locale:<tag>

(see `perl-datetime-locale/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-datetime-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-locale.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-locale
   :alt:   (downloads)
.. |docker_perl-datetime-locale| image:: https://quay.io/repository/biocontainers/perl-datetime-locale/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-locale
.. _`perl-datetime-locale/tags`: https://quay.io/repository/biocontainers/perl-datetime-locale?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-locale";
        var versions = ["1.45","1.45","1.44","1.44","1.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-locale/README.html