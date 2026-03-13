:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-mlst-check'
.. highlight: bash

perl-bio-mlst-check
===================

.. conda:recipe:: perl-bio-mlst-check
   :replaces_section_title:
   :noindex:

   Multilocus sequence type checking using blast

   :homepage: http://www.sanger.ac.uk/
   :license: gpl_3
   :recipe: /`perl-bio-mlst-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check/meta.yaml>`_

   


.. conda:package:: perl-bio-mlst-check

   |downloads_perl-bio-mlst-check| |docker_perl-bio-mlst-check|

   :versions:
      
      

      ``2.1.1706216-3``,  ``2.1.1706216-2``,  ``2.1.1706216-1``,  ``2.1.1706216-0``

      

   
   :depends on blast: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-procedural: 
   :depends on perl-bioperl: 
   :depends on perl-data-dumper: 
   :depends on perl-exporter: 
   :depends on perl-file-path: 
   :depends on perl-file-temp: 
   :depends on perl-file-which: 
   :depends on perl-getopt-long: 
   :depends on perl-io-scalar: 
   :depends on perl-lib: 
   :depends on perl-libwww-perl: 
   :depends on perl-lwp-simple: 
   :depends on perl-moose: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-regexp-common: 
   :depends on perl-text-csv: 
   :depends on perl-try-tiny: 
   :depends on perl-xml-libxml: 

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

    pixi global install perl-bio-mlst-check

to add into an existing workspace instead, run::

    pixi add perl-bio-mlst-check

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-mlst-check

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-mlst-check

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-mlst-check:<tag>

(see `perl-bio-mlst-check/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-mlst-check| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-mlst-check.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-mlst-check
   :alt:   (downloads)
.. |docker_perl-bio-mlst-check| image:: https://quay.io/repository/biocontainers/perl-bio-mlst-check/status
   :target: https://quay.io/repository/biocontainers/perl-bio-mlst-check
.. _`perl-bio-mlst-check/tags`: https://quay.io/repository/biocontainers/perl-bio-mlst-check?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-mlst-check";
        var versions = ["2.1.1706216","2.1.1706216","2.1.1706216","2.1.1706216"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html