:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agat'
.. highlight: bash

agat
====

.. conda:recipe:: agat
   :replaces_section_title:
   :noindex:

   Another Gff Analysis Toolkit \(AGAT\). Suite of tools to handle gene annotations in any GTF\/GFF format.

   :homepage: https://github.com/NBISweden/AGAT
   :documentation: https://agat.readthedocs.io/en/latest/
   
   :license: GPL / GPLv3
   :recipe: /`agat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat/meta.yaml>`_

   AGAT has the power to check\, fix\, pad missing information \(features\/attributes\) of any kind of GTF and GFF to create complete\, sorted and standardised GTF\/GFF formats. 
   Over the years it has been enriched by many many tools to perform just about any tasks that is possible related to GTF\/GFF format files 
   \(sanitizing\, conversions\, merging\, modifying\, filtering\, FASTA sequence extraction\, adding information\, etc\).
   Comparing to other methods AGAT is robust to even the most despicable GTF\/GFF files.



.. conda:package:: agat

   |downloads_agat| |docker_agat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libdb: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl-core: ``>=1.7.8``
   :depends on perl-carp: 
   :depends on perl-clone: 
   :depends on perl-file-chdir: 
   :depends on perl-file-share: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-graph: 
   :depends on perl-ipc-sharelite: 
   :depends on perl-libwww-perl: ``>=6.39``
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-moose: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-sort-naturally: 
   :depends on perl-statistics-r: 
   :depends on perl-term-progressbar: 
   :depends on perl-yaml: 
   :depends on samtools: 

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

    pixi global install agat

to add into an existing workspace instead, run::

    pixi add agat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install agat

Alternatively, to install into a new environment, run::

    conda create -n envname agat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/agat:<tag>

(see `agat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_agat| image:: https://img.shields.io/conda/dn/bioconda/agat.svg?style=flat
   :target: https://anaconda.org/bioconda/agat
   :alt:   (downloads)
.. |docker_agat| image:: https://quay.io/repository/biocontainers/agat/status
   :target: https://quay.io/repository/biocontainers/agat
.. _`agat/tags`: https://quay.io/repository/biocontainers/agat?tab=tags


.. raw:: html

    <script>
        var package = "agat";
        var versions = ["1.6.1","1.6.1","1.5.1","1.5.0","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agat/README.html