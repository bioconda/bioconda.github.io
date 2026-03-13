:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-reader'
.. highlight: bash

perl-fastx-reader
=================

.. conda:recipe:: perl-fastx-reader
   :replaces_section_title:
   :noindex:

   FASTX\:\:Reader\, Perl module to parse FASTA and FASTQ files

   :homepage: https://metacpan.org/release/FASTX-Reader
   :developer docs: https://github.com/telatin/FASTQ-Parser
   :license: gpl_3
   :recipe: /`perl-fastx-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader/meta.yaml>`_

   A perl module to parser FASTQ and FASTA files\, gzipped or not\, supporting Illumina naming scheme and paired end files


.. conda:package:: perl-fastx-reader

   |downloads_perl-fastx-reader| |docker_perl-fastx-reader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.92-1``,  ``0.92-0``,  ``0.90-0``,  ``0.88-0``,  ``0.87-0``,  ``0.61-0``,  ``0.60-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-capture-tiny: 
   :depends on perl-carp: 

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

    pixi global install perl-fastx-reader

to add into an existing workspace instead, run::

    pixi add perl-fastx-reader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-fastx-reader

Alternatively, to install into a new environment, run::

    conda create -n envname perl-fastx-reader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-fastx-reader:<tag>

(see `perl-fastx-reader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-fastx-reader| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-reader
   :alt:   (downloads)
.. |docker_perl-fastx-reader| image:: https://quay.io/repository/biocontainers/perl-fastx-reader/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-reader
.. _`perl-fastx-reader/tags`: https://quay.io/repository/biocontainers/perl-fastx-reader?tab=tags


.. raw:: html

    <script>
        var package = "perl-fastx-reader";
        var versions = ["1.12.0","1.11.0","1.10.0","1.9.0","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-reader/README.html