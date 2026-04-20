:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio-gzip'
.. highlight: bash

perl-perlio-gzip
================

.. conda:recipe:: perl-perlio-gzip
   :replaces_section_title:
   :noindex:

   PerlIO interface to gzip\/gunzip

   :homepage: http://metacpan.org/pod/PerlIO-gzip
   :license: perl_5
   :recipe: /`perl-perlio-gzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip/meta.yaml>`_

   


.. conda:package:: perl-perlio-gzip

   |downloads_perl-perlio-gzip| |docker_perl-perlio-gzip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.20-7</code>,  <code>0.20-6</code>,  <code>0.20-5</code>,  <code>0.20-4</code>,  <code>0.20-3</code>,  <code>0.20-2</code>,  <code>0.20-1</code>,  <code>0.20-0</code>,  <code>0.19-3</code>,  </span></summary>
      

      ``0.20-7``,  ``0.20-6``,  ``0.20-5``,  ``0.20-4``,  ``0.20-3``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``,  ``0.19-3``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on zlib: 

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

    pixi global install perl-perlio-gzip

to add into an existing workspace instead, run::

    pixi add perl-perlio-gzip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-perlio-gzip

Alternatively, to install into a new environment, run::

    conda create -n envname perl-perlio-gzip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-perlio-gzip:<tag>

(see `perl-perlio-gzip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-perlio-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-gzip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio-gzip
   :alt:   (downloads)
.. |docker_perl-perlio-gzip| image:: https://quay.io/repository/biocontainers/perl-perlio-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-gzip
.. _`perl-perlio-gzip/tags`: https://quay.io/repository/biocontainers/perl-perlio-gzip?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio-gzip";
        var versions = ["0.20","0.20","0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-gzip/README.html