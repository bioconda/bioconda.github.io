:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-ttest'
.. highlight: bash

perl-statistics-ttest
=====================

.. conda:recipe:: perl-statistics-ttest
   :replaces_section_title:
   :noindex:

   Perl module to perform T\-test on 2 independent samples Statistics\:\:TTest\:\:Sufficient \- Perl module to perfrom T\-Test on 2 indepdent samples using sufficient statistics

   :homepage: http://metacpan.org/pod/Statistics-TTest
   :license: perl_5
   :recipe: /`perl-statistics-ttest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-ttest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-ttest/meta.yaml>`_

   


.. conda:package:: perl-statistics-ttest

   |downloads_perl-statistics-ttest| |docker_perl-statistics-ttest|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-statistics-descriptive: 
   :depends perl-statistics-distributions: 
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

      mamba install perl-statistics-ttest

   and update with::

      mamba update perl-statistics-ttest

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-ttest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-ttest:<tag>

   (see `perl-statistics-ttest/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-ttest| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-ttest.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-ttest
   :alt:   (downloads)
.. |docker_perl-statistics-ttest| image:: https://quay.io/repository/biocontainers/perl-statistics-ttest/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-ttest
.. _`perl-statistics-ttest/tags`: https://quay.io/repository/biocontainers/perl-statistics-ttest?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-ttest";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-ttest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-ttest/README.html