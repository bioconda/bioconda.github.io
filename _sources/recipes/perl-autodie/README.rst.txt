:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-autodie'
.. highlight: bash

perl-autodie
============

.. conda:recipe:: perl-autodie
   :replaces_section_title:
   :noindex:

   Replace functions with ones that succeed or die with lexical scope.

   :homepage: https://metacpan.org/pod/autodie
   :license: Perl_5
   :recipe: /`perl-autodie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autodie/meta.yaml>`_

   


.. conda:package:: perl-autodie

   |downloads_perl-autodie| |docker_perl-autodie|

   :versions:
      
      

      ``2.37-0``,  ``2.36-0``,  ``2.35-0``,  ``2.34-0``,  ``2.29-1``,  ``2.29-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-exporter: 
   :depends on perl-parent: 
   :depends on perl-tie-refhash: 

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

    pixi global install perl-autodie

to add into an existing workspace instead, run::

    pixi add perl-autodie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-autodie

Alternatively, to install into a new environment, run::

    conda create -n envname perl-autodie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-autodie:<tag>

(see `perl-autodie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-autodie| image:: https://img.shields.io/conda/dn/bioconda/perl-autodie.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-autodie
   :alt:   (downloads)
.. |docker_perl-autodie| image:: https://quay.io/repository/biocontainers/perl-autodie/status
   :target: https://quay.io/repository/biocontainers/perl-autodie
.. _`perl-autodie/tags`: https://quay.io/repository/biocontainers/perl-autodie?tab=tags


.. raw:: html

    <script>
        var package = "perl-autodie";
        var versions = ["2.37","2.36","2.35","2.34","2.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autodie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autodie/README.html