:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debreak'
.. highlight: bash

debreak
=======

.. conda:recipe:: debreak
   :replaces_section_title:
   :noindex:

   DeBreak\, Deciphering the exact breakpoints of structural variations using long sequencing reads

   :homepage: https://github.com/ChongLab/DeBreak
   :license: MIT / MIT
   :recipe: /`debreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak/meta.yaml>`_

   


.. conda:package:: debreak

   |downloads_debreak| |docker_debreak|

   :versions:
      
      

      ``1.3-0``,  ``1.0.2-0``

      

   
   :depends minimap2: ``2.15.*``
   :depends pysam: ``0.19.0.*``
   :depends python: ``>=3``
   :depends samtools: ``1.9.*``
   :depends wtdbg: ``2.5.*``
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

      mamba install debreak

   and update with::

      mamba update debreak

  To create a new environment, run::

      mamba create --name myenvname debreak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/debreak:<tag>

   (see `debreak/tags`_ for valid values for ``<tag>``)


.. |downloads_debreak| image:: https://img.shields.io/conda/dn/bioconda/debreak.svg?style=flat
   :target: https://anaconda.org/bioconda/debreak
   :alt:   (downloads)
.. |docker_debreak| image:: https://quay.io/repository/biocontainers/debreak/status
   :target: https://quay.io/repository/biocontainers/debreak
.. _`debreak/tags`: https://quay.io/repository/biocontainers/debreak?tab=tags


.. raw:: html

    <script>
        var package = "debreak";
        var versions = ["1.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debreak/README.html