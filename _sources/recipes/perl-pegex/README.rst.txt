:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pegex'
.. highlight: bash

perl-pegex
==========

.. conda:recipe:: perl-pegex
   :replaces_section_title:
   :noindex:

   Pegex Grammar for the Pegex Grammar Language.

   :homepage: https://metacpan.org/dist/Pegex/view/lib/Pegex.pod
   :license: Perl_5
   :recipe: /`perl-pegex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pegex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pegex/meta.yaml>`_

   


.. conda:package:: perl-pegex

   |downloads_perl-pegex| |docker_perl-pegex|

   :versions:
      
      

      ``0.75-0``,  ``0.61-2``,  ``0.61-1``,  ``0.61-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-extutils-makemaker: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-json-pp: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-xxx: 
   :depends on perl-yaml-pp: 

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

    pixi global install perl-pegex

to add into an existing workspace instead, run::

    pixi add perl-pegex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pegex

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pegex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pegex:<tag>

(see `perl-pegex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pegex| image:: https://img.shields.io/conda/dn/bioconda/perl-pegex.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pegex
   :alt:   (downloads)
.. |docker_perl-pegex| image:: https://quay.io/repository/biocontainers/perl-pegex/status
   :target: https://quay.io/repository/biocontainers/perl-pegex
.. _`perl-pegex/tags`: https://quay.io/repository/biocontainers/perl-pegex?tab=tags


.. raw:: html

    <script>
        var package = "perl-pegex";
        var versions = ["0.75","0.61","0.61","0.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pegex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pegex/README.html