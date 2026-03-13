:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-url-encode'
.. highlight: bash

perl-url-encode
===============

.. conda:recipe:: perl-url-encode
   :replaces_section_title:
   :noindex:

   Encoding and decoding of application\/x\-www\-form\-urlencoded encoding.

   :homepage: http://metacpan.org/pod/URL-Encode
   :license: perl_5
   :recipe: /`perl-url-encode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode/meta.yaml>`_

   


.. conda:package:: perl-url-encode

   |downloads_perl-url-encode| |docker_perl-url-encode|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``

      

   
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

    pixi global install perl-url-encode

to add into an existing workspace instead, run::

    pixi add perl-url-encode

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-url-encode

Alternatively, to install into a new environment, run::

    conda create -n envname perl-url-encode

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-url-encode:<tag>

(see `perl-url-encode/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-url-encode| image:: https://img.shields.io/conda/dn/bioconda/perl-url-encode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-url-encode
   :alt:   (downloads)
.. |docker_perl-url-encode| image:: https://quay.io/repository/biocontainers/perl-url-encode/status
   :target: https://quay.io/repository/biocontainers/perl-url-encode
.. _`perl-url-encode/tags`: https://quay.io/repository/biocontainers/perl-url-encode?tab=tags


.. raw:: html

    <script>
        var package = "perl-url-encode";
        var versions = ["0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-url-encode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-url-encode/README.html