:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-caseresampling'
.. highlight: bash

perl-statistics-caseresampling
==============================

.. conda:recipe:: perl-statistics-caseresampling/0.15
   :replaces_section_title:
   :noindex:

   Efficient resampling and calculation of medians with confidence intervals

   :homepage: http://metacpan.org/pod/Statistics::CaseResampling
   :license: unknown
   :recipe: /`perl-statistics-caseresampling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling>`_/`0.15 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling/0.15>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling/0.15/meta.yaml>`_

   


.. conda:package:: perl-statistics-caseresampling

   |downloads_perl-statistics-caseresampling| |docker_perl-statistics-caseresampling|

   :versions:
      
      

      ``0.15-5``,  ``0.15-4``,  ``0.15-3``,  ``0.15-2``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install perl-statistics-caseresampling

to add into an existing workspace instead, run::

    pixi add perl-statistics-caseresampling

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-statistics-caseresampling

Alternatively, to install into a new environment, run::

    conda create -n envname perl-statistics-caseresampling

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-statistics-caseresampling:<tag>

(see `perl-statistics-caseresampling/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-statistics-caseresampling| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-caseresampling.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-caseresampling
   :alt:   (downloads)
.. |docker_perl-statistics-caseresampling| image:: https://quay.io/repository/biocontainers/perl-statistics-caseresampling/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-caseresampling
.. _`perl-statistics-caseresampling/tags`: https://quay.io/repository/biocontainers/perl-statistics-caseresampling?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-caseresampling";
        var versions = ["0.15","0.15","0.15","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-caseresampling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-caseresampling/README.html