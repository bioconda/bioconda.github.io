:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-meta-requirements'
.. highlight: bash

perl-cpan-meta-requirements
===========================

.. conda:recipe:: perl-cpan-meta-requirements
   :replaces_section_title:
   :noindex:

   a set of version requirements for a CPAN dist

   :homepage: https://github.com/Perl-Toolchain-Gang/CPAN-Meta-Requirements
   :license: perl_5
   :recipe: /`perl-cpan-meta-requirements <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-requirements

   |downloads_perl-cpan-meta-requirements| |docker_perl-cpan-meta-requirements|

   :versions:
      
      

      ``2.143-0``,  ``2.142-0``,  ``2.140-1``,  ``2.140-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-version: 

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

    pixi global install perl-cpan-meta-requirements

to add into an existing workspace instead, run::

    pixi add perl-cpan-meta-requirements

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-cpan-meta-requirements

Alternatively, to install into a new environment, run::

    conda create -n envname perl-cpan-meta-requirements

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-cpan-meta-requirements:<tag>

(see `perl-cpan-meta-requirements/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-cpan-meta-requirements| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-requirements.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cpan-meta-requirements
   :alt:   (downloads)
.. |docker_perl-cpan-meta-requirements| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements
.. _`perl-cpan-meta-requirements/tags`: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements?tab=tags


.. raw:: html

    <script>
        var package = "perl-cpan-meta-requirements";
        var versions = ["2.143","2.142","2.140","2.140"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html