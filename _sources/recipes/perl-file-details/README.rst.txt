:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-details'
.. highlight: bash

perl-file-details
=================

.. conda:recipe:: perl-file-details
   :replaces_section_title:
   :noindex:

   File details in an object\, stat\, hash\, etc..

   :homepage: http://metacpan.org/pod/File::Details
   :license: perl_5
   :recipe: /`perl-file-details <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-details>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-details/meta.yaml>`_

   


.. conda:package:: perl-file-details

   |downloads_perl-file-details| |docker_perl-file-details|

   :versions:
      
      

      ``0.003-2``,  ``0.003-1``,  ``0.003-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-accessor: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-file-details

   and update with::

      mamba update perl-file-details

  To create a new environment, run::

      mamba create --name myenvname perl-file-details

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-details:<tag>

   (see `perl-file-details/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-details| image:: https://img.shields.io/conda/dn/bioconda/perl-file-details.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-details
   :alt:   (downloads)
.. |docker_perl-file-details| image:: https://quay.io/repository/biocontainers/perl-file-details/status
   :target: https://quay.io/repository/biocontainers/perl-file-details
.. _`perl-file-details/tags`: https://quay.io/repository/biocontainers/perl-file-details?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-details";
        var versions = ["0.003","0.003","0.003"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-details/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-details/README.html