:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-convert-binary-c'
.. highlight: bash

perl-convert-binary-c
=====================

.. conda:recipe:: perl-convert-binary-c
   :replaces_section_title:
   :noindex:

   Binary Data Conversion using C Types

   :homepage: http://search.cpan.org/~mhx/Convert-Binary-C/
   :license: perl_5
   :recipe: /`perl-convert-binary-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-convert-binary-c/meta.yaml>`_

   


.. conda:package:: perl-convert-binary-c

   |downloads_perl-convert-binary-c| |docker_perl-convert-binary-c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.85-1</code>,  <code>0.85-0</code>,  <code>0.84-3</code>,  <code>0.84-2</code>,  <code>0.84-1</code>,  <code>0.84-0</code>,  <code>0.78-4</code>,  <code>0.78-3</code>,  <code>0.78-2</code>,  </span></summary>
      

      ``0.85-1``,  ``0.85-0``,  ``0.84-3``,  ``0.84-2``,  ``0.84-1``,  ``0.84-0``,  ``0.78-4``,  ``0.78-3``,  ``0.78-2``,  ``0.78-1``,  ``0.78-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-convert-binary-c

   and update with::

      mamba update perl-convert-binary-c

  To create a new environment, run::

      mamba create --name myenvname perl-convert-binary-c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-convert-binary-c:<tag>

   (see `perl-convert-binary-c/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-convert-binary-c| image:: https://img.shields.io/conda/dn/bioconda/perl-convert-binary-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-convert-binary-c
   :alt:   (downloads)
.. |docker_perl-convert-binary-c| image:: https://quay.io/repository/biocontainers/perl-convert-binary-c/status
   :target: https://quay.io/repository/biocontainers/perl-convert-binary-c
.. _`perl-convert-binary-c/tags`: https://quay.io/repository/biocontainers/perl-convert-binary-c?tab=tags


.. raw:: html

    <script>
        var package = "perl-convert-binary-c";
        var versions = ["0.85","0.85","0.84","0.84","0.84"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-convert-binary-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-convert-binary-c/README.html