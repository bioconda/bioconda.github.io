:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-zip'
.. highlight: bash

perl-archive-zip
================

.. conda:recipe:: perl-archive-zip
   :replaces_section_title:
   :noindex:

   Provide an interface to ZIP archive files.

   :homepage: http://metacpan.org/pod/Archive::Zip
   :license: perl_5
   :recipe: /`perl-archive-zip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip/meta.yaml>`_

   


.. conda:package:: perl-archive-zip

   |downloads_perl-archive-zip| |docker_perl-archive-zip|

   :versions:
      
      

      ``1.68-0``,  ``1.64-1``,  ``1.64-0``,  ``1.60-0``,  ``1.55-4``,  ``1.55-3``,  ``1.55-2``,  ``1.55-1``,  ``1.55-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-compress-raw-zlib: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :depends perl-time-local: 
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

      mamba install perl-archive-zip

   and update with::

      mamba update perl-archive-zip

  To create a new environment, run::

      mamba create --name myenvname perl-archive-zip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-archive-zip:<tag>

   (see `perl-archive-zip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-zip| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-zip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-zip
   :alt:   (downloads)
.. |docker_perl-archive-zip| image:: https://quay.io/repository/biocontainers/perl-archive-zip/status
   :target: https://quay.io/repository/biocontainers/perl-archive-zip
.. _`perl-archive-zip/tags`: https://quay.io/repository/biocontainers/perl-archive-zip?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-zip";
        var versions = ["1.68","1.64","1.64","1.60","1.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-zip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-zip/README.html