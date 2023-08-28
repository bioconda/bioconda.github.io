:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-entities-numbered'
.. highlight: bash

perl-html-entities-numbered
===========================

.. conda:recipe:: perl-html-entities-numbered
   :replaces_section_title:
   :noindex:

   Conversion of numbered HTML entities

   :homepage: http://metacpan.org/pod/HTML-Entities-Numbered
   :license: unknown
   :recipe: /`perl-html-entities-numbered <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-entities-numbered>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-entities-numbered/meta.yaml>`_

   


.. conda:package:: perl-html-entities-numbered

   |downloads_perl-html-entities-numbered| |docker_perl-html-entities-numbered|

   :versions:
      
      

      ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
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

      mamba install perl-html-entities-numbered

   and update with::

      mamba update perl-html-entities-numbered

  To create a new environment, run::

      mamba create --name myenvname perl-html-entities-numbered

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-entities-numbered:<tag>

   (see `perl-html-entities-numbered/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-entities-numbered| image:: https://img.shields.io/conda/dn/bioconda/perl-html-entities-numbered.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-entities-numbered
   :alt:   (downloads)
.. |docker_perl-html-entities-numbered| image:: https://quay.io/repository/biocontainers/perl-html-entities-numbered/status
   :target: https://quay.io/repository/biocontainers/perl-html-entities-numbered
.. _`perl-html-entities-numbered/tags`: https://quay.io/repository/biocontainers/perl-html-entities-numbered?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-entities-numbered";
        var versions = ["0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-entities-numbered/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-entities-numbered/README.html