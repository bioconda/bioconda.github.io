:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pcap'
.. highlight: bash

perl-pcap
=========

.. conda:recipe:: perl-pcap
   :replaces_section_title:
   :noindex:

   NGS reference implementations and helper code for the IGCG\/TCGA Pan\-Cancer Analysis Project

   :homepage: https://github.com/ICGC-TCGA-PanCancer/PCAP-core
   :license: GPLv3
   :recipe: /`perl-pcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap/meta.yaml>`_

   


.. conda:package:: perl-pcap

   |downloads_perl-pcap| |docker_perl-pcap|

   :versions:
      
      

      ``3.5.2-2``,  ``3.5.2-1``,  ``3.5.2-0``,  ``1.11.1-2``,  ``1.11.1-1``,  ``1.11.1-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bio-db-hts: 
   :depends on perl-bio-samtools: 
   :depends on perl-bioperl: 
   :depends on perl-encode-locale: 
   :depends on perl-gd: 
   :depends on perl-ipc-system-simple: 
   :depends on perl-lwp-simple: 
   :depends on perl-sanger-cgp-vcf: 
   :depends on perl-xml-parser: 

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

    pixi global install perl-pcap

to add into an existing workspace instead, run::

    pixi add perl-pcap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pcap

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pcap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pcap:<tag>

(see `perl-pcap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pcap| image:: https://img.shields.io/conda/dn/bioconda/perl-pcap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pcap
   :alt:   (downloads)
.. |docker_perl-pcap| image:: https://quay.io/repository/biocontainers/perl-pcap/status
   :target: https://quay.io/repository/biocontainers/perl-pcap
.. _`perl-pcap/tags`: https://quay.io/repository/biocontainers/perl-pcap?tab=tags


.. raw:: html

    <script>
        var package = "perl-pcap";
        var versions = ["3.5.2","3.5.2","3.5.2","1.11.1","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pcap/README.html