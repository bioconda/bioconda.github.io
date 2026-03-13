:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mixin-linewise'
.. highlight: bash

perl-mixin-linewise
===================

.. conda:recipe:: perl-mixin-linewise
   :replaces_section_title:
   :noindex:

   write your linewise code for handles\; this does the rest

   :homepage: https://github.com/rjbs/Mixin-Linewise
   :license: perl_5
   :recipe: /`perl-mixin-linewise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise/meta.yaml>`_

   


.. conda:package:: perl-mixin-linewise

   |downloads_perl-mixin-linewise| |docker_perl-mixin-linewise|

   :versions:
      
      

      ``0.111-0``,  ``0.110-0``,  ``0.108-3``,  ``0.108-2``,  ``0.108-1``,  ``0.108-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-extutils-makemaker: 
   :depends on perl-pathtools: 
   :depends on perl-perlio-utf8_strict: 
   :depends on perl-sub-exporter: 

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

    pixi global install perl-mixin-linewise

to add into an existing workspace instead, run::

    pixi add perl-mixin-linewise

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mixin-linewise

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mixin-linewise

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mixin-linewise:<tag>

(see `perl-mixin-linewise/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mixin-linewise| image:: https://img.shields.io/conda/dn/bioconda/perl-mixin-linewise.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mixin-linewise
   :alt:   (downloads)
.. |docker_perl-mixin-linewise| image:: https://quay.io/repository/biocontainers/perl-mixin-linewise/status
   :target: https://quay.io/repository/biocontainers/perl-mixin-linewise
.. _`perl-mixin-linewise/tags`: https://quay.io/repository/biocontainers/perl-mixin-linewise?tab=tags


.. raw:: html

    <script>
        var package = "perl-mixin-linewise";
        var versions = ["0.111","0.110","0.108","0.108","0.108"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mixin-linewise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mixin-linewise/README.html