:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-autoconf'
.. highlight: bash

perl-config-autoconf
====================

.. conda:recipe:: perl-config-autoconf
   :replaces_section_title:
   :noindex:

   A module to implement some of AutoConf macros in pure perl.

   :homepage: https://metacpan.org/release/Config-AutoConf
   :license: Perl_5
   :recipe: /`perl-config-autoconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf/meta.yaml>`_

   


.. conda:package:: perl-config-autoconf

   |downloads_perl-config-autoconf| |docker_perl-config-autoconf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.320-4</code>,  <code>0.320-3</code>,  <code>0.320-2</code>,  <code>0.320-1</code>,  <code>0.320-0</code>,  <code>0.317-1</code>,  <code>0.317-0</code>,  <code>0.311-2</code>,  <code>0.311-1</code>,  </span></summary>
      

      ``0.320-4``,  ``0.320-3``,  ``0.320-2``,  ``0.320-1``,  ``0.320-0``,  ``0.317-1``,  ``0.317-0``,  ``0.311-2``,  ``0.311-1``,  ``0.311-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-capture-tiny: 
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-file-temp: 
   :depends on perl-text-parsewords: 

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

    pixi global install perl-config-autoconf

to add into an existing workspace instead, run::

    pixi add perl-config-autoconf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-config-autoconf

Alternatively, to install into a new environment, run::

    conda create -n envname perl-config-autoconf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-config-autoconf:<tag>

(see `perl-config-autoconf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-config-autoconf| image:: https://img.shields.io/conda/dn/bioconda/perl-config-autoconf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-autoconf
   :alt:   (downloads)
.. |docker_perl-config-autoconf| image:: https://quay.io/repository/biocontainers/perl-config-autoconf/status
   :target: https://quay.io/repository/biocontainers/perl-config-autoconf
.. _`perl-config-autoconf/tags`: https://quay.io/repository/biocontainers/perl-config-autoconf?tab=tags


.. raw:: html

    <script>
        var package = "perl-config-autoconf";
        var versions = ["0.320","0.320","0.320","0.320","0.320"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-autoconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-autoconf/README.html