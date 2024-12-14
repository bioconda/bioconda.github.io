:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-xsaccessor'
.. highlight: bash

perl-class-xsaccessor
=====================

.. conda:recipe:: perl-class-xsaccessor
   :replaces_section_title:
   :noindex:

   Generate fast XS accessors without runtime compilation

   :homepage: http://metacpan.org/pod/Class::XSAccessor
   :license: perl_5
   :recipe: /`perl-class-xsaccessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-xsaccessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-xsaccessor/meta.yaml>`_

   


.. conda:package:: perl-class-xsaccessor

   |downloads_perl-class-xsaccessor| |docker_perl-class-xsaccessor|

   :versions:
      
      

      ``1.19-8``,  ``1.19-7``,  ``1.19-6``,  ``1.19-5``,  ``1.19-4``,  ``1.19-2``,  ``1.19-1``,  ``1.19-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-time-hires: ``>=1.9764,<2.0a0``
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

      mamba install perl-class-xsaccessor

   and update with::

      mamba update perl-class-xsaccessor

  To create a new environment, run::

      mamba create --name myenvname perl-class-xsaccessor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-xsaccessor:<tag>

   (see `perl-class-xsaccessor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-xsaccessor| image:: https://img.shields.io/conda/dn/bioconda/perl-class-xsaccessor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-xsaccessor
   :alt:   (downloads)
.. |docker_perl-class-xsaccessor| image:: https://quay.io/repository/biocontainers/perl-class-xsaccessor/status
   :target: https://quay.io/repository/biocontainers/perl-class-xsaccessor
.. _`perl-class-xsaccessor/tags`: https://quay.io/repository/biocontainers/perl-class-xsaccessor?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-xsaccessor";
        var versions = ["1.19","1.19","1.19","1.19","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-xsaccessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-xsaccessor/README.html