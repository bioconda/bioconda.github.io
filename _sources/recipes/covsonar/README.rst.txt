:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covsonar'
.. highlight: bash

covsonar
========

.. conda:recipe:: covsonar
   :replaces_section_title:
   :noindex:

   A database\-driven system for handling genomic sequences and screening genomic profiles.

   :homepage: https://github.com/rki-mf1/covsonar
   :license: GPL-3.0
   :recipe: /`covsonar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar/meta.yaml>`_

   


.. conda:package:: covsonar

   |downloads_covsonar| |docker_covsonar|

   :versions:
      
      

      ``2.0.0a1-0``,  ``2.0.0a0-0``

      

   
   :depends biopython: ``>=1.79,<1.80``
   :depends emboss: ``6.6.0``
   :depends more-itertools: ``>=8.7.0,<8.8.0``
   :depends mpire: ``>=2.3.3,<2.4.0``
   :depends pandas: ``>=1.4.0,<1.5.0``
   :depends pyaml: ``>=20.4.0,<20.5.0``
   :depends python: ``>=3.9,<4.0``
   :depends requests: ``>=2.28.0,<3.0.0``
   :depends tabulate: ``>=0.8.9,<0.9.0``
   :depends tqdm: ``>=4.59.0,<4.60.0``
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

      mamba install covsonar

   and update with::

      mamba update covsonar

  To create a new environment, run::

      mamba create --name myenvname covsonar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/covsonar:<tag>

   (see `covsonar/tags`_ for valid values for ``<tag>``)


.. |downloads_covsonar| image:: https://img.shields.io/conda/dn/bioconda/covsonar.svg?style=flat
   :target: https://anaconda.org/bioconda/covsonar
   :alt:   (downloads)
.. |docker_covsonar| image:: https://quay.io/repository/biocontainers/covsonar/status
   :target: https://quay.io/repository/biocontainers/covsonar
.. _`covsonar/tags`: https://quay.io/repository/biocontainers/covsonar?tab=tags


.. raw:: html

    <script>
        var package = "covsonar";
        var versions = ["2.0.0a1","2.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covsonar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covsonar/README.html