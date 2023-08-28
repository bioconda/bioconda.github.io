:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-tabs'
.. highlight: bash

perl-text-tabs
==============

.. conda:recipe:: perl-text-tabs/2013.0523
   :replaces_section_title:
   :noindex:

   expand and unexpand tabs like unix expand\(1\) and unexpand\(1\)

   :homepage: http://metacpan.org/pod/Text::Tabs
   :license: perl_5
   :recipe: /`perl-text-tabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs>`_/`2013.0523 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs/2013.0523>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs/2013.0523/meta.yaml>`_

   


.. conda:package:: perl-text-tabs

   |downloads_perl-text-tabs| |docker_perl-text-tabs|

   :versions:
      
      

      ``2013.0523-2``,  ``2013.0523-1``,  ``2013.0523-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-text-tabs

   and update with::

      mamba update perl-text-tabs

  To create a new environment, run::

      mamba create --name myenvname perl-text-tabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-tabs:<tag>

   (see `perl-text-tabs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-tabs| image:: https://img.shields.io/conda/dn/bioconda/perl-text-tabs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-tabs
   :alt:   (downloads)
.. |docker_perl-text-tabs| image:: https://quay.io/repository/biocontainers/perl-text-tabs/status
   :target: https://quay.io/repository/biocontainers/perl-text-tabs
.. _`perl-text-tabs/tags`: https://quay.io/repository/biocontainers/perl-text-tabs?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-tabs";
        var versions = ["2013.0523","2013.0523","2013.0523"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-tabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-tabs/README.html