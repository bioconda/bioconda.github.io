:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-recursive'
.. highlight: bash

perl-file-copy-recursive
========================

.. conda:recipe:: perl-file-copy-recursive
   :replaces_section_title:
   :noindex:

   Perl extension for recursively copying files and directories

   :homepage: https://metacpan.org/pod/File::Copy::Recursive
   :license: Perl
   :recipe: /`perl-file-copy-recursive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive/meta.yaml>`_

   


.. conda:package:: perl-file-copy-recursive

   |downloads_perl-file-copy-recursive| |docker_perl-file-copy-recursive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.45-5</code>,  <code>0.45-4</code>,  <code>0.45-3</code>,  <code>0.45-2</code>,  <code>0.45-1</code>,  <code>0.45-0</code>,  <code>0.44-1</code>,  <code>0.44-0</code>,  <code>0.38-3</code>,  </span></summary>
      

      ``0.45-5``,  ``0.45-4``,  ``0.45-3``,  ``0.45-2``,  ``0.45-1``,  ``0.45-0``,  ``0.44-1``,  ``0.44-0``,  ``0.38-3``,  ``0.38-2``,  ``0.38-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-test-fatal: ``0.016.*``
   :depends on perl-test-warnings: ``0.031.*``

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

    pixi global install perl-file-copy-recursive

to add into an existing workspace instead, run::

    pixi add perl-file-copy-recursive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-copy-recursive

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-copy-recursive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-copy-recursive:<tag>

(see `perl-file-copy-recursive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-copy-recursive| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-recursive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-recursive
   :alt:   (downloads)
.. |docker_perl-file-copy-recursive| image:: https://quay.io/repository/biocontainers/perl-file-copy-recursive/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-recursive
.. _`perl-file-copy-recursive/tags`: https://quay.io/repository/biocontainers/perl-file-copy-recursive?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-recursive";
        var versions = ["0.45","0.45","0.45","0.45","0.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html