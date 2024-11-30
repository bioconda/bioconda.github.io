:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-descriptive'
.. highlight: bash

perl-statistics-descriptive
===========================

.. conda:recipe:: perl-statistics-descriptive
   :replaces_section_title:
   :noindex:

   Module of basic descriptive statistical functions.

   :homepage: http://web-cpan.shlomifish.org/modules/Statistics-Descriptive/
   :license: perl_5
   :recipe: /`perl-statistics-descriptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-descriptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-descriptive/meta.yaml>`_

   


.. conda:package:: perl-statistics-descriptive

   |downloads_perl-statistics-descriptive| |docker_perl-statistics-descriptive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0801-0</code>,  <code>3.0800-0</code>,  <code>3.0702-1</code>,  <code>3.0702-0</code>,  <code>3.0612-2</code>,  <code>3.0612-1</code>,  <code>3.0612-0</code>,  <code>3.0609-5</code>,  <code>3.0609-4</code>,  </span></summary>
      

      ``3.0801-0``,  ``3.0800-0``,  ``3.0702-1``,  ``3.0702-0``,  ``3.0612-2``,  ``3.0612-1``,  ``3.0612-0``,  ``3.0609-5``,  ``3.0609-4``,  ``3.0609-3``,  ``3.0609-2``,  ``3.0609-1``,  ``3.0609-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-list-moreutils: 
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

      mamba install perl-statistics-descriptive

   and update with::

      mamba update perl-statistics-descriptive

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-descriptive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-descriptive:<tag>

   (see `perl-statistics-descriptive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-descriptive| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-descriptive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-descriptive
   :alt:   (downloads)
.. |docker_perl-statistics-descriptive| image:: https://quay.io/repository/biocontainers/perl-statistics-descriptive/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-descriptive
.. _`perl-statistics-descriptive/tags`: https://quay.io/repository/biocontainers/perl-statistics-descriptive?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-descriptive";
        var versions = ["3.0801","3.0800","3.0702","3.0702","3.0612"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-descriptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-descriptive/README.html