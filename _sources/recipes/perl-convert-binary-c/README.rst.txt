:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-convert-binary-c'
.. highlight: bash

perl-convert-binary-c
=====================

.. conda:recipe:: perl-convert-binary-c
   :replaces_section_title:
   :noindex:

   Binary Data Conversion using C Types

   :homepage: http://search.cpan.org/~mhx/Convert-Binary-C/
   :license: perl_5
   :recipe: /`perl-convert-binary-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c/meta.yaml>`_

   


.. conda:package:: perl-convert-binary-c

   |downloads_perl-convert-binary-c| |docker_perl-convert-binary-c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.86-0</code>,  <code>0.85-2</code>,  <code>0.85-1</code>,  <code>0.85-0</code>,  <code>0.84-3</code>,  <code>0.84-2</code>,  <code>0.84-1</code>,  <code>0.84-0</code>,  <code>0.78-4</code>,  </span></summary>
      

      ``0.86-0``,  ``0.85-2``,  ``0.85-1``,  ``0.85-0``,  ``0.84-3``,  ``0.84-2``,  ``0.84-1``,  ``0.84-0``,  ``0.78-4``,  ``0.78-3``,  ``0.78-2``,  ``0.78-1``,  ``0.78-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install perl-convert-binary-c

to add into an existing workspace instead, run::

    pixi add perl-convert-binary-c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-convert-binary-c

Alternatively, to install into a new environment, run::

    conda create -n envname perl-convert-binary-c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-convert-binary-c:<tag>

(see `perl-convert-binary-c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-convert-binary-c| image:: https://img.shields.io/conda/dn/bioconda/perl-convert-binary-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-convert-binary-c
   :alt:   (downloads)
.. |docker_perl-convert-binary-c| image:: https://quay.io/repository/biocontainers/perl-convert-binary-c/status
   :target: https://quay.io/repository/biocontainers/perl-convert-binary-c
.. _`perl-convert-binary-c/tags`: https://quay.io/repository/biocontainers/perl-convert-binary-c?tab=tags


.. raw:: html

    <script>
        var package = "perl-convert-binary-c";
        var versions = ["0.86","0.85","0.85","0.85","0.84"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-convert-binary-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-convert-binary-c/README.html