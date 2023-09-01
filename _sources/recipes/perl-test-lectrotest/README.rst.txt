:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-lectrotest'
.. highlight: bash

perl-test-lectrotest
====================

.. conda:recipe:: perl-test-lectrotest/0.5001
   :replaces_section_title:
   :noindex:

   Easy\, automatic\, specification\-based tests

   :homepage: http://metacpan.org/pod/Test::LectroTest
   :license: perl_5
   :recipe: /`perl-test-lectrotest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-lectrotest>`_/`0.5001 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-lectrotest/0.5001>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-lectrotest/0.5001/meta.yaml>`_

   


.. conda:package:: perl-test-lectrotest

   |downloads_perl-test-lectrotest| |docker_perl-test-lectrotest|

   :versions:
      
      

      ``0.5001-1``,  ``0.5001-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-data-dumper: 
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

      mamba install perl-test-lectrotest

   and update with::

      mamba update perl-test-lectrotest

  To create a new environment, run::

      mamba create --name myenvname perl-test-lectrotest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-lectrotest:<tag>

   (see `perl-test-lectrotest/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-lectrotest| image:: https://img.shields.io/conda/dn/bioconda/perl-test-lectrotest.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-lectrotest
   :alt:   (downloads)
.. |docker_perl-test-lectrotest| image:: https://quay.io/repository/biocontainers/perl-test-lectrotest/status
   :target: https://quay.io/repository/biocontainers/perl-test-lectrotest
.. _`perl-test-lectrotest/tags`: https://quay.io/repository/biocontainers/perl-test-lectrotest?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-lectrotest";
        var versions = ["0.5001","0.5001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-lectrotest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-lectrotest/README.html