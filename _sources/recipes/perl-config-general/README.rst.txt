:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-general'
.. highlight: bash

perl-config-general
===================

.. conda:recipe:: perl-config-general
   :replaces_section_title:
   :noindex:

   Generic Config Module

   :homepage: http://metacpan.org/pod/Config-General
   :license: perl_5
   :recipe: /`perl-config-general <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general/meta.yaml>`_

   


.. conda:package:: perl-config-general

   |downloads_perl-config-general| |docker_perl-config-general|

   :versions:
      
      

      ``2.65-0``,  ``2.63-1``,  ``2.63-0``,  ``2.61-1``,  ``2.61-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-pathtools: 
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

      mamba install perl-config-general

   and update with::

      mamba update perl-config-general

  To create a new environment, run::

      mamba create --name myenvname perl-config-general

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-config-general:<tag>

   (see `perl-config-general/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-config-general| image:: https://img.shields.io/conda/dn/bioconda/perl-config-general.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-general
   :alt:   (downloads)
.. |docker_perl-config-general| image:: https://quay.io/repository/biocontainers/perl-config-general/status
   :target: https://quay.io/repository/biocontainers/perl-config-general
.. _`perl-config-general/tags`: https://quay.io/repository/biocontainers/perl-config-general?tab=tags


.. raw:: html

    <script>
        var package = "perl-config-general";
        var versions = ["2.65","2.63","2.63","2.61","2.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-general/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-general/README.html