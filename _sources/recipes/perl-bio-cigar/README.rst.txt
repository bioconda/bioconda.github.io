:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-cigar'
.. highlight: bash

perl-bio-cigar
==============

.. conda:recipe:: perl-bio-cigar
   :replaces_section_title:
   :noindex:

   Parse CIGAR strings and translate coordinates to\/from reference\/query

   :homepage: https://github.com/MullinsLab/Bio-Cigar
   :license: gpl_2
   :recipe: /`perl-bio-cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar/meta.yaml>`_
   :links: biotools: :biotools:`bio-cigar`

   


.. conda:package:: perl-bio-cigar

   |downloads_perl-bio-cigar| |docker_perl-bio-cigar|

   :versions:
      
      

      ``1.01-7``,  ``1.01-6``,  ``1.01-5``,  ``1.01-4``,  ``1.01-3``,  ``1.01-2``,  ``1.01-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-moo: 
   :depends on perl-namespace-clean: 
   :depends on perl-type-tiny: 

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

    pixi global install perl-bio-cigar

to add into an existing workspace instead, run::

    pixi add perl-bio-cigar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-cigar

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-cigar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-cigar:<tag>

(see `perl-bio-cigar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-cigar| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-cigar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-cigar
   :alt:   (downloads)
.. |docker_perl-bio-cigar| image:: https://quay.io/repository/biocontainers/perl-bio-cigar/status
   :target: https://quay.io/repository/biocontainers/perl-bio-cigar
.. _`perl-bio-cigar/tags`: https://quay.io/repository/biocontainers/perl-bio-cigar?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-cigar";
        var versions = ["1.01","1.01","1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-cigar/README.html