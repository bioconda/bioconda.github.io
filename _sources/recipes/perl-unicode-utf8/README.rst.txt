:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-utf8'
.. highlight: bash

perl-unicode-utf8
=================

.. conda:recipe:: perl-unicode-utf8
   :replaces_section_title:
   :noindex:

   Encoding and decoding of UTF\-8 encoding form

   :homepage: http://metacpan.org/pod/Unicode::UTF8
   :license: perl_5
   :recipe: /`perl-unicode-utf8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8/meta.yaml>`_

   


.. conda:package:: perl-unicode-utf8

   |downloads_perl-unicode-utf8| |docker_perl-unicode-utf8|

   :versions:
      
      

      ``0.66-0``,  ``0.62-8``,  ``0.62-7``,  ``0.62-6``,  ``0.62-5``,  ``0.62-4``,  ``0.62-3``,  ``0.62-1``,  ``0.62-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-test-fatal: ``0.016.*``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install perl-unicode-utf8

to add into an existing workspace instead, run::

    pixi add perl-unicode-utf8

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-unicode-utf8

Alternatively, to install into a new environment, run::

    conda create -n envname perl-unicode-utf8

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-unicode-utf8:<tag>

(see `perl-unicode-utf8/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-unicode-utf8| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-utf8.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-utf8
   :alt:   (downloads)
.. |docker_perl-unicode-utf8| image:: https://quay.io/repository/biocontainers/perl-unicode-utf8/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-utf8
.. _`perl-unicode-utf8/tags`: https://quay.io/repository/biocontainers/perl-unicode-utf8?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-utf8";
        var versions = ["0.66","0.62","0.62","0.62","0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-utf8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-utf8/README.html