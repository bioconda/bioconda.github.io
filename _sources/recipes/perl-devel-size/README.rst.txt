:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-size'
.. highlight: bash

perl-devel-size
===============

.. conda:recipe:: perl-devel-size
   :replaces_section_title:
   :noindex:

   Perl extension for finding the memory usage of Perl variables

   :homepage: http://metacpan.org/pod/Devel::Size
   :license: perl_5
   :recipe: /`perl-devel-size <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-size/meta.yaml>`_

   


.. conda:package:: perl-devel-size

   |downloads_perl-devel-size| |docker_perl-devel-size|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.85-0</code>,  <code>0.84-1</code>,  <code>0.84-0</code>,  <code>0.83-5</code>,  <code>0.83-4</code>,  <code>0.83-3</code>,  <code>0.83-2</code>,  <code>0.83-1</code>,  <code>0.83-0</code>,  </span></summary>
      

      ``0.85-0``,  ``0.84-1``,  ``0.84-0``,  ``0.83-5``,  ``0.83-4``,  ``0.83-3``,  ``0.83-2``,  ``0.83-1``,  ``0.83-0``,  ``0.82-0``,  ``0.80-1``,  ``0.80-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-test-simple: 
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

      mamba install perl-devel-size

   and update with::

      mamba update perl-devel-size

  To create a new environment, run::

      mamba create --name myenvname perl-devel-size

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-size:<tag>

   (see `perl-devel-size/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-size| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-size.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-size
   :alt:   (downloads)
.. |docker_perl-devel-size| image:: https://quay.io/repository/biocontainers/perl-devel-size/status
   :target: https://quay.io/repository/biocontainers/perl-devel-size
.. _`perl-devel-size/tags`: https://quay.io/repository/biocontainers/perl-devel-size?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-size";
        var versions = ["0.85","0.84","0.84","0.83","0.83"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-size/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-size/README.html