:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-table'
.. highlight: bash

perl-term-table
===============

.. conda:recipe:: perl-term-table
   :replaces_section_title:
   :noindex:

   Format a header and rows into a table

   :homepage: http://metacpan.org/pod/Term::Table
   :license: perl_5
   :recipe: /`perl-term-table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table/meta.yaml>`_

   


.. conda:package:: perl-term-table

   |downloads_perl-term-table| |docker_perl-term-table|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.028-0</code>,  <code>0.027-0</code>,  <code>0.025-0</code>,  <code>0.024-0</code>,  <code>0.023-0</code>,  <code>0.022-0</code>,  <code>0.016-0</code>,  <code>0.013-1</code>,  <code>0.013-0</code>,  </span></summary>
      

      ``0.028-0``,  ``0.027-0``,  ``0.025-0``,  ``0.024-0``,  ``0.023-0``,  ``0.022-0``,  ``0.016-0``,  ``0.013-1``,  ``0.013-0``,  ``0.012-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-importer: 

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

    pixi global install perl-term-table

to add into an existing workspace instead, run::

    pixi add perl-term-table

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-term-table

Alternatively, to install into a new environment, run::

    conda create -n envname perl-term-table

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-term-table:<tag>

(see `perl-term-table/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-term-table| image:: https://img.shields.io/conda/dn/bioconda/perl-term-table.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-table
   :alt:   (downloads)
.. |docker_perl-term-table| image:: https://quay.io/repository/biocontainers/perl-term-table/status
   :target: https://quay.io/repository/biocontainers/perl-term-table
.. _`perl-term-table/tags`: https://quay.io/repository/biocontainers/perl-term-table?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-table";
        var versions = ["0.028","0.027","0.025","0.024","0.023"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-table/README.html