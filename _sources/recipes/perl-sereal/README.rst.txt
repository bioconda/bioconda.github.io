:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal'
.. highlight: bash

perl-sereal
===========

.. conda:recipe:: perl-sereal
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary \(de\-\)serialization

   :homepage: http://metacpan.org/pod/Sereal
   :license: perl_5
   :recipe: /`perl-sereal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal/meta.yaml>`_

   


.. conda:package:: perl-sereal

   |downloads_perl-sereal| |docker_perl-sereal|

   :versions:
      
      

      ``4.019-0``,  ``4.007-1``,  ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-sereal-decoder: ``>=4.019``
   :depends perl-sereal-encoder: ``>=4.019``
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

      mamba install perl-sereal

   and update with::

      mamba update perl-sereal

  To create a new environment, run::

      mamba create --name myenvname perl-sereal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sereal:<tag>

   (see `perl-sereal/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sereal| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal
   :alt:   (downloads)
.. |docker_perl-sereal| image:: https://quay.io/repository/biocontainers/perl-sereal/status
   :target: https://quay.io/repository/biocontainers/perl-sereal
.. _`perl-sereal/tags`: https://quay.io/repository/biocontainers/perl-sereal?tab=tags


.. raw:: html

    <script>
        var package = "perl-sereal";
        var versions = ["4.019","4.007","4.007","4.005","3.015"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal/README.html