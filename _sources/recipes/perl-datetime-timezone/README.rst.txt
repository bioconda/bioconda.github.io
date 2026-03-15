:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-timezone'
.. highlight: bash

perl-datetime-timezone
======================

.. conda:recipe:: perl-datetime-timezone
   :replaces_section_title:
   :noindex:

   Time zone object base class and factory.

   :homepage: https://metacpan.org/release/DateTime-TimeZone
   :license: Perl_5
   :recipe: /`perl-datetime-timezone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone/meta.yaml>`_

   


.. conda:package:: perl-datetime-timezone

   |downloads_perl-datetime-timezone| |docker_perl-datetime-timezone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.67-0</code>,  <code>2.66-0</code>,  <code>2.65-1</code>,  <code>2.65-0</code>,  <code>2.57-0</code>,  <code>2.52-1</code>,  <code>2.52-0</code>,  <code>2.51-1</code>,  <code>2.51-0</code>,  </span></summary>
      

      ``2.67-0``,  ``2.66-0``,  ``2.65-1``,  ``2.65-0``,  ``2.57-0``,  ``2.52-1``,  ``2.52-0``,  ``2.51-1``,  ``2.51-0``,  ``2.09-4``,  ``2.09-3``,  ``2.09-2``,  ``2.09-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-module-runtime: ``0.016.*``
   :depends on perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends on perl-params-validationcompiler: ``0.31.*``
   :depends on perl-specio: ``0.53.*``
   :depends on perl-test-fatal: ``0.016.*``
   :depends on perl-try-tiny: ``0.32.*``

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

    pixi global install perl-datetime-timezone

to add into an existing workspace instead, run::

    pixi add perl-datetime-timezone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-datetime-timezone

Alternatively, to install into a new environment, run::

    conda create -n envname perl-datetime-timezone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-datetime-timezone:<tag>

(see `perl-datetime-timezone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-datetime-timezone| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-timezone.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-timezone
   :alt:   (downloads)
.. |docker_perl-datetime-timezone| image:: https://quay.io/repository/biocontainers/perl-datetime-timezone/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-timezone
.. _`perl-datetime-timezone/tags`: https://quay.io/repository/biocontainers/perl-datetime-timezone?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-timezone";
        var versions = ["2.67","2.66","2.65","2.65","2.57"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-timezone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-timezone/README.html