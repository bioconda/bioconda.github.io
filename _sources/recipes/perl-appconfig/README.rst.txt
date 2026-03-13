:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-appconfig'
.. highlight: bash

perl-appconfig
==============

.. conda:recipe:: perl-appconfig
   :replaces_section_title:
   :noindex:

   AppConfig is a bundle of Perl5 modules for reading configuration files and parsing command line arguments.

   :homepage: http://metacpan.org/pod/AppConfig
   :license: perl_5
   :recipe: /`perl-appconfig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-appconfig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-appconfig/meta.yaml>`_

   


.. conda:package:: perl-appconfig

   |downloads_perl-appconfig| |docker_perl-appconfig|

   :versions:
      
      

      ``1.71-2``,  ``1.71-1``,  ``1.71-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-appconfig

to add into an existing workspace instead, run::

    pixi add perl-appconfig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-appconfig

Alternatively, to install into a new environment, run::

    conda create -n envname perl-appconfig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-appconfig:<tag>

(see `perl-appconfig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-appconfig| image:: https://img.shields.io/conda/dn/bioconda/perl-appconfig.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-appconfig
   :alt:   (downloads)
.. |docker_perl-appconfig| image:: https://quay.io/repository/biocontainers/perl-appconfig/status
   :target: https://quay.io/repository/biocontainers/perl-appconfig
.. _`perl-appconfig/tags`: https://quay.io/repository/biocontainers/perl-appconfig?tab=tags


.. raw:: html

    <script>
        var package = "perl-appconfig";
        var versions = ["1.71","1.71","1.71"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-appconfig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-appconfig/README.html