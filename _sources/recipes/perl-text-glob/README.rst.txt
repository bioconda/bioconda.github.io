:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-glob'
.. highlight: bash

perl-text-glob
==============

.. conda:recipe:: perl-text-glob
   :replaces_section_title:
   :noindex:

   match globbing patterns against text

   :homepage: https://metacpan.org/pod/Text::Glob
   :license: perl_5
   :recipe: /`perl-text-glob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-glob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-glob/meta.yaml>`_

   


.. conda:package:: perl-text-glob

   |downloads_perl-text-glob| |docker_perl-text-glob|

   :versions:
      
      

      ``0.11-2``,  ``0.11-1``,  ``0.11-0``,  ``0.09-0``

      

   
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

      mamba install perl-text-glob

   and update with::

      mamba update perl-text-glob

  To create a new environment, run::

      mamba create --name myenvname perl-text-glob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-glob:<tag>

   (see `perl-text-glob/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-glob| image:: https://img.shields.io/conda/dn/bioconda/perl-text-glob.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-glob
   :alt:   (downloads)
.. |docker_perl-text-glob| image:: https://quay.io/repository/biocontainers/perl-text-glob/status
   :target: https://quay.io/repository/biocontainers/perl-text-glob
.. _`perl-text-glob/tags`: https://quay.io/repository/biocontainers/perl-text-glob?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-glob";
        var versions = ["0.11","0.11","0.11","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-glob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-glob/README.html