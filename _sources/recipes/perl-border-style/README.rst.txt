:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-border-style'
.. highlight: bash

perl-border-style
=================

.. conda:recipe:: perl-border-style
   :replaces_section_title:
   :noindex:

   Border style structure

   :homepage: https://metacpan.org/release/Border-Style
   :license: perl_5
   :recipe: /`perl-border-style <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-border-style>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-border-style/meta.yaml>`_

   


.. conda:package:: perl-border-style

   |downloads_perl-border-style| |docker_perl-border-style|

   :versions:
      
      

      ``0.01-3``,  ``0.01-2``,  ``0.01-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-module-list: 
   :depends on perl-moo: 
   :depends on perl-term-app-roles: 

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

    pixi global install perl-border-style

to add into an existing workspace instead, run::

    pixi add perl-border-style

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-border-style

Alternatively, to install into a new environment, run::

    conda create -n envname perl-border-style

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-border-style:<tag>

(see `perl-border-style/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-border-style| image:: https://img.shields.io/conda/dn/bioconda/perl-border-style.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-border-style
   :alt:   (downloads)
.. |docker_perl-border-style| image:: https://quay.io/repository/biocontainers/perl-border-style/status
   :target: https://quay.io/repository/biocontainers/perl-border-style
.. _`perl-border-style/tags`: https://quay.io/repository/biocontainers/perl-border-style?tab=tags


.. raw:: html

    <script>
        var package = "perl-border-style";
        var versions = ["0.01","0.01","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-border-style/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-border-style/README.html