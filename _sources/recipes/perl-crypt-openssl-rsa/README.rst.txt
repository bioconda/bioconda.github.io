:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-rsa'
.. highlight: bash

perl-crypt-openssl-rsa
======================

.. conda:recipe:: perl-crypt-openssl-rsa
   :replaces_section_title:
   :noindex:

   RSA encoding and decoding\, using the openSSL libraries

   :homepage: http://github.com/toddr/Crypt-OpenSSL-RSA
   :license: perl_5
   :recipe: /`perl-crypt-openssl-rsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-rsa

   |downloads_perl-crypt-openssl-rsa| |docker_perl-crypt-openssl-rsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.37-0</code>,  <code>0.35-0</code>,  <code>0.34-0</code>,  <code>0.33-4</code>,  <code>0.33-3</code>,  <code>0.33-2</code>,  <code>0.33-1</code>,  <code>0.33-0</code>,  <code>0.32-1</code>,  </span></summary>
      

      ``0.37-0``,  ``0.35-0``,  ``0.34-0``,  ``0.33-4``,  ``0.33-3``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.32-1``,  ``0.32-0``,  ``0.28-1``,  ``0.28-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on openssl: ``>=3.5.4,<4.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-crypt-openssl-guess: ``0.15.*``
   :depends on perl-crypt-openssl-random: ``>=0.11,<0.12.0a0``

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

    pixi global install perl-crypt-openssl-rsa

to add into an existing workspace instead, run::

    pixi add perl-crypt-openssl-rsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-crypt-openssl-rsa

Alternatively, to install into a new environment, run::

    conda create -n envname perl-crypt-openssl-rsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-crypt-openssl-rsa:<tag>

(see `perl-crypt-openssl-rsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-crypt-openssl-rsa| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-rsa.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-rsa
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-rsa| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa
.. _`perl-crypt-openssl-rsa/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-rsa";
        var versions = ["0.37","0.35","0.34","0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html