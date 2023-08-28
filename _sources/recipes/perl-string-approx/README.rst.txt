:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-approx'
.. highlight: bash

perl-string-approx
==================

.. conda:recipe:: perl-string-approx/3.27
   :replaces_section_title:
   :noindex:

   Perl extension for approximate matching \(fuzzy matching\)

   :homepage: http://metacpan.org/pod/String::Approx
   :license: unknown
   :recipe: /`perl-string-approx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx>`_/`3.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx/3.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-approx/3.27/meta.yaml>`_

   


.. conda:package:: perl-string-approx

   |downloads_perl-string-approx| |docker_perl-string-approx|

   :versions:
      
      

      ``3.27-4``,  ``3.27-3``,  ``3.27-2``,  ``3.27-1``,  ``3.27-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-test-more: 
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

      mamba install perl-string-approx

   and update with::

      mamba update perl-string-approx

  To create a new environment, run::

      mamba create --name myenvname perl-string-approx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-approx:<tag>

   (see `perl-string-approx/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-approx| image:: https://img.shields.io/conda/dn/bioconda/perl-string-approx.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-approx
   :alt:   (downloads)
.. |docker_perl-string-approx| image:: https://quay.io/repository/biocontainers/perl-string-approx/status
   :target: https://quay.io/repository/biocontainers/perl-string-approx
.. _`perl-string-approx/tags`: https://quay.io/repository/biocontainers/perl-string-approx?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-approx";
        var versions = ["3.27","3.27","3.27","3.27","3.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-approx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-approx/README.html