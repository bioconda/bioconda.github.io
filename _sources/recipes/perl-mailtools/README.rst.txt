:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mailtools'
.. highlight: bash

perl-mailtools
==============

.. conda:recipe:: perl-mailtools
   :replaces_section_title:
   :noindex:

   Various e\-mail related modules

   :homepage: http://metacpan.org/pod/MailTools
   :license: perl_5
   :recipe: /`perl-mailtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mailtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mailtools/meta.yaml>`_

   


.. conda:package:: perl-mailtools

   |downloads_perl-mailtools| |docker_perl-mailtools|

   :versions:
      
      

      ``2.21-1``,  ``2.21-0``,  ``2.20-0``,  ``2.14-1``,  ``2.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-timedate: 
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

      mamba install perl-mailtools

   and update with::

      mamba update perl-mailtools

  To create a new environment, run::

      mamba create --name myenvname perl-mailtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mailtools:<tag>

   (see `perl-mailtools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mailtools| image:: https://img.shields.io/conda/dn/bioconda/perl-mailtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mailtools
   :alt:   (downloads)
.. |docker_perl-mailtools| image:: https://quay.io/repository/biocontainers/perl-mailtools/status
   :target: https://quay.io/repository/biocontainers/perl-mailtools
.. _`perl-mailtools/tags`: https://quay.io/repository/biocontainers/perl-mailtools?tab=tags


.. raw:: html

    <script>
        var package = "perl-mailtools";
        var versions = ["2.21","2.21","2.20","2.14","2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mailtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mailtools/README.html