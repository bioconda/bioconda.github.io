:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadrep'
.. highlight: bash

tadrep
======

.. conda:recipe:: tadrep
   :replaces_section_title:
   :noindex:

   TaDRep\: Targeted Detection and Reconstruction of Plasmids

   :homepage: https://github.com/oschwengers/tadrep
   :documentation: https://github.com/oschwengers/tadrep/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tadrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadrep/meta.yaml>`_

   


.. conda:package:: tadrep

   |downloads_tadrep| |docker_tadrep|

   :versions:
      
      

      ``0.9.2-0``,  ``0.9.1-0``

      

   
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.12.0``
   :depends cd-hit: ``>=4.8.1``
   :depends matplotlib-base: ``>=3.7``
   :depends pygenomeviz: ``>=0.4``
   :depends pyrodigal: ``>=2.1.0``
   :depends python: ``>=3.8``
   :depends xopen: ``>=1.5.0``
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

      mamba install tadrep

   and update with::

      mamba update tadrep

  To create a new environment, run::

      mamba create --name myenvname tadrep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tadrep:<tag>

   (see `tadrep/tags`_ for valid values for ``<tag>``)


.. |downloads_tadrep| image:: https://img.shields.io/conda/dn/bioconda/tadrep.svg?style=flat
   :target: https://anaconda.org/bioconda/tadrep
   :alt:   (downloads)
.. |docker_tadrep| image:: https://quay.io/repository/biocontainers/tadrep/status
   :target: https://quay.io/repository/biocontainers/tadrep
.. _`tadrep/tags`: https://quay.io/repository/biocontainers/tadrep?tab=tags


.. raw:: html

    <script>
        var package = "tadrep";
        var versions = ["0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadrep/README.html