:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-attribute'
.. highlight: bash

perl-sub-attribute
==================

.. conda:recipe:: perl-sub-attribute
   :replaces_section_title:
   :noindex:

   Reliable subroutine attribute handlers

   :homepage: http://metacpan.org/pod/Sub::Attribute
   :license: perl_5
   :recipe: /`perl-sub-attribute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute/meta.yaml>`_

   


.. conda:package:: perl-sub-attribute

   |downloads_perl-sub-attribute| |docker_perl-sub-attribute|

   :versions:
      
      

      ``0.07-2``,  ``0.07-1``,  ``0.07-0``,  ``0.05-4``,  ``0.05-3``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-class-trigger: ``0.15.*``
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

      mamba install perl-sub-attribute

   and update with::

      mamba update perl-sub-attribute

  To create a new environment, run::

      mamba create --name myenvname perl-sub-attribute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sub-attribute:<tag>

   (see `perl-sub-attribute/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-attribute| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-attribute.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-attribute
   :alt:   (downloads)
.. |docker_perl-sub-attribute| image:: https://quay.io/repository/biocontainers/perl-sub-attribute/status
   :target: https://quay.io/repository/biocontainers/perl-sub-attribute
.. _`perl-sub-attribute/tags`: https://quay.io/repository/biocontainers/perl-sub-attribute?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-attribute";
        var versions = ["0.07","0.07","0.07","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-attribute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-attribute/README.html