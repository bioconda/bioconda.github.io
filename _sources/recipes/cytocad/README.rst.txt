:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytocad'
.. highlight: bash

cytocad
=======

.. conda:recipe:: cytocad
   :replaces_section_title:
   :noindex:

   Large copy\-number variation detector with low\-depth whole\-genome sequencing data

   :homepage: https://github.com/cytham/cytocad
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cytocad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytocad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytocad/meta.yaml>`_

   


.. conda:package:: cytocad

   |downloads_cytocad| |docker_cytocad|

   :versions:
      
      

      ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.26.0``
   :depends libgcc-ng: ``>=12``
   :depends librsvg: ``>=2.50.3``
   :depends matplotlib-base: ``>=2.2.3``
   :depends numpy: ``>=1.17.3``
   :depends pybedtools: ``>=0.8.0``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends ruptures: ``>=1.1.3``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=1.2.1``
   :depends tagore: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cytocad

   and update with::

      mamba update cytocad

  To create a new environment, run::

      mamba create --name myenvname cytocad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cytocad:<tag>

   (see `cytocad/tags`_ for valid values for ``<tag>``)


.. |downloads_cytocad| image:: https://img.shields.io/conda/dn/bioconda/cytocad.svg?style=flat
   :target: https://anaconda.org/bioconda/cytocad
   :alt:   (downloads)
.. |docker_cytocad| image:: https://quay.io/repository/biocontainers/cytocad/status
   :target: https://quay.io/repository/biocontainers/cytocad
.. _`cytocad/tags`: https://quay.io/repository/biocontainers/cytocad?tab=tags


.. raw:: html

    <script>
        var package = "cytocad";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytocad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytocad/README.html