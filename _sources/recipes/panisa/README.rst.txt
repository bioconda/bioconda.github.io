:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panisa'
.. highlight: bash

panisa
======

.. conda:recipe:: panisa
   :replaces_section_title:
   :noindex:

   panISa is a software to search insertion sequence \(IS\) on resequencing data \(bam file\)

   :homepage: https://github.com/bvalot/panISa
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`panisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa/meta.yaml>`_

   


.. conda:package:: panisa

   |downloads_panisa| |docker_panisa|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends pysam: ``>=0.9``
   :depends python: 
   :depends requests: ``>=2.12``
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

      mamba install panisa

   and update with::

      mamba update panisa

  To create a new environment, run::

      mamba create --name myenvname panisa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panisa:<tag>

   (see `panisa/tags`_ for valid values for ``<tag>``)


.. |downloads_panisa| image:: https://img.shields.io/conda/dn/bioconda/panisa.svg?style=flat
   :target: https://anaconda.org/bioconda/panisa
   :alt:   (downloads)
.. |docker_panisa| image:: https://quay.io/repository/biocontainers/panisa/status
   :target: https://quay.io/repository/biocontainers/panisa
.. _`panisa/tags`: https://quay.io/repository/biocontainers/panisa?tab=tags


.. raw:: html

    <script>
        var package = "panisa";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panisa/README.html