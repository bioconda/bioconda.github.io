:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-combinatorics'
.. highlight: bash

perl-math-combinatorics
=======================

.. conda:recipe:: perl-math-combinatorics
   :replaces_section_title:
   :noindex:

   Perform combinations and permutations on lists

   :homepage: http://metacpan.org/pod/Math-Combinatorics
   :license: unknown
   :recipe: /`perl-math-combinatorics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-combinatorics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-combinatorics/meta.yaml>`_

   


.. conda:package:: perl-math-combinatorics

   |downloads_perl-math-combinatorics| |docker_perl-math-combinatorics|

   :versions:
      
      

      ``0.09-2``,  ``0.09-1``,  ``0.09-0``

      

   
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

    pixi global install perl-math-combinatorics

to add into an existing workspace instead, run::

    pixi add perl-math-combinatorics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-math-combinatorics

Alternatively, to install into a new environment, run::

    conda create -n envname perl-math-combinatorics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-math-combinatorics:<tag>

(see `perl-math-combinatorics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-math-combinatorics| image:: https://img.shields.io/conda/dn/bioconda/perl-math-combinatorics.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-combinatorics
   :alt:   (downloads)
.. |docker_perl-math-combinatorics| image:: https://quay.io/repository/biocontainers/perl-math-combinatorics/status
   :target: https://quay.io/repository/biocontainers/perl-math-combinatorics
.. _`perl-math-combinatorics/tags`: https://quay.io/repository/biocontainers/perl-math-combinatorics?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-combinatorics";
        var versions = ["0.09","0.09","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-combinatorics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-combinatorics/README.html