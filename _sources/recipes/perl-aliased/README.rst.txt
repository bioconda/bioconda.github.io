:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-aliased'
.. highlight: bash

perl-aliased
============

.. conda:recipe:: perl-aliased
   :replaces_section_title:
   :noindex:

   Use shorter versions of class names.

   :homepage: https://github.com/karenetheridge/aliased
   :license: perl_5
   :recipe: /`perl-aliased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aliased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aliased/meta.yaml>`_

   


.. conda:package:: perl-aliased

   |downloads_perl-aliased| |docker_perl-aliased|

   :versions:
      
      

      ``0.34-3``,  ``0.34-2``,  ``0.34-1``,  ``0.34-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
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

      mamba install perl-aliased

   and update with::

      mamba update perl-aliased

  To create a new environment, run::

      mamba create --name myenvname perl-aliased

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-aliased:<tag>

   (see `perl-aliased/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-aliased| image:: https://img.shields.io/conda/dn/bioconda/perl-aliased.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-aliased
   :alt:   (downloads)
.. |docker_perl-aliased| image:: https://quay.io/repository/biocontainers/perl-aliased/status
   :target: https://quay.io/repository/biocontainers/perl-aliased
.. _`perl-aliased/tags`: https://quay.io/repository/biocontainers/perl-aliased?tab=tags


.. raw:: html

    <script>
        var package = "perl-aliased";
        var versions = ["0.34","0.34","0.34","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-aliased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-aliased/README.html