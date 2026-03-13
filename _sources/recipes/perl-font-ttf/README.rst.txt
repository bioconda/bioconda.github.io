:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-font-ttf'
.. highlight: bash

perl-font-ttf
=============

.. conda:recipe:: perl-font-ttf
   :replaces_section_title:
   :noindex:

   TTF font support for Perl

   :homepage: http://metacpan.org/pod/Font-TTF
   :license: artistic_2
   :recipe: /`perl-font-ttf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf/meta.yaml>`_

   


.. conda:package:: perl-font-ttf

   |downloads_perl-font-ttf| |docker_perl-font-ttf|

   :versions:
      
      

      ``1.06-1``,  ``1.06-0``,  ``1.05-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-io-string: 
   :depends on perl-xml-parser: 

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

    pixi global install perl-font-ttf

to add into an existing workspace instead, run::

    pixi add perl-font-ttf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-font-ttf

Alternatively, to install into a new environment, run::

    conda create -n envname perl-font-ttf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-font-ttf:<tag>

(see `perl-font-ttf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-font-ttf| image:: https://img.shields.io/conda/dn/bioconda/perl-font-ttf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-font-ttf
   :alt:   (downloads)
.. |docker_perl-font-ttf| image:: https://quay.io/repository/biocontainers/perl-font-ttf/status
   :target: https://quay.io/repository/biocontainers/perl-font-ttf
.. _`perl-font-ttf/tags`: https://quay.io/repository/biocontainers/perl-font-ttf?tab=tags


.. raw:: html

    <script>
        var package = "perl-font-ttf";
        var versions = ["1.06","1.06","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-font-ttf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-font-ttf/README.html