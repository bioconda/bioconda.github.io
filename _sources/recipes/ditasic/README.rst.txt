:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ditasic'
.. highlight: bash

ditasic
=======

.. conda:recipe:: ditasic
   :replaces_section_title:
   :noindex:

   DiTASiC is designed as a comprehensive approach for abundance estimation and differential abundance assessment of individual taxa in metagenomics samples.

   :homepage: https://rki_bioinformatics.gitlab.io/ditasic/
   :license: MIT
   :recipe: /`ditasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic/meta.yaml>`_

   


.. conda:package:: ditasic

   |downloads_ditasic| |docker_ditasic|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends biopython: ``>=1.70``
   :depends kallisto: ``>=0.43.1``
   :depends mason: ``>=2.0.7``
   :depends numpy: ``>=1.8.0``
   :depends python: ``>=3``
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

      mamba install ditasic

   and update with::

      mamba update ditasic

  To create a new environment, run::

      mamba create --name myenvname ditasic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ditasic:<tag>

   (see `ditasic/tags`_ for valid values for ``<tag>``)


.. |downloads_ditasic| image:: https://img.shields.io/conda/dn/bioconda/ditasic.svg?style=flat
   :target: https://anaconda.org/bioconda/ditasic
   :alt:   (downloads)
.. |docker_ditasic| image:: https://quay.io/repository/biocontainers/ditasic/status
   :target: https://quay.io/repository/biocontainers/ditasic
.. _`ditasic/tags`: https://quay.io/repository/biocontainers/ditasic?tab=tags


.. raw:: html

    <script>
        var package = "ditasic";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ditasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ditasic/README.html