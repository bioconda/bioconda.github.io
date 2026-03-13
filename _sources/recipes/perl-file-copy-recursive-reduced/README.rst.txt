:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-recursive-reduced'
.. highlight: bash

perl-file-copy-recursive-reduced
================================

.. conda:recipe:: perl-file-copy-recursive-reduced
   :replaces_section_title:
   :noindex:

   Recursive copying of files and directories within Perl 5 toolchain.

   :homepage: https://thenceforward.net/perl/modules/File-Copy-Recursive-Reduced
   :documentation: https://metacpan.org/pod/File::Copy::Recursive::Reduced
   
   :license: Perl_5
   :recipe: /`perl-file-copy-recursive-reduced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive-reduced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive-reduced/meta.yaml>`_

   


.. conda:package:: perl-file-copy-recursive-reduced

   |downloads_perl-file-copy-recursive-reduced| |docker_perl-file-copy-recursive-reduced|

   :versions:
      
      

      ``0.008-0``,  ``0.006-1``,  ``0.006-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-path: 

   :additional platforms:
      

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

    pixi global install perl-file-copy-recursive-reduced

to add into an existing workspace instead, run::

    pixi add perl-file-copy-recursive-reduced

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-copy-recursive-reduced

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-copy-recursive-reduced

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-copy-recursive-reduced:<tag>

(see `perl-file-copy-recursive-reduced/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-copy-recursive-reduced| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-recursive-reduced.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-recursive-reduced
   :alt:   (downloads)
.. |docker_perl-file-copy-recursive-reduced| image:: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced
.. _`perl-file-copy-recursive-reduced/tags`: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-recursive-reduced";
        var versions = ["0.008","0.006","0.006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-recursive-reduced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-recursive-reduced/README.html