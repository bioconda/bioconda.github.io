:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spreadsheet-writeexcel'
.. highlight: bash

perl-spreadsheet-writeexcel
===========================

.. conda:recipe:: perl-spreadsheet-writeexcel
   :replaces_section_title:
   :noindex:

   Write to a cross platform Excel binary file

   :homepage: http://metacpan.org/pod/Spreadsheet-WriteExcel
   :license: perl_5
   :recipe: /`perl-spreadsheet-writeexcel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-writeexcel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-writeexcel/meta.yaml>`_

   


.. conda:package:: perl-spreadsheet-writeexcel

   |downloads_perl-spreadsheet-writeexcel| |docker_perl-spreadsheet-writeexcel|

   :versions:
      
      

      ``2.40-3``,  ``2.40-2``,  ``2.40-1``,  ``2.40-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-ole-storage_lite: 
   :depends perl-parse-recdescent: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-spreadsheet-writeexcel

   and update with::

      mamba update perl-spreadsheet-writeexcel

  To create a new environment, run::

      mamba create --name myenvname perl-spreadsheet-writeexcel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-spreadsheet-writeexcel:<tag>

   (see `perl-spreadsheet-writeexcel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-spreadsheet-writeexcel| image:: https://img.shields.io/conda/dn/bioconda/perl-spreadsheet-writeexcel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-spreadsheet-writeexcel
   :alt:   (downloads)
.. |docker_perl-spreadsheet-writeexcel| image:: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel/status
   :target: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel
.. _`perl-spreadsheet-writeexcel/tags`: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel?tab=tags


.. raw:: html

    <script>
        var package = "perl-spreadsheet-writeexcel";
        var versions = ["2.40","2.40","2.40","2.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spreadsheet-writeexcel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spreadsheet-writeexcel/README.html