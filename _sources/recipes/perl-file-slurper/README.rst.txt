:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-slurper'
.. highlight: bash

perl-file-slurper
=================

.. conda:recipe:: perl-file-slurper
   :replaces_section_title:
   :noindex:

   A simple\, sane and efficient module to slurp a file

   :homepage: http://metacpan.org/pod/File-Slurper
   :license: perl_5
   :recipe: /`perl-file-slurper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper/meta.yaml>`_

   


.. conda:package:: perl-file-slurper

   |downloads_perl-file-slurper| |docker_perl-file-slurper|

   :versions:
      
      

      ``0.014-0``,  ``0.013-0``,  ``0.012-1``,  ``0.012-0``,  ``0.008-2``,  ``0.008-1``,  ``0.008-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-encode: 
   :depends on perl-exporter: 

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

    pixi global install perl-file-slurper

to add into an existing workspace instead, run::

    pixi add perl-file-slurper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-slurper

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-slurper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-slurper:<tag>

(see `perl-file-slurper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-slurper| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-slurper
   :alt:   (downloads)
.. |docker_perl-file-slurper| image:: https://quay.io/repository/biocontainers/perl-file-slurper/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurper
.. _`perl-file-slurper/tags`: https://quay.io/repository/biocontainers/perl-file-slurper?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-slurper";
        var versions = ["0.014","0.013","0.012","0.012","0.008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurper/README.html