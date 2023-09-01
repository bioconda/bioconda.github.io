:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coils'
.. highlight: bash

coils
=====

.. conda:recipe:: coils
   :replaces_section_title:
   :noindex:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://rostlab.org/owiki/index.php/Packages#Package_overview
   :license: GPL
   :recipe: /`coils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coils/meta.yaml>`_

   


.. conda:package:: coils

   |downloads_coils| |docker_coils|

   :versions:
      
      

      ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install coils

   and update with::

      mamba update coils

  To create a new environment, run::

      mamba create --name myenvname coils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coils:<tag>

   (see `coils/tags`_ for valid values for ``<tag>``)


.. |downloads_coils| image:: https://img.shields.io/conda/dn/bioconda/coils.svg?style=flat
   :target: https://anaconda.org/bioconda/coils
   :alt:   (downloads)
.. |docker_coils| image:: https://quay.io/repository/biocontainers/coils/status
   :target: https://quay.io/repository/biocontainers/coils
.. _`coils/tags`: https://quay.io/repository/biocontainers/coils?tab=tags


.. raw:: html

    <script>
        var package = "coils";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coils/README.html