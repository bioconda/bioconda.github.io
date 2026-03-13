:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-forkmanager'
.. highlight: bash

perl-parallel-forkmanager
=========================

.. conda:recipe:: perl-parallel-forkmanager
   :replaces_section_title:
   :noindex:

   A simple parallel processing fork manager

   :homepage: https://github.com/dluxhu/perl-parallel-forkmanager
   :license: perl_5
   :recipe: /`perl-parallel-forkmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager/meta.yaml>`_

   


.. conda:package:: perl-parallel-forkmanager

   |downloads_perl-parallel-forkmanager| |docker_perl-parallel-forkmanager|

   :versions:
      
      

      ``2.04-0``,  ``2.03-0``,  ``2.02-1``,  ``2.02-0``,  ``1.17-1``,  ``1.17-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-file-path: 
   :depends on perl-file-temp: 
   :depends on perl-moo: 
   :depends on perl-storable: 

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

    pixi global install perl-parallel-forkmanager

to add into an existing workspace instead, run::

    pixi add perl-parallel-forkmanager

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-parallel-forkmanager

Alternatively, to install into a new environment, run::

    conda create -n envname perl-parallel-forkmanager

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-parallel-forkmanager:<tag>

(see `perl-parallel-forkmanager/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-parallel-forkmanager| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-forkmanager.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parallel-forkmanager
   :alt:   (downloads)
.. |docker_perl-parallel-forkmanager| image:: https://quay.io/repository/biocontainers/perl-parallel-forkmanager/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-forkmanager
.. _`perl-parallel-forkmanager/tags`: https://quay.io/repository/biocontainers/perl-parallel-forkmanager?tab=tags


.. raw:: html

    <script>
        var package = "perl-parallel-forkmanager";
        var versions = ["2.04","2.03","2.02","2.02","1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html