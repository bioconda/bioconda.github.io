:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peptides'
.. highlight: bash

peptides
========

.. conda:recipe:: peptides
   :replaces_section_title:
   :noindex:

   Physicochemical properties\, indices and descriptors for amino\-acid sequences.

   :homepage: https://peptides.readthedocs.io/
   :license: MIT
   :recipe: /`peptides <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptides>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptides/meta.yaml>`_

   


.. conda:package:: peptides

   |downloads_peptides| |docker_peptides|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.1-0``

      

   
   :depends python: 
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

      mamba install peptides

   and update with::

      mamba update peptides

  To create a new environment, run::

      mamba create --name myenvname peptides

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peptides:<tag>

   (see `peptides/tags`_ for valid values for ``<tag>``)


.. |downloads_peptides| image:: https://img.shields.io/conda/dn/bioconda/peptides.svg?style=flat
   :target: https://anaconda.org/bioconda/peptides
   :alt:   (downloads)
.. |docker_peptides| image:: https://quay.io/repository/biocontainers/peptides/status
   :target: https://quay.io/repository/biocontainers/peptides
.. _`peptides/tags`: https://quay.io/repository/biocontainers/peptides?tab=tags


.. raw:: html

    <script>
        var package = "peptides";
        var versions = ["0.4.0","0.3.4","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peptides/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peptides/README.html