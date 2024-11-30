:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-scalar-util-numeric'
.. highlight: bash

perl-scalar-util-numeric
========================

.. conda:recipe:: perl-scalar-util-numeric
   :replaces_section_title:
   :noindex:

   numeric tests for perl scalars

   :homepage: http://metacpan.org/pod/Scalar-Util-Numeric
   :license: perl_5
   :recipe: /`perl-scalar-util-numeric <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric/meta.yaml>`_

   


.. conda:package:: perl-scalar-util-numeric

   |downloads_perl-scalar-util-numeric| |docker_perl-scalar-util-numeric|

   :versions:
      
      

      ``0.40-6``,  ``0.40-5``,  ``0.40-4``,  ``0.40-3``,  ``0.40-2``,  ``0.40-1``,  ``0.40-0``

      

   
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-scalar-util-numeric

   and update with::

      mamba update perl-scalar-util-numeric

  To create a new environment, run::

      mamba create --name myenvname perl-scalar-util-numeric

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-scalar-util-numeric:<tag>

   (see `perl-scalar-util-numeric/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-scalar-util-numeric| image:: https://img.shields.io/conda/dn/bioconda/perl-scalar-util-numeric.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-scalar-util-numeric
   :alt:   (downloads)
.. |docker_perl-scalar-util-numeric| image:: https://quay.io/repository/biocontainers/perl-scalar-util-numeric/status
   :target: https://quay.io/repository/biocontainers/perl-scalar-util-numeric
.. _`perl-scalar-util-numeric/tags`: https://quay.io/repository/biocontainers/perl-scalar-util-numeric?tab=tags


.. raw:: html

    <script>
        var package = "perl-scalar-util-numeric";
        var versions = ["0.40","0.40","0.40","0.40","0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html