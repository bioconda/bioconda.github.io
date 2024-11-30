:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-indirect'
.. highlight: bash

perl-indirect
=============

.. conda:recipe:: perl-indirect
   :replaces_section_title:
   :noindex:

   Lexically warn about using the indirect method call syntax.

   :homepage: http://search.cpan.org/dist/indirect/
   :license: perl_5
   :recipe: /`perl-indirect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect/meta.yaml>`_

   


.. conda:package:: perl-indirect

   |downloads_perl-indirect| |docker_perl-indirect|

   :versions:
      
      

      ``0.39-4``,  ``0.39-3``,  ``0.39-2``,  ``0.39-1``,  ``0.38-1``,  ``0.38-0``

      

   
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-socket6: ``>=0.29,<0.30.0a0``
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

      mamba install perl-indirect

   and update with::

      mamba update perl-indirect

  To create a new environment, run::

      mamba create --name myenvname perl-indirect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-indirect:<tag>

   (see `perl-indirect/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-indirect| image:: https://img.shields.io/conda/dn/bioconda/perl-indirect.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-indirect
   :alt:   (downloads)
.. |docker_perl-indirect| image:: https://quay.io/repository/biocontainers/perl-indirect/status
   :target: https://quay.io/repository/biocontainers/perl-indirect
.. _`perl-indirect/tags`: https://quay.io/repository/biocontainers/perl-indirect?tab=tags


.. raw:: html

    <script>
        var package = "perl-indirect";
        var versions = ["0.39","0.39","0.39","0.39","0.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-indirect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-indirect/README.html