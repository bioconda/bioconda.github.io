:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-prefork'
.. highlight: bash

perl-prefork
============

.. conda:recipe:: perl-prefork/1.05
   :replaces_section_title:
   :noindex:

   Optimized module loading for forking or non\-forking processes

   :homepage: https://github.com/karenetheridge/prefork
   :license: perl_5
   :recipe: /`perl-prefork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork>`_/`1.05 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05/meta.yaml>`_

   


.. conda:package:: perl-prefork

   |downloads_perl-prefork| |docker_perl-prefork|

   :versions:
      
      

      ``1.05-1``,  ``1.05-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 

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

    pixi global install perl-prefork

to add into an existing workspace instead, run::

    pixi add perl-prefork

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-prefork

Alternatively, to install into a new environment, run::

    conda create -n envname perl-prefork

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-prefork:<tag>

(see `perl-prefork/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-prefork| image:: https://img.shields.io/conda/dn/bioconda/perl-prefork.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-prefork
   :alt:   (downloads)
.. |docker_perl-prefork| image:: https://quay.io/repository/biocontainers/perl-prefork/status
   :target: https://quay.io/repository/biocontainers/perl-prefork
.. _`perl-prefork/tags`: https://quay.io/repository/biocontainers/perl-prefork?tab=tags


.. raw:: html

    <script>
        var package = "perl-prefork";
        var versions = ["1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-prefork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-prefork/README.html