:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-tools-run-alignment-clustalw'
.. highlight: bash

perl-bio-tools-run-alignment-clustalw
=====================================

.. conda:recipe:: perl-bio-tools-run-alignment-clustalw
   :replaces_section_title:
   :noindex:

   Object for the calculation of a multiple sequence alignment from a set of unaligned sequences or alignments using the Clustalw program

   :homepage: https://metacpan.org/release/Bio-Tools-Run-Alignment-Clustalw
   :license: perl_5
   :recipe: /`perl-bio-tools-run-alignment-clustalw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-clustalw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-clustalw/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-run-alignment-clustalw

   |downloads_perl-bio-tools-run-alignment-clustalw| |docker_perl-bio-tools-run-alignment-clustalw|

   :versions:
      
      

      ``1.7.4-3``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``

      

   
   :depends on clustalw: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-bioperl-run: 

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

    pixi global install perl-bio-tools-run-alignment-clustalw

to add into an existing workspace instead, run::

    pixi add perl-bio-tools-run-alignment-clustalw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-tools-run-alignment-clustalw

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-tools-run-alignment-clustalw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-tools-run-alignment-clustalw:<tag>

(see `perl-bio-tools-run-alignment-clustalw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-tools-run-alignment-clustalw| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-run-alignment-clustalw.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-tools-run-alignment-clustalw
   :alt:   (downloads)
.. |docker_perl-bio-tools-run-alignment-clustalw| image:: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw
.. _`perl-bio-tools-run-alignment-clustalw/tags`: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-tools-run-alignment-clustalw";
        var versions = ["1.7.4","1.7.4","1.7.4","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-clustalw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-clustalw/README.html