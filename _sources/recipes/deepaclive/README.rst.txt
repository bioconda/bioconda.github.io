:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepaclive'
.. highlight: bash

deepaclive
==========

.. conda:recipe:: deepaclive
   :replaces_section_title:
   :noindex:

   Detecting novel pathogens from NGS reads in real\-time during a sequencing run.

   :homepage: https://gitlab.com/dacs-hpi/deepac-live
   :license: MIT / MIT
   :recipe: /`deepaclive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaclive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaclive/meta.yaml>`_

   


.. conda:package:: deepaclive

   |downloads_deepaclive| |docker_deepaclive|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.76``
   :depends deepac: ``>=0.12.0``
   :depends matplotlib-base: ``>=3.1.3``
   :depends paramiko: ``>=2.7.1``
   :depends pysam: ``>=0.15.4``
   :depends python: ``>=3``
   :depends samtools: ``>=1.9``
   :depends scikit-learn: ``>=0.22.1``
   :depends tensorflow: ``>=2.1``
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

      mamba install deepaclive

   and update with::

      mamba update deepaclive

  To create a new environment, run::

      mamba create --name myenvname deepaclive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepaclive:<tag>

   (see `deepaclive/tags`_ for valid values for ``<tag>``)


.. |downloads_deepaclive| image:: https://img.shields.io/conda/dn/bioconda/deepaclive.svg?style=flat
   :target: https://anaconda.org/bioconda/deepaclive
   :alt:   (downloads)
.. |docker_deepaclive| image:: https://quay.io/repository/biocontainers/deepaclive/status
   :target: https://quay.io/repository/biocontainers/deepaclive
.. _`deepaclive/tags`: https://quay.io/repository/biocontainers/deepaclive?tab=tags


.. raw:: html

    <script>
        var package = "deepaclive";
        var versions = ["0.3.2","0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepaclive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepaclive/README.html