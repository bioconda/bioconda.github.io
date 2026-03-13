:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-link'
.. highlight: bash

perl-file-copy-link
===================

.. conda:recipe:: perl-file-copy-link
   :replaces_section_title:
   :noindex:

   Perl extension for replacing a link by a copy of the linked file.

   :homepage: https://metacpan.org/pod/File::Copy::Link
   :license: Perl
   :recipe: /`perl-file-copy-link <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link/meta.yaml>`_

   


.. conda:package:: perl-file-copy-link

   |downloads_perl-file-copy-link| |docker_perl-file-copy-link|

   :versions:
      
      

      ``0.200-0``,  ``0.140-7``,  ``0.140-6``,  ``0.140-5``,  ``0.140-4``,  ``0.140-3``,  ``0.140-2``,  ``0.140-1``,  ``0.140-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-module-build: ``0.4234.*``

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

    pixi global install perl-file-copy-link

to add into an existing workspace instead, run::

    pixi add perl-file-copy-link

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-copy-link

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-copy-link

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-copy-link:<tag>

(see `perl-file-copy-link/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-copy-link| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-link.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-link
   :alt:   (downloads)
.. |docker_perl-file-copy-link| image:: https://quay.io/repository/biocontainers/perl-file-copy-link/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-link
.. _`perl-file-copy-link/tags`: https://quay.io/repository/biocontainers/perl-file-copy-link?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-link";
        var versions = ["0.200","0.140","0.140","0.140","0.140"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-link/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-link/README.html