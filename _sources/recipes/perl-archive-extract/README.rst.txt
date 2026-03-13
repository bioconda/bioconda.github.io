:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-extract'
.. highlight: bash

perl-archive-extract
====================

.. conda:recipe:: perl-archive-extract
   :replaces_section_title:
   :noindex:

   Generic archive extracting mechanism

   :homepage: http://metacpan.org/pod/Archive::Extract
   :license: perl_5
   :recipe: /`perl-archive-extract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract/meta.yaml>`_

   


.. conda:package:: perl-archive-extract

   |downloads_perl-archive-extract| |docker_perl-archive-extract|

   :versions:
      
      

      ``0.88-0``,  ``0.80-1``,  ``0.80-0``,  ``0.76-4``,  ``0.76-3``,  ``0.76-2``,  ``0.76-1``,  ``0.76-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-path: 
   :depends on perl-ipc-cmd: 
   :depends on perl-locale-maketext-simple: 
   :depends on perl-module-load-conditional: 
   :depends on perl-params-check: ``>=0.07``

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

    pixi global install perl-archive-extract

to add into an existing workspace instead, run::

    pixi add perl-archive-extract

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-archive-extract

Alternatively, to install into a new environment, run::

    conda create -n envname perl-archive-extract

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-archive-extract:<tag>

(see `perl-archive-extract/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-archive-extract| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-extract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-extract
   :alt:   (downloads)
.. |docker_perl-archive-extract| image:: https://quay.io/repository/biocontainers/perl-archive-extract/status
   :target: https://quay.io/repository/biocontainers/perl-archive-extract
.. _`perl-archive-extract/tags`: https://quay.io/repository/biocontainers/perl-archive-extract?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-extract";
        var versions = ["0.88","0.80","0.80","0.76","0.76"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-extract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-extract/README.html