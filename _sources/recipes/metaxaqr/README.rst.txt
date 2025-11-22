:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaxaqr'
.. highlight: bash

metaxaqr
========

.. conda:recipe:: metaxaqr
   :replaces_section_title:
   :noindex:

   Improved Identification and Taxonomic Classification of Small and Large Subunit rRNA in Metagenomic Data.

   :homepage: http://microbiology.se/software/metaxaQR/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`metaxaqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxaqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxaqr/meta.yaml>`_
   :links: biotools: :biotools:`metaxaqr`, doi: :doi:`10.1093/bioinformatics/bty482`, doi: :doi:`10.1111/1755-0998.12399`

   


.. conda:package:: metaxaqr

   |downloads_metaxaqr| |docker_metaxaqr|

   :versions:
      
      

      ``3.0rc2-0``,  ``3.0rc1.1-0``

      

   
   :depends hmmer: ``>=3.3``
   :depends mafft: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends vsearch: ``>=2.7.0``
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

      mamba install metaxaqr

   and update with::

      mamba update metaxaqr

  To create a new environment, run::

      mamba create --name myenvname metaxaqr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaxaqr:<tag>

   (see `metaxaqr/tags`_ for valid values for ``<tag>``)


.. |downloads_metaxaqr| image:: https://img.shields.io/conda/dn/bioconda/metaxaqr.svg?style=flat
   :target: https://anaconda.org/bioconda/metaxaqr
   :alt:   (downloads)
.. |docker_metaxaqr| image:: https://quay.io/repository/biocontainers/metaxaqr/status
   :target: https://quay.io/repository/biocontainers/metaxaqr
.. _`metaxaqr/tags`: https://quay.io/repository/biocontainers/metaxaqr?tab=tags


.. raw:: html

    <script>
        var package = "metaxaqr";
        var versions = ["3.0rc2","3.0rc1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaxaqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaxaqr/README.html