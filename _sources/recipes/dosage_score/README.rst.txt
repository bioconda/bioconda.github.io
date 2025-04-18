:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dosage_score'
.. highlight: bash

dosage_score
============

.. conda:recipe:: dosage_score
   :replaces_section_title:
   :noindex:

   Dosage\-score\: pipline to estimate dosage of each genomic region

   :homepage: https://github.com/SegawaTenta/Dosage-score
   :license: GPL / GPL-3.0-or-later
   :recipe: /`dosage_score <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dosage_score>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dosage_score/meta.yaml>`_
   :links: biotools: :biotools:`dosage_score`

   


.. conda:package:: dosage_score

   |downloads_dosage_score| |docker_dosage_score|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``1.5.0.*``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.16``
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

      mamba install dosage_score

   and update with::

      mamba update dosage_score

  To create a new environment, run::

      mamba create --name myenvname dosage_score

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dosage_score:<tag>

   (see `dosage_score/tags`_ for valid values for ``<tag>``)


.. |downloads_dosage_score| image:: https://img.shields.io/conda/dn/bioconda/dosage_score.svg?style=flat
   :target: https://anaconda.org/bioconda/dosage_score
   :alt:   (downloads)
.. |docker_dosage_score| image:: https://quay.io/repository/biocontainers/dosage_score/status
   :target: https://quay.io/repository/biocontainers/dosage_score
.. _`dosage_score/tags`: https://quay.io/repository/biocontainers/dosage_score?tab=tags


.. raw:: html

    <script>
        var package = "dosage_score";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dosage_score/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dosage_score/README.html