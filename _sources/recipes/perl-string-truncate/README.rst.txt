:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-truncate'
.. highlight: bash

perl-string-truncate
====================

.. conda:recipe:: perl-string-truncate
   :replaces_section_title:
   :noindex:

   a module for when strings are too long to be displayed in...

   :homepage: https://github.com/rjbs/String-Truncate
   :license: perl_5
   :recipe: /`perl-string-truncate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-truncate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-truncate/meta.yaml>`_

   


.. conda:package:: perl-string-truncate

   |downloads_perl-string-truncate| |docker_perl-string-truncate|

   :versions:
      
      

      ``1.100603-0``,  ``1.100602-1``,  ``1.100602-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-sub-exporter: 
   :depends perl-sub-install: 
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

      mamba install perl-string-truncate

   and update with::

      mamba update perl-string-truncate

  To create a new environment, run::

      mamba create --name myenvname perl-string-truncate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-truncate:<tag>

   (see `perl-string-truncate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-truncate| image:: https://img.shields.io/conda/dn/bioconda/perl-string-truncate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-truncate
   :alt:   (downloads)
.. |docker_perl-string-truncate| image:: https://quay.io/repository/biocontainers/perl-string-truncate/status
   :target: https://quay.io/repository/biocontainers/perl-string-truncate
.. _`perl-string-truncate/tags`: https://quay.io/repository/biocontainers/perl-string-truncate?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-truncate";
        var versions = ["1.100603","1.100602","1.100602"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-truncate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-truncate/README.html