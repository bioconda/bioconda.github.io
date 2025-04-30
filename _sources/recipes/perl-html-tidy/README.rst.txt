:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tidy'
.. highlight: bash

perl-html-tidy
==============

.. conda:recipe:: perl-html-tidy
   :replaces_section_title:
   :noindex:

   \(X\)HTML validation in a Perl object

   :homepage: http://github.com/petdance/html-tidy
   :license: artistic_2
   :recipe: /`perl-html-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy/meta.yaml>`_

   


.. conda:package:: perl-html-tidy

   |downloads_perl-html-tidy| |docker_perl-html-tidy|

   :versions:
      
      

      ``1.60-6``,  ``1.60-5``,  ``1.60-3``,  ``1.60-2``,  ``1.60-1``,  ``1.60-0``,  ``1.56-2``,  ``1.56-1``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-getopt-long: ``>=2.58,<3.0a0``
   :depends tidyp: ``>=1.4,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-html-tidy

   and update with::

      mamba update perl-html-tidy

  To create a new environment, run::

      mamba create --name myenvname perl-html-tidy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-html-tidy:<tag>

   (see `perl-html-tidy/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tidy.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tidy
   :alt:   (downloads)
.. |docker_perl-html-tidy| image:: https://quay.io/repository/biocontainers/perl-html-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-html-tidy
.. _`perl-html-tidy/tags`: https://quay.io/repository/biocontainers/perl-html-tidy?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tidy";
        var versions = ["1.60","1.60","1.60","1.60","1.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tidy/README.html