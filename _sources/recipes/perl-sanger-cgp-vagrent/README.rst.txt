:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-vagrent'
.. highlight: bash

perl-sanger-cgp-vagrent
=======================

.. conda:recipe:: perl-sanger-cgp-vagrent
   :replaces_section_title:
   :noindex:

   A toolset for comparing genomic variants to reference genome annotation to identify potential biological consequences.

   :homepage: https://github.com/cancerit/VAGrENT
   :license: GPL / GPL3
   :recipe: /`perl-sanger-cgp-vagrent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vagrent

   |downloads_perl-sanger-cgp-vagrent| |docker_perl-sanger-cgp-vagrent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.0-3</code>,  <code>3.7.0-2</code>,  <code>3.7.0-1</code>,  <code>3.7.0-0</code>,  <code>3.6.1-0</code>,  <code>3.5.2-0</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  <code>3.3.3-0</code>,  </span></summary>
      

      ``3.7.0-3``,  ``3.7.0-2``,  ``3.7.0-1``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.5.2-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.3.3-0``,  ``3.2.0-1``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bio-db-hts: ``>=3.1,<4.0a0``
   :depends on perl-bioperl: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-set-intervaltree: ``>=0.12,<0.13.0a0``
   :depends on perl-sub-exporter-progressive: ``0.001013.*``

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

    pixi global install perl-sanger-cgp-vagrent

to add into an existing workspace instead, run::

    pixi add perl-sanger-cgp-vagrent

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sanger-cgp-vagrent

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sanger-cgp-vagrent

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sanger-cgp-vagrent:<tag>

(see `perl-sanger-cgp-vagrent/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sanger-cgp-vagrent| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vagrent.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-vagrent
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vagrent| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent
.. _`perl-sanger-cgp-vagrent/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-vagrent";
        var versions = ["3.7.0","3.7.0","3.7.0","3.7.0","3.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html