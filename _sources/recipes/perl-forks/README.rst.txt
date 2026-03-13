:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-forks'
.. highlight: bash

perl-forks
==========

.. conda:recipe:: perl-forks
   :replaces_section_title:
   :noindex:

   Drop\-in replacement for Perl threads using fork\(\).

   :homepage: https://metacpan.org/pod/forks
   :license: Perl_5
   :recipe: /`perl-forks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks/meta.yaml>`_

   


.. conda:package:: perl-forks

   |downloads_perl-forks| |docker_perl-forks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.36-10</code>,  <code>0.36-9</code>,  <code>0.36-8</code>,  <code>0.36-7</code>,  <code>0.36-6</code>,  <code>0.36-5</code>,  <code>0.36-4</code>,  <code>0.36-3</code>,  <code>0.36-2</code>,  </span></summary>
      

      ``0.36-10``,  ``0.36-9``,  ``0.36-8``,  ``0.36-7``,  ``0.36-6``,  ``0.36-5``,  ``0.36-4``,  ``0.36-3``,  ``0.36-2``,  ``0.36-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-acme-damn: ``>=0.8,<0.9.0a0``
   :depends on perl-attribute-handlers: 
   :depends on perl-devel-symdump: 
   :depends on perl-list-moreutils: 
   :depends on perl-storable: 
   :depends on perl-sys-sigaction: 
   :depends on perl-time-hires: ``>=1.9764,<2.0a0``

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

    pixi global install perl-forks

to add into an existing workspace instead, run::

    pixi add perl-forks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-forks

Alternatively, to install into a new environment, run::

    conda create -n envname perl-forks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-forks:<tag>

(see `perl-forks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-forks| image:: https://img.shields.io/conda/dn/bioconda/perl-forks.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-forks
   :alt:   (downloads)
.. |docker_perl-forks| image:: https://quay.io/repository/biocontainers/perl-forks/status
   :target: https://quay.io/repository/biocontainers/perl-forks
.. _`perl-forks/tags`: https://quay.io/repository/biocontainers/perl-forks?tab=tags


.. raw:: html

    <script>
        var package = "perl-forks";
        var versions = ["0.36","0.36","0.36","0.36","0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-forks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-forks/README.html