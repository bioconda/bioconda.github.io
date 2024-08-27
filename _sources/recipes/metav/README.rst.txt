:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metav'
.. highlight: bash

metav
=====

.. conda:recipe:: metav
   :replaces_section_title:
   :noindex:

   Rapid detection and classification of viruses in metagenomics sequencing.

   :homepage: https://github.com/ZhijianZhou01/metav
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metav/meta.yaml>`_

   


.. conda:package:: metav

   |downloads_metav| |docker_metav|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends bowtie2: ``>=2.3.0``
   :depends diamond: ``>=2.0.9``
   :depends python: ``>=3.5``
   :depends salmon: ``>=1.10.0``
   :depends samtools: ``>=1.14``
   :depends trimmomatic: ``>=0.39``
   :depends trinity: ``>=2.15.1``
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

      mamba install metav

   and update with::

      mamba update metav

  To create a new environment, run::

      mamba create --name myenvname metav

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metav:<tag>

   (see `metav/tags`_ for valid values for ``<tag>``)


.. |downloads_metav| image:: https://img.shields.io/conda/dn/bioconda/metav.svg?style=flat
   :target: https://anaconda.org/bioconda/metav
   :alt:   (downloads)
.. |docker_metav| image:: https://quay.io/repository/biocontainers/metav/status
   :target: https://quay.io/repository/biocontainers/metav
.. _`metav/tags`: https://quay.io/repository/biocontainers/metav?tab=tags


.. raw:: html

    <script>
        var package = "metav";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metav/README.html