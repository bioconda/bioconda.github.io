:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-excel-writer-xlsx'
.. highlight: bash

perl-excel-writer-xlsx
======================

.. conda:recipe:: perl-excel-writer-xlsx
   :replaces_section_title:
   :noindex:

   Create a new file in the Excel 2007\+ XLSX format.

   :homepage: http://jmcnamara.github.com/excel-writer-xlsx/
   :license: perl_5
   :recipe: /`perl-excel-writer-xlsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-excel-writer-xlsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-excel-writer-xlsx/meta.yaml>`_

   


.. conda:package:: perl-excel-writer-xlsx

   |downloads_perl-excel-writer-xlsx| |docker_perl-excel-writer-xlsx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15-0</code>,  <code>1.14-0</code>,  <code>1.13-0</code>,  <code>1.11-0</code>,  <code>1.10-0</code>,  <code>1.09-0</code>,  <code>1.00-1</code>,  <code>1.00-0</code>,  <code>0.98-0</code>,  </span></summary>
      

      ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.11-0``,  ``1.10-0``,  ``1.09-0``,  ``1.00-1``,  ``1.00-0``,  ``0.98-0``,  ``0.95-1``,  ``0.95-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-archive-zip: 
   :depends on perl-file-temp: 

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

    pixi global install perl-excel-writer-xlsx

to add into an existing workspace instead, run::

    pixi add perl-excel-writer-xlsx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-excel-writer-xlsx

Alternatively, to install into a new environment, run::

    conda create -n envname perl-excel-writer-xlsx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-excel-writer-xlsx:<tag>

(see `perl-excel-writer-xlsx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-excel-writer-xlsx| image:: https://img.shields.io/conda/dn/bioconda/perl-excel-writer-xlsx.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-excel-writer-xlsx
   :alt:   (downloads)
.. |docker_perl-excel-writer-xlsx| image:: https://quay.io/repository/biocontainers/perl-excel-writer-xlsx/status
   :target: https://quay.io/repository/biocontainers/perl-excel-writer-xlsx
.. _`perl-excel-writer-xlsx/tags`: https://quay.io/repository/biocontainers/perl-excel-writer-xlsx?tab=tags


.. raw:: html

    <script>
        var package = "perl-excel-writer-xlsx";
        var versions = ["1.15","1.14","1.13","1.11","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-excel-writer-xlsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-excel-writer-xlsx/README.html