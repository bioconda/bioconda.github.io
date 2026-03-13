:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-unsafe-signals'
.. highlight: bash

perl-perl-unsafe-signals
========================

.. conda:recipe:: perl-perl-unsafe-signals
   :replaces_section_title:
   :noindex:

   Allow unsafe handling of signals in selected blocks

   :homepage: http://metacpan.org/pod/Perl::Unsafe::Signals
   :license: perl_5
   :recipe: /`perl-perl-unsafe-signals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals/meta.yaml>`_

   


.. conda:package:: perl-perl-unsafe-signals

   |downloads_perl-perl-unsafe-signals| |docker_perl-perl-unsafe-signals|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.03-9</code>,  <code>0.03-8</code>,  <code>0.03-7</code>,  <code>0.03-6</code>,  <code>0.03-5</code>,  <code>0.03-4</code>,  <code>0.03-3</code>,  <code>0.03-2</code>,  <code>0.03-1</code>,  </span></summary>
      

      ``0.03-9``,  ``0.03-8``,  ``0.03-7``,  ``0.03-6``,  ``0.03-5``,  ``0.03-4``,  ``0.03-3``,  ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      
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

    pixi global install perl-perl-unsafe-signals

to add into an existing workspace instead, run::

    pixi add perl-perl-unsafe-signals

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-perl-unsafe-signals

Alternatively, to install into a new environment, run::

    conda create -n envname perl-perl-unsafe-signals

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-perl-unsafe-signals:<tag>

(see `perl-perl-unsafe-signals/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-perl-unsafe-signals| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-unsafe-signals.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-unsafe-signals
   :alt:   (downloads)
.. |docker_perl-perl-unsafe-signals| image:: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals/status
   :target: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals
.. _`perl-perl-unsafe-signals/tags`: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-unsafe-signals";
        var versions = ["0.03","0.03","0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html