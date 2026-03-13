:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-bpwrapper'
.. highlight: bash

perl-bio-bpwrapper
==================

.. conda:recipe:: perl-bio-bpwrapper
   :replaces_section_title:
   :noindex:

   Bio\:\:BPWrapper \-\- command\-line utilities for Bio\:\:Perl

   :homepage: http://metacpan.org/pod/Bio::BPWrapper
   :license: perl_5
   :recipe: /`perl-bio-bpwrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper/meta.yaml>`_

   


.. conda:package:: perl-bio-bpwrapper

   |downloads_perl-bio-bpwrapper| |docker_perl-bio-bpwrapper|

   :versions:
      
      

      ``1.15-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-db-refseq: 
   :depends on perl-bioperl: 
   :depends on perl-path-tiny: 

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

    pixi global install perl-bio-bpwrapper

to add into an existing workspace instead, run::

    pixi add perl-bio-bpwrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-bpwrapper

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-bpwrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-bpwrapper:<tag>

(see `perl-bio-bpwrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-bpwrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-bpwrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-bpwrapper
   :alt:   (downloads)
.. |docker_perl-bio-bpwrapper| image:: https://quay.io/repository/biocontainers/perl-bio-bpwrapper/status
   :target: https://quay.io/repository/biocontainers/perl-bio-bpwrapper
.. _`perl-bio-bpwrapper/tags`: https://quay.io/repository/biocontainers/perl-bio-bpwrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-bpwrapper";
        var versions = ["1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html