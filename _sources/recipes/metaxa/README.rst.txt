:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaxa'
.. highlight: bash

metaxa
======

.. conda:recipe:: metaxa
   :replaces_section_title:
   :noindex:

   Improved Identification and Taxonomic Classification of Small and Large Subunit rRNA in Metagenomic Data.

   :homepage: http://microbiology.se/software/metaxa2/
   :license: GPL / GPL-3.0
   :recipe: /`metaxa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxa/meta.yaml>`_
   :links: biotools: :biotools:`metaxa`, doi: :doi:`10.1111/1755-0998.12399`, doi: :doi:`10.1093/bioinformatics/bty482`

   


.. conda:package:: metaxa

   |downloads_metaxa| |docker_metaxa|

   :versions:
      
      

      ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends blast-legacy: ``2.2.*``
   :depends hmmer: ``3.1.*``
   :depends mafft: ``7.*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends vsearch: ``>=2.7.0``
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

      mamba install metaxa

   and update with::

      mamba update metaxa

  To create a new environment, run::

      mamba create --name myenvname metaxa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaxa:<tag>

   (see `metaxa/tags`_ for valid values for ``<tag>``)


.. |downloads_metaxa| image:: https://img.shields.io/conda/dn/bioconda/metaxa.svg?style=flat
   :target: https://anaconda.org/bioconda/metaxa
   :alt:   (downloads)
.. |docker_metaxa| image:: https://quay.io/repository/biocontainers/metaxa/status
   :target: https://quay.io/repository/biocontainers/metaxa
.. _`metaxa/tags`: https://quay.io/repository/biocontainers/metaxa?tab=tags


.. raw:: html

    <script>
        var package = "metaxa";
        var versions = ["2.2.3","2.2.3","2.2.3","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaxa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaxa/README.html