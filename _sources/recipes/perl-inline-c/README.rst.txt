:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-inline-c'
.. highlight: bash

perl-inline-c
=============

.. conda:recipe:: perl-inline-c
   :replaces_section_title:
   :noindex:

   C Language Support for Inline.

   :homepage: https://github.com/ingydotnet/inline-c-pm
   :documentation: https://metacpan.org/dist/Inline-C
   
   :license: Perl_5
   :recipe: /`perl-inline-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c/meta.yaml>`_

   


.. conda:package:: perl-inline-c

   |downloads_perl-inline-c| |docker_perl-inline-c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.82-2</code>,  <code>0.82-1</code>,  <code>0.82-0</code>,  <code>0.81-3</code>,  <code>0.81-2</code>,  <code>0.81-1</code>,  <code>0.81-0</code>,  <code>0.78-1</code>,  <code>0.78-0</code>,  </span></summary>
      

      ``0.82-2``,  ``0.82-1``,  ``0.82-0``,  ``0.81-3``,  ``0.81-2``,  ``0.81-1``,  ``0.81-0``,  ``0.78-1``,  ``0.78-0``,  ``0.76-1``,  ``0.76-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gcc_linux-64: ``13.*``
   :depends on libgcc: ``>=13``
   :depends on make: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-autodie: ``>=2.37,<3.0a0``
   :depends on perl-extutils-makemaker: 
   :depends on perl-file-copy-recursive: ``>=0.45,<0.46.0a0``
   :depends on perl-file-sharedir-install: ``>=0.14,<0.15.0a0``
   :depends on perl-file-spec: 
   :depends on perl-inline: ``>=0.87,<0.88.0a0``
   :depends on perl-parse-recdescent: 
   :depends on perl-pegex: ``>=0.75,<0.76.0a0``
   :depends on perl-yaml-libyaml: ``0.904.0.*``

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

    pixi global install perl-inline-c

to add into an existing workspace instead, run::

    pixi add perl-inline-c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-inline-c

Alternatively, to install into a new environment, run::

    conda create -n envname perl-inline-c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-inline-c:<tag>

(see `perl-inline-c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-inline-c| image:: https://img.shields.io/conda/dn/bioconda/perl-inline-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-inline-c
   :alt:   (downloads)
.. |docker_perl-inline-c| image:: https://quay.io/repository/biocontainers/perl-inline-c/status
   :target: https://quay.io/repository/biocontainers/perl-inline-c
.. _`perl-inline-c/tags`: https://quay.io/repository/biocontainers/perl-inline-c?tab=tags


.. raw:: html

    <script>
        var package = "perl-inline-c";
        var versions = ["0.82","0.82","0.82","0.81","0.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline-c/README.html