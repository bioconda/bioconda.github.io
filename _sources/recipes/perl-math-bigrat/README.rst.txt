:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bigrat'
.. highlight: bash

perl-math-bigrat
================

.. conda:recipe:: perl-math-bigrat
   :replaces_section_title:
   :noindex:

   Arbitrary big rational numbers

   :homepage: http://metacpan.org/pod/Math::BigRat
   :license: perl_5
   :recipe: /`perl-math-bigrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigrat/meta.yaml>`_

   


.. conda:package:: perl-math-bigrat

   |downloads_perl-math-bigrat| |docker_perl-math-bigrat|

   :versions:
      
      

      ``0.2624-0``,  ``0.2623-0``,  ``0.2622-0``,  ``0.2621-0``,  ``0.2620-0``,  ``0.2614-1``,  ``0.2614-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: ``>=1.22``
   :depends on perl-math-bigint: ``>=1.999821``
   :depends on perl-math-bigint: ``>=1.999824``
   :depends on perl-math-complex: ``>=1.36``
   :depends on perl-scalar-list-utils: 

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

    pixi global install perl-math-bigrat

to add into an existing workspace instead, run::

    pixi add perl-math-bigrat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-math-bigrat

Alternatively, to install into a new environment, run::

    conda create -n envname perl-math-bigrat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-math-bigrat:<tag>

(see `perl-math-bigrat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-math-bigrat| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigrat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bigrat
   :alt:   (downloads)
.. |docker_perl-math-bigrat| image:: https://quay.io/repository/biocontainers/perl-math-bigrat/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigrat
.. _`perl-math-bigrat/tags`: https://quay.io/repository/biocontainers/perl-math-bigrat?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-bigrat";
        var versions = ["0.2624","0.2623","0.2622","0.2621","0.2620"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigrat/README.html