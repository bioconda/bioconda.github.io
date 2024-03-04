:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samestr'
.. highlight: bash

samestr
=======

.. conda:recipe:: samestr
   :replaces_section_title:
   :noindex:

   SameStr identifies shared strains between pairs of metagenomic samples based on the similarity of SNV profiles.

   :homepage: https://github.com/danielpodlesny/samestr/
   :developer docs: https://github.com/danielpodlesny/samestr
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`samestr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01251-w`

   


.. conda:package:: samestr

   |downloads_samestr| |docker_samestr|

   :versions:
      
      

      ``1.2024.2.post1-0``,  ``1.2023.4-0``,  ``1.2023.3-0``

      

   
   :depends biopython: ``1.81``
   :depends blast: ``>=2.6.0``
   :depends mafft: ``7.515``
   :depends muscle: ``3.8.1551``
   :depends numpy: ``1.24.2``
   :depends pandas: ``1.5.3``
   :depends pysam: ``0.20.0``
   :depends python: ``>=3.9``
   :depends samtools: ``0.1.19``
   :depends scipy: ``1.10.0``
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

      mamba install samestr

   and update with::

      mamba update samestr

  To create a new environment, run::

      mamba create --name myenvname samestr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samestr:<tag>

   (see `samestr/tags`_ for valid values for ``<tag>``)


.. |downloads_samestr| image:: https://img.shields.io/conda/dn/bioconda/samestr.svg?style=flat
   :target: https://anaconda.org/bioconda/samestr
   :alt:   (downloads)
.. |docker_samestr| image:: https://quay.io/repository/biocontainers/samestr/status
   :target: https://quay.io/repository/biocontainers/samestr
.. _`samestr/tags`: https://quay.io/repository/biocontainers/samestr?tab=tags


.. raw:: html

    <script>
        var package = "samestr";
        var versions = ["1.2024.2.post1","1.2023.4","1.2023.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samestr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samestr/README.html