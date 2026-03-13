:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-range'
.. highlight: bash

perl-number-range
=================

.. conda:recipe:: perl-number-range
   :replaces_section_title:
   :noindex:

   Perl extension defining ranges of numbers and testing if a number is found in the range

   :homepage: http://metacpan.org/pod/Number::Range
   :license: perl_5
   :recipe: /`perl-number-range <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range/meta.yaml>`_

   


.. conda:package:: perl-number-range

   |downloads_perl-number-range| |docker_perl-number-range|

   :versions:
      
      

      ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-extutils-makemaker: 

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

    pixi global install perl-number-range

to add into an existing workspace instead, run::

    pixi add perl-number-range

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-number-range

Alternatively, to install into a new environment, run::

    conda create -n envname perl-number-range

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-number-range:<tag>

(see `perl-number-range/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-number-range| image:: https://img.shields.io/conda/dn/bioconda/perl-number-range.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-range
   :alt:   (downloads)
.. |docker_perl-number-range| image:: https://quay.io/repository/biocontainers/perl-number-range/status
   :target: https://quay.io/repository/biocontainers/perl-number-range
.. _`perl-number-range/tags`: https://quay.io/repository/biocontainers/perl-number-range?tab=tags


.. raw:: html

    <script>
        var package = "perl-number-range";
        var versions = ["0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-range/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-range/README.html