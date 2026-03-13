:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-git-wrapper-plus'
.. highlight: bash

perl-git-wrapper-plus
=====================

.. conda:recipe:: perl-git-wrapper-plus
   :replaces_section_title:
   :noindex:

   A Toolkit for working with Git\:\:Wrapper in an Object Oriented Way.

   :homepage: https://github.com/kentnl/Git-Wrapper-Plus
   :license: perl_5
   :recipe: /`perl-git-wrapper-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper-plus

   |downloads_perl-git-wrapper-plus| |docker_perl-git-wrapper-plus|

   :versions:
      
      

      ``0.004011-1``,  ``0.004011-0``,  ``0.004010-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-git-wrapper: 
   :depends on perl-moo: 
   :depends on perl-path-tiny: 
   :depends on perl-sort-versions: 
   :depends on perl-sub-exporter-progressive: 
   :depends on perl-try-tiny: 

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

    pixi global install perl-git-wrapper-plus

to add into an existing workspace instead, run::

    pixi add perl-git-wrapper-plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-git-wrapper-plus

Alternatively, to install into a new environment, run::

    conda create -n envname perl-git-wrapper-plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-git-wrapper-plus:<tag>

(see `perl-git-wrapper-plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-git-wrapper-plus| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-git-wrapper-plus
   :alt:   (downloads)
.. |docker_perl-git-wrapper-plus| image:: https://quay.io/repository/biocontainers/perl-git-wrapper-plus/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper-plus
.. _`perl-git-wrapper-plus/tags`: https://quay.io/repository/biocontainers/perl-git-wrapper-plus?tab=tags


.. raw:: html

    <script>
        var package = "perl-git-wrapper-plus";
        var versions = ["0.004011","0.004011","0.004010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html