:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-detect-software'
.. highlight: bash

perl-term-detect-software
=========================

.. conda:recipe:: perl-term-detect-software
   :replaces_section_title:
   :noindex:

   Detect terminal \(emulator\) software and its capabilities.

   :homepage: https://metacpan.org/pod/Term::Detect::Software
   :license: Perl_5
   :recipe: /`perl-term-detect-software <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software/meta.yaml>`_

   


.. conda:package:: perl-term-detect-software

   |downloads_perl-term-detect-software| |docker_perl-term-detect-software|

   :versions:
      
      

      ``0.227-0``,  ``0.223-0``,  ``0.21-3``,  ``0.21-2``,  ``0.21-1``,  ``0.21-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-experimental: 
   :depends on perl-file-which: 

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

    pixi global install perl-term-detect-software

to add into an existing workspace instead, run::

    pixi add perl-term-detect-software

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-term-detect-software

Alternatively, to install into a new environment, run::

    conda create -n envname perl-term-detect-software

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-term-detect-software:<tag>

(see `perl-term-detect-software/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-term-detect-software| image:: https://img.shields.io/conda/dn/bioconda/perl-term-detect-software.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-detect-software
   :alt:   (downloads)
.. |docker_perl-term-detect-software| image:: https://quay.io/repository/biocontainers/perl-term-detect-software/status
   :target: https://quay.io/repository/biocontainers/perl-term-detect-software
.. _`perl-term-detect-software/tags`: https://quay.io/repository/biocontainers/perl-term-detect-software?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-detect-software";
        var versions = ["0.227","0.223","0.21","0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-detect-software/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-detect-software/README.html