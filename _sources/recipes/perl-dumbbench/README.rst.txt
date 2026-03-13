:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dumbbench'
.. highlight: bash

perl-dumbbench
==============

.. conda:recipe:: perl-dumbbench/0.111
   :replaces_section_title:
   :noindex:

   More reliable benchmarking with the least amount of thinking

   :homepage: https://github.com/briandfoy/dumbbench
   :license: perl_5
   :recipe: /`perl-dumbbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench>`_/`0.111 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench/0.111>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench/0.111/meta.yaml>`_

   


.. conda:package:: perl-dumbbench

   |downloads_perl-dumbbench| |docker_perl-dumbbench|

   :versions:
      
      

      ``0.111-1``,  ``0.111-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-capture-tiny: 
   :depends on perl-carp: 
   :depends on perl-class-xsaccessor: 
   :depends on perl-devel-checkos: 
   :depends on perl-number-witherror: 
   :depends on perl-params-util: 
   :depends on perl-parent: 
   :depends on perl-statistics-caseresampling: 
   :depends on perl-time-hires: 

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

    pixi global install perl-dumbbench

to add into an existing workspace instead, run::

    pixi add perl-dumbbench

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-dumbbench

Alternatively, to install into a new environment, run::

    conda create -n envname perl-dumbbench

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-dumbbench:<tag>

(see `perl-dumbbench/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-dumbbench| image:: https://img.shields.io/conda/dn/bioconda/perl-dumbbench.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dumbbench
   :alt:   (downloads)
.. |docker_perl-dumbbench| image:: https://quay.io/repository/biocontainers/perl-dumbbench/status
   :target: https://quay.io/repository/biocontainers/perl-dumbbench
.. _`perl-dumbbench/tags`: https://quay.io/repository/biocontainers/perl-dumbbench?tab=tags


.. raw:: html

    <script>
        var package = "perl-dumbbench";
        var versions = ["0.111","0.111"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dumbbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dumbbench/README.html