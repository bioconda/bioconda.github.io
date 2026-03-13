:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-random'
.. highlight: bash

perl-crypt-openssl-random
=========================

.. conda:recipe:: perl-crypt-openssl-random/0.11
   :replaces_section_title:
   :noindex:

   OpenSSL\/LibreSSL pseudo\-random number generator access

   :homepage: http://sourceforge.net/projects/perl-openssl/
   :license: perl_5
   :recipe: /`perl-crypt-openssl-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-random

   |downloads_perl-crypt-openssl-random| |docker_perl-crypt-openssl-random|

   :versions:
      
      

      ``0.11-7``,  ``0.11-6``,  ``0.11-5``,  ``0.11-4``,  ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on openssl: ``>=3.4.0,<4.0a0``
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

    pixi global install perl-crypt-openssl-random

to add into an existing workspace instead, run::

    pixi add perl-crypt-openssl-random

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-crypt-openssl-random

Alternatively, to install into a new environment, run::

    conda create -n envname perl-crypt-openssl-random

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-crypt-openssl-random:<tag>

(see `perl-crypt-openssl-random/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-crypt-openssl-random| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-random
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-random| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-random/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-random
.. _`perl-crypt-openssl-random/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-random";
        var versions = ["0.11","0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html