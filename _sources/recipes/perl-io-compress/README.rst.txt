:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-compress'
.. highlight: bash

perl-io-compress
================

.. conda:recipe:: perl-io-compress
   :replaces_section_title:
   :noindex:

   IO Interface to compressed data files\/buffers.

   :homepage: https://metacpan.org/pod/IO::Compress
   :developer docs: https://github.com/pmqs/IO-Compress
   :license: Perl_5
   :recipe: /`perl-io-compress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress/meta.yaml>`_

   


.. conda:package:: perl-io-compress

   |downloads_perl-io-compress| |docker_perl-io-compress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.216-0</code>,  <code>2.215-0</code>,  <code>2.214-0</code>,  <code>2.213-0</code>,  <code>2.201-5</code>,  <code>2.201-4</code>,  <code>2.201-3</code>,  <code>2.201-2</code>,  <code>2.201-1</code>,  </span></summary>
      

      ``2.216-0``,  ``2.215-0``,  ``2.214-0``,  ``2.213-0``,  ``2.201-5``,  ``2.201-4``,  ``2.201-3``,  ``2.201-2``,  ``2.201-1``,  ``2.201-0``,  ``2.106-1``,  ``2.106-0``,  ``2.102-1``,  ``2.102-0``,  ``2.087-1``,  ``2.087-0``,  ``2.086-0``,  ``2.084-0``,  ``2.083-0``,  ``2.081-0``,  ``2.069-5``,  ``2.069-4``,  ``2.069-2``,  ``2.069-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-compress-raw-bzip2: ``>=2.214``
   :depends on perl-compress-raw-zlib: ``>=2.214``
   :depends on perl-encode: 
   :depends on perl-scalar-list-utils: 

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

    pixi global install perl-io-compress

to add into an existing workspace instead, run::

    pixi add perl-io-compress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-compress

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-compress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-compress:<tag>

(see `perl-io-compress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-compress| image:: https://img.shields.io/conda/dn/bioconda/perl-io-compress.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-compress
   :alt:   (downloads)
.. |docker_perl-io-compress| image:: https://quay.io/repository/biocontainers/perl-io-compress/status
   :target: https://quay.io/repository/biocontainers/perl-io-compress
.. _`perl-io-compress/tags`: https://quay.io/repository/biocontainers/perl-io-compress?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-compress";
        var versions = ["2.216","2.215","2.214","2.213","2.201"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-compress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-compress/README.html