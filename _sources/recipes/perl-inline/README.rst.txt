:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-inline'
.. highlight: bash

perl-inline
===========

.. conda:recipe:: perl-inline
   :replaces_section_title:
   :noindex:

   Write Perl Subroutines in Other Programming Languages

   :homepage: https://github.com/ingydotnet/inline-pm
   :license: perl_5
   :recipe: /`perl-inline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline/meta.yaml>`_

   


.. conda:package:: perl-inline

   |downloads_perl-inline| |docker_perl-inline|

   :versions:
      
      

      ``0.86-0``,  ``0.83-1``,  ``0.83-0``,  ``0.82-0``,  ``0.80-3``,  ``0.80-2``,  ``0.80-1``,  ``0.80-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-md5: 
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

      mamba install perl-inline

   and update with::

      mamba update perl-inline

  To create a new environment, run::

      mamba create --name myenvname perl-inline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-inline:<tag>

   (see `perl-inline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-inline| image:: https://img.shields.io/conda/dn/bioconda/perl-inline.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-inline
   :alt:   (downloads)
.. |docker_perl-inline| image:: https://quay.io/repository/biocontainers/perl-inline/status
   :target: https://quay.io/repository/biocontainers/perl-inline
.. _`perl-inline/tags`: https://quay.io/repository/biocontainers/perl-inline?tab=tags


.. raw:: html

    <script>
        var package = "perl-inline";
        var versions = ["0.86","0.83","0.83","0.82","0.80"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline/README.html