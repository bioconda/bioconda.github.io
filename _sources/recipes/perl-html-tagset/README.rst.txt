:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tagset'
.. highlight: bash

perl-html-tagset
================

.. conda:recipe:: perl-html-tagset
   :replaces_section_title:
   :noindex:

   data tables useful in parsing HTML

   :homepage: http://metacpan.org/pod/HTML::Tagset
   :license: unknown
   :recipe: /`perl-html-tagset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tagset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tagset/meta.yaml>`_

   


.. conda:package:: perl-html-tagset

   |downloads_perl-html-tagset| |docker_perl-html-tagset|

   :versions:
      
      

      ``3.20-4``,  ``3.20-3``,  ``3.20-2``,  ``3.20-1``,  ``3.20-0``

      

   
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

      mamba install perl-html-tagset

   and update with::

      mamba update perl-html-tagset

  To create a new environment, run::

      mamba create --name myenvname perl-html-tagset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-tagset:<tag>

   (see `perl-html-tagset/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tagset| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tagset.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tagset
   :alt:   (downloads)
.. |docker_perl-html-tagset| image:: https://quay.io/repository/biocontainers/perl-html-tagset/status
   :target: https://quay.io/repository/biocontainers/perl-html-tagset
.. _`perl-html-tagset/tags`: https://quay.io/repository/biocontainers/perl-html-tagset?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tagset";
        var versions = ["3.20","3.20","3.20","3.20","3.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tagset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tagset/README.html