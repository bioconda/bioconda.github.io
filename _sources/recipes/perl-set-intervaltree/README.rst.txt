:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-intervaltree'
.. highlight: bash

perl-set-intervaltree
=====================

.. conda:recipe:: perl-set-intervaltree
   :replaces_section_title:
   :noindex:

   An interval tree implementation in PERL.

   :homepage: https://metacpan.org/pod/Set::IntervalTree
   :license: Perl_5
   :recipe: /`perl-set-intervaltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree/meta.yaml>`_

   


.. conda:package:: perl-set-intervaltree

   |downloads_perl-set-intervaltree| |docker_perl-set-intervaltree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12-6</code>,  <code>0.12-5</code>,  <code>0.12-4</code>,  <code>0.12-3</code>,  <code>0.12-2</code>,  <code>0.12-1</code>,  <code>0.12-0</code>,  <code>0.11-1</code>,  <code>0.11-0</code>,  </span></summary>
      

      ``0.12-6``,  ``0.12-5``,  ``0.12-4``,  ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``,  ``0.11-1``,  ``0.11-0``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-extutils-cppguess: ``>=0.26,<0.27.0a0``

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

    pixi global install perl-set-intervaltree

to add into an existing workspace instead, run::

    pixi add perl-set-intervaltree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-set-intervaltree

Alternatively, to install into a new environment, run::

    conda create -n envname perl-set-intervaltree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-set-intervaltree:<tag>

(see `perl-set-intervaltree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-set-intervaltree| image:: https://img.shields.io/conda/dn/bioconda/perl-set-intervaltree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-intervaltree
   :alt:   (downloads)
.. |docker_perl-set-intervaltree| image:: https://quay.io/repository/biocontainers/perl-set-intervaltree/status
   :target: https://quay.io/repository/biocontainers/perl-set-intervaltree
.. _`perl-set-intervaltree/tags`: https://quay.io/repository/biocontainers/perl-set-intervaltree?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-intervaltree";
        var versions = ["0.12","0.12","0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-intervaltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-intervaltree/README.html