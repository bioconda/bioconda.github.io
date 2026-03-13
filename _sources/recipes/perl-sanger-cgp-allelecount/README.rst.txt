:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-allelecount'
.. highlight: bash

perl-sanger-cgp-allelecount
===========================

.. conda:recipe:: perl-sanger-cgp-allelecount
   :replaces_section_title:
   :noindex:

   Support code for NGS copy number algorithm

   :homepage: https://github.com/cancerit/alleleCount
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-allelecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-allelecount

   |downloads_perl-sanger-cgp-allelecount| |docker_perl-sanger-cgp-allelecount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-2</code>,  <code>4.3.0-1</code>,  <code>4.3.0-0</code>,  <code>4.2.1-1</code>,  <code>4.2.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  </span></summary>
      

      ``4.3.0-2``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.1-1``,  ``4.2.1-0``,  ``4.1.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bio-samtools: 
   :depends on perl-bioperl: 
   :depends on perl-file-slurp: ``9999.32.*``
   :depends on perl-file-which: 
   :depends on perl-module-build: ``0.4232.*``
   :depends on perl-pod-coverage: 
   :depends on perl-sanger-cgp-vcf: 

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

    pixi global install perl-sanger-cgp-allelecount

to add into an existing workspace instead, run::

    pixi add perl-sanger-cgp-allelecount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sanger-cgp-allelecount

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sanger-cgp-allelecount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sanger-cgp-allelecount:<tag>

(see `perl-sanger-cgp-allelecount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sanger-cgp-allelecount| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-allelecount.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-allelecount
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-allelecount| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount
.. _`perl-sanger-cgp-allelecount/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-allelecount";
        var versions = ["4.3.0","4.3.0","4.3.0","4.2.1","4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html