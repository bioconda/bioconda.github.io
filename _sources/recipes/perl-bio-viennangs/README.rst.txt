:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-viennangs'
.. highlight: bash

perl-bio-viennangs
==================

.. conda:recipe:: perl-bio-viennangs
   :replaces_section_title:
   :noindex:

   A Perl distribution for Next\-Generation Sequencing \(NGS\) data analysis

   :homepage: http://metacpan.org/pod/Bio::ViennaNGS
   :license: perl_5
   :recipe: /`perl-bio-viennangs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs/meta.yaml>`_

   


.. conda:package:: perl-bio-viennangs

   |downloads_perl-bio-viennangs| |docker_perl-bio-viennangs|

   :versions:
      
      

      ``0.19.2-1``,  ``0.19.2-0``,  ``v0.19.2-5``,  ``v0.19-1``,  ``v0.18-2``,  ``v0.18-1``,  ``v0.18-0``,  ``v0.16-0``

      

   
   :depends on bedtools: ``>=2.24``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-procedural: 
   :depends on perl-bio-samtools: 
   :depends on perl-bioperl: 
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-data-dumper: 
   :depends on perl-exporter: 
   :depends on perl-file-find: 
   :depends on perl-file-path: 
   :depends on perl-file-share: 
   :depends on perl-file-slurp: 
   :depends on perl-file-temp: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on perl-ipc-cmd: 
   :depends on perl-lib: 
   :depends on perl-math-round: 
   :depends on perl-moose: 
   :depends on perl-moosex-clone: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-params-coerce: 
   :depends on perl-path-class: 
   :depends on perl-perlio-gzip: 
   :depends on perl-pod-usage: 
   :depends on perl-posix: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-template-toolkit: 
   :depends on perl-test-deep: 
   :depends on perl-test-file-contents: 
   :depends on perl-test-files: 
   :depends on perl-tie-hash-indexed: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-fetchchromsizes: 

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

    pixi global install perl-bio-viennangs

to add into an existing workspace instead, run::

    pixi add perl-bio-viennangs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-viennangs

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-viennangs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-viennangs:<tag>

(see `perl-bio-viennangs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-viennangs| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-viennangs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-viennangs
   :alt:   (downloads)
.. |docker_perl-bio-viennangs| image:: https://quay.io/repository/biocontainers/perl-bio-viennangs/status
   :target: https://quay.io/repository/biocontainers/perl-bio-viennangs
.. _`perl-bio-viennangs/tags`: https://quay.io/repository/biocontainers/perl-bio-viennangs?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-viennangs";
        var versions = ["0.19.2","0.19.2","v0.19.2","v0.19","v0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-viennangs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-viennangs/README.html