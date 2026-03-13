:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ppi'
.. highlight: bash

perl-ppi
========

.. conda:recipe:: perl-ppi/1.236
   :replaces_section_title:
   :noindex:

   Parse\, Analyze and Manipulate Perl \(without perl\)

   :homepage: https://github.com/adamkennedy/PPI
   :license: perl_5
   :recipe: /`perl-ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi>`_/`1.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236/meta.yaml>`_

   


.. conda:package:: perl-ppi

   |downloads_perl-ppi| |docker_perl-ppi|

   :versions:
      
      

      ``1.236-3``,  ``1.236-2``,  ``1.236-1``,  ``1.236-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-class-xsaccessor: 
   :depends on perl-clone: 
   :depends on perl-digest-md5: 
   :depends on perl-file-remove: 
   :depends on perl-file-spec: 
   :depends on perl-hook-lexwrap: 
   :depends on perl-io-string: 
   :depends on perl-list-moreutils: 
   :depends on perl-params-util: 
   :depends on perl-task-weaken: 

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

    pixi global install perl-ppi

to add into an existing workspace instead, run::

    pixi add perl-ppi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ppi

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ppi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ppi:<tag>

(see `perl-ppi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ppi| image:: https://img.shields.io/conda/dn/bioconda/perl-ppi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ppi
   :alt:   (downloads)
.. |docker_perl-ppi| image:: https://quay.io/repository/biocontainers/perl-ppi/status
   :target: https://quay.io/repository/biocontainers/perl-ppi
.. _`perl-ppi/tags`: https://quay.io/repository/biocontainers/perl-ppi?tab=tags


.. raw:: html

    <script>
        var package = "perl-ppi";
        var versions = ["1.236","1.236","1.236","1.236"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ppi/README.html