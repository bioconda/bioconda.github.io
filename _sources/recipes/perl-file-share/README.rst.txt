:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-share'
.. highlight: bash

perl-file-share
===============

.. conda:recipe:: perl-file-share/0.25
   :replaces_section_title:
   :noindex:

   Extend File\:\:ShareDir to Local Libraries

   :homepage: https://github.com/ingydotnet/file-share-pm
   :license: perl_5
   :recipe: /`perl-file-share <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share>`_/`0.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25/meta.yaml>`_

   


.. conda:package:: perl-file-share

   |downloads_perl-file-share| |docker_perl-file-share|

   :versions:
      
      

      ``0.25-3``,  ``0.25-2``,  ``0.25-1``,  ``0.25-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-sharedir: 
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

      mamba install perl-file-share

   and update with::

      mamba update perl-file-share

  To create a new environment, run::

      mamba create --name myenvname perl-file-share

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-share:<tag>

   (see `perl-file-share/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-share| image:: https://img.shields.io/conda/dn/bioconda/perl-file-share.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-share
   :alt:   (downloads)
.. |docker_perl-file-share| image:: https://quay.io/repository/biocontainers/perl-file-share/status
   :target: https://quay.io/repository/biocontainers/perl-file-share
.. _`perl-file-share/tags`: https://quay.io/repository/biocontainers/perl-file-share?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-share";
        var versions = ["0.25","0.25","0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-share/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-share/README.html