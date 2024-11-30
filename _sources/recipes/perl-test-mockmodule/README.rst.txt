:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-mockmodule'
.. highlight: bash

perl-test-mockmodule
====================

.. conda:recipe:: perl-test-mockmodule
   :replaces_section_title:
   :noindex:

   Override subroutines in a module for unit testing

   :homepage: https://github.com/geofffranks/test-mockmodule
   :license: gpl_3
   :recipe: /`perl-test-mockmodule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule/meta.yaml>`_

   


.. conda:package:: perl-test-mockmodule

   |downloads_perl-test-mockmodule| |docker_perl-test-mockmodule|

   :versions:
      
      

      ``0.13-3``,  ``0.13-2``,  ``0.13-1``,  ``0.13-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-super: 
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

      mamba install perl-test-mockmodule

   and update with::

      mamba update perl-test-mockmodule

  To create a new environment, run::

      mamba create --name myenvname perl-test-mockmodule

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-mockmodule:<tag>

   (see `perl-test-mockmodule/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-mockmodule| image:: https://img.shields.io/conda/dn/bioconda/perl-test-mockmodule.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-mockmodule
   :alt:   (downloads)
.. |docker_perl-test-mockmodule| image:: https://quay.io/repository/biocontainers/perl-test-mockmodule/status
   :target: https://quay.io/repository/biocontainers/perl-test-mockmodule
.. _`perl-test-mockmodule/tags`: https://quay.io/repository/biocontainers/perl-test-mockmodule?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-mockmodule";
        var versions = ["0.13","0.13","0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-mockmodule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-mockmodule/README.html