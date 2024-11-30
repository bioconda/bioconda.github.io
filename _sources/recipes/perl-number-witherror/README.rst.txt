:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-witherror'
.. highlight: bash

perl-number-witherror
=====================

.. conda:recipe:: perl-number-witherror/1.01
   :replaces_section_title:
   :noindex:

   Numbers with error propagation and scientific rounding

   :homepage: http://metacpan.org/pod/Number::WithError
   :license: perl_5
   :recipe: /`perl-number-witherror <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror>`_/`1.01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror/1.01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror/1.01/meta.yaml>`_

   


.. conda:package:: perl-number-witherror

   |downloads_perl-number-witherror| |docker_perl-number-witherror|

   :versions:
      
      

      ``1.01-1``,  ``1.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-params-util: 
   :depends perl-prefork: 
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

      mamba install perl-number-witherror

   and update with::

      mamba update perl-number-witherror

  To create a new environment, run::

      mamba create --name myenvname perl-number-witherror

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-number-witherror:<tag>

   (see `perl-number-witherror/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-witherror| image:: https://img.shields.io/conda/dn/bioconda/perl-number-witherror.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-witherror
   :alt:   (downloads)
.. |docker_perl-number-witherror| image:: https://quay.io/repository/biocontainers/perl-number-witherror/status
   :target: https://quay.io/repository/biocontainers/perl-number-witherror
.. _`perl-number-witherror/tags`: https://quay.io/repository/biocontainers/perl-number-witherror?tab=tags


.. raw:: html

    <script>
        var package = "perl-number-witherror";
        var versions = ["1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-witherror/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-witherror/README.html