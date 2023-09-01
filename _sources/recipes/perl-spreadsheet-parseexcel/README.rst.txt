:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spreadsheet-parseexcel'
.. highlight: bash

perl-spreadsheet-parseexcel
===========================

.. conda:recipe:: perl-spreadsheet-parseexcel
   :replaces_section_title:
   :noindex:

   Read information from an Excel file.

   :homepage: http://github.com/runrig/spreadsheet-parseexcel/
   :license: perl_5
   :recipe: /`perl-spreadsheet-parseexcel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel/meta.yaml>`_

   


.. conda:package:: perl-spreadsheet-parseexcel

   |downloads_perl-spreadsheet-parseexcel| |docker_perl-spreadsheet-parseexcel|

   :versions:
      
      

      ``0.65-3``,  ``0.65-2``,  ``0.65-1``,  ``0.65-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-crypt-rc4: 
   :depends perl-digest-perl-md5: 
   :depends perl-io-stringy: 
   :depends perl-jcode: 
   :depends perl-ole-storage_lite: 
   :depends perl-spreadsheet-writeexcel: 
   :depends perl-unicode-map: 
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

      mamba install perl-spreadsheet-parseexcel

   and update with::

      mamba update perl-spreadsheet-parseexcel

  To create a new environment, run::

      mamba create --name myenvname perl-spreadsheet-parseexcel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-spreadsheet-parseexcel:<tag>

   (see `perl-spreadsheet-parseexcel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-spreadsheet-parseexcel| image:: https://img.shields.io/conda/dn/bioconda/perl-spreadsheet-parseexcel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-spreadsheet-parseexcel
   :alt:   (downloads)
.. |docker_perl-spreadsheet-parseexcel| image:: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel/status
   :target: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel
.. _`perl-spreadsheet-parseexcel/tags`: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel?tab=tags


.. raw:: html

    <script>
        var package = "perl-spreadsheet-parseexcel";
        var versions = ["0.65","0.65","0.65","0.65"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html