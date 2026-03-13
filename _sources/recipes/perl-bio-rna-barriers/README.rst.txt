:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-barriers'
.. highlight: bash

perl-bio-rna-barriers
=====================

.. conda:recipe:: perl-bio-rna-barriers
   :replaces_section_title:
   :noindex:

   Parse\, query and manipulate output of Barriers

   :homepage: https://metacpan.org/pod/Bio::RNA::Barriers
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-barriers

   |downloads_perl-bio-rna-barriers| |docker_perl-bio-rna-barriers|

   :versions:
      
      

      ``0.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-slurp: 
   :depends on perl-ipc-system-simple: 
   :depends on perl-list-moreutils: 
   :depends on perl-moose: 
   :depends on perl-moosex-strictconstructor: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-test-exception: 
   :depends on perl-test-nowarnings: 

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

    pixi global install perl-bio-rna-barriers

to add into an existing workspace instead, run::

    pixi add perl-bio-rna-barriers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-rna-barriers

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-rna-barriers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-rna-barriers:<tag>

(see `perl-bio-rna-barriers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-rna-barriers| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-barriers
   :alt:   (downloads)
.. |docker_perl-bio-rna-barriers| image:: https://quay.io/repository/biocontainers/perl-bio-rna-barriers/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-barriers
.. _`perl-bio-rna-barriers/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-barriers?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-barriers";
        var versions = ["0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html