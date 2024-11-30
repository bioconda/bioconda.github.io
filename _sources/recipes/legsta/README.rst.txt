:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'legsta'
.. highlight: bash

legsta
======

.. conda:recipe:: legsta
   :replaces_section_title:
   :noindex:

   In silico Legionella pneumophila Sequence Based Typing

   :homepage: https://github.com/tseemann/legsta
   :license: GPL-3.0
   :recipe: /`legsta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/legsta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/legsta/meta.yaml>`_

   


.. conda:package:: legsta

   |downloads_legsta| |docker_legsta|

   :versions:
      
      

      ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.3.7-0``,  ``0.3.3-0``

      

   
   :depends any2fasta: 
   :depends ispcr: 
   :depends perl: 
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

      mamba install legsta

   and update with::

      mamba update legsta

  To create a new environment, run::

      mamba create --name myenvname legsta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/legsta:<tag>

   (see `legsta/tags`_ for valid values for ``<tag>``)


.. |downloads_legsta| image:: https://img.shields.io/conda/dn/bioconda/legsta.svg?style=flat
   :target: https://anaconda.org/bioconda/legsta
   :alt:   (downloads)
.. |docker_legsta| image:: https://quay.io/repository/biocontainers/legsta/status
   :target: https://quay.io/repository/biocontainers/legsta
.. _`legsta/tags`: https://quay.io/repository/biocontainers/legsta?tab=tags


.. raw:: html

    <script>
        var package = "legsta";
        var versions = ["0.5.1","0.5.1","0.5.1","0.3.7","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/legsta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/legsta/README.html