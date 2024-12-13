:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-intervaltree'
.. highlight: bash

perl-set-intervaltree
=====================

.. conda:recipe:: perl-set-intervaltree
   :replaces_section_title:
   :noindex:

   An interval tree implementation in PERL.

   :homepage: https://metacpan.org/pod/Set::IntervalTree
   :license: perl_5
   :recipe: /`perl-set-intervaltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree/meta.yaml>`_

   


.. conda:package:: perl-set-intervaltree

   |downloads_perl-set-intervaltree| |docker_perl-set-intervaltree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12-5</code>,  <code>0.12-4</code>,  <code>0.12-3</code>,  <code>0.12-2</code>,  <code>0.12-1</code>,  <code>0.12-0</code>,  <code>0.11-1</code>,  <code>0.11-0</code>,  <code>0.10-4</code>,  </span></summary>
      

      ``0.12-5``,  ``0.12-4``,  ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``,  ``0.11-1``,  ``0.11-0``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-extutils-cppguess: ``>=0.26,<0.27.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-set-intervaltree

   and update with::

      mamba update perl-set-intervaltree

  To create a new environment, run::

      mamba create --name myenvname perl-set-intervaltree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-set-intervaltree:<tag>

   (see `perl-set-intervaltree/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-set-intervaltree| image:: https://img.shields.io/conda/dn/bioconda/perl-set-intervaltree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-intervaltree
   :alt:   (downloads)
.. |docker_perl-set-intervaltree| image:: https://quay.io/repository/biocontainers/perl-set-intervaltree/status
   :target: https://quay.io/repository/biocontainers/perl-set-intervaltree
.. _`perl-set-intervaltree/tags`: https://quay.io/repository/biocontainers/perl-set-intervaltree?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-intervaltree";
        var versions = ["0.12","0.12","0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-intervaltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-intervaltree/README.html