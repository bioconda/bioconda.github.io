:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-time-hires'
.. highlight: bash

perl-time-hires
===============

.. conda:recipe:: perl-time-hires
   :replaces_section_title:
   :noindex:

   High resolution alarm\, sleep\, gettimeofday\, interval timers

   :homepage: http://metacpan.org/pod/Time::HiRes
   :license: perl_5
   :recipe: /`perl-time-hires <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires/meta.yaml>`_

   


.. conda:package:: perl-time-hires

   |downloads_perl-time-hires| |docker_perl-time-hires|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9764-6</code>,  <code>1.9764-5</code>,  <code>1.9764-4</code>,  <code>1.9764-3</code>,  <code>1.9764-2</code>,  <code>1.9764-1</code>,  <code>1.9760-2</code>,  <code>1.9760-1</code>,  <code>1.9760-0</code>,  </span></summary>
      

      ``1.9764-6``,  ``1.9764-5``,  ``1.9764-4``,  ``1.9764-3``,  ``1.9764-2``,  ``1.9764-1``,  ``1.9760-2``,  ``1.9760-1``,  ``1.9760-0``,  ``1.9758-1``,  ``1.9758-0``,  ``1.9728-5``,  ``1.9728-4``,  ``1.9728-2``,  ``1.9728-1``,  ``1.9728-0``,  ``1.9726-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-extutils-makemaker: 

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

    pixi global install perl-time-hires

to add into an existing workspace instead, run::

    pixi add perl-time-hires

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-time-hires

Alternatively, to install into a new environment, run::

    conda create -n envname perl-time-hires

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-time-hires:<tag>

(see `perl-time-hires/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-time-hires| image:: https://img.shields.io/conda/dn/bioconda/perl-time-hires.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-time-hires
   :alt:   (downloads)
.. |docker_perl-time-hires| image:: https://quay.io/repository/biocontainers/perl-time-hires/status
   :target: https://quay.io/repository/biocontainers/perl-time-hires
.. _`perl-time-hires/tags`: https://quay.io/repository/biocontainers/perl-time-hires?tab=tags


.. raw:: html

    <script>
        var package = "perl-time-hires";
        var versions = ["1.9764","1.9764","1.9764","1.9764","1.9764"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-hires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-hires/README.html