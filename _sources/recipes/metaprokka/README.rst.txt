:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaprokka'
.. highlight: bash

metaprokka
==========

.. conda:recipe:: metaprokka
   :replaces_section_title:
   :noindex:

   A fork of Prokka using Prodigal\-GV for phage annotation and metagenome\/metavirome tweaks

   :homepage: https://github.com/telatin/metaprokka
   :license: GPL / GPL-3.0-only
   :recipe: /`metaprokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprokka/meta.yaml>`_
   :links: biotools: :biotools:`metaprokka`

   


.. conda:package:: metaprokka

   |downloads_metaprokka| |docker_metaprokka|

   :versions:
      
      

      ``1.15.0-0``,  ``1.14.6_1-3``,  ``1.14.6_1-2``,  ``1.14.6_1-1``,  ``1.14.6_1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-fastx-reader: ``>=1.11.0``
   :depends prodigal-gv: ``>=2.11.0``
   :depends prokka: ``1.14.6.*``
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

      mamba install metaprokka

   and update with::

      mamba update metaprokka

  To create a new environment, run::

      mamba create --name myenvname metaprokka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaprokka:<tag>

   (see `metaprokka/tags`_ for valid values for ``<tag>``)


.. |downloads_metaprokka| image:: https://img.shields.io/conda/dn/bioconda/metaprokka.svg?style=flat
   :target: https://anaconda.org/bioconda/metaprokka
   :alt:   (downloads)
.. |docker_metaprokka| image:: https://quay.io/repository/biocontainers/metaprokka/status
   :target: https://quay.io/repository/biocontainers/metaprokka
.. _`metaprokka/tags`: https://quay.io/repository/biocontainers/metaprokka?tab=tags


.. raw:: html

    <script>
        var package = "metaprokka";
        var versions = ["1.15.0","1.14.6_1","1.14.6_1","1.14.6_1","1.14.6_1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaprokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaprokka/README.html