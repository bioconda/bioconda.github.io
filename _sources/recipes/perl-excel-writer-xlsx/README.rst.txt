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
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-archive-zip: 
   :depends perl-file-temp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-excel-writer-xlsx

   and update with::

      mamba update perl-excel-writer-xlsx

  To create a new environment, run::

      mamba create --name myenvname perl-excel-writer-xlsx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-excel-writer-xlsx:<tag>

   (see `perl-excel-writer-xlsx/tags`_ for valid values for ``<tag>``)


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