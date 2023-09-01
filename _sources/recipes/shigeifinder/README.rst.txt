:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigeifinder'
.. highlight: bash

shigeifinder
============

.. conda:recipe:: shigeifinder
   :replaces_section_title:
   :noindex:

   Cluster informed Shigella and EIEC serotyping tool from Illumina reads and assemblies

   :homepage: https://github.com/LanLab/ShigEiFinder
   :license: GPL3
   :recipe: /`shigeifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder/meta.yaml>`_

   


.. conda:package:: shigeifinder

   |downloads_shigeifinder| |docker_shigeifinder|

   :versions:
      
      

      ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends bwa: ``>=0.7.17``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.10``
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

      mamba install shigeifinder

   and update with::

      mamba update shigeifinder

  To create a new environment, run::

      mamba create --name myenvname shigeifinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shigeifinder:<tag>

   (see `shigeifinder/tags`_ for valid values for ``<tag>``)


.. |downloads_shigeifinder| image:: https://img.shields.io/conda/dn/bioconda/shigeifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/shigeifinder
   :alt:   (downloads)
.. |docker_shigeifinder| image:: https://quay.io/repository/biocontainers/shigeifinder/status
   :target: https://quay.io/repository/biocontainers/shigeifinder
.. _`shigeifinder/tags`: https://quay.io/repository/biocontainers/shigeifinder?tab=tags


.. raw:: html

    <script>
        var package = "shigeifinder";
        var versions = ["1.3.5","1.3.4","1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigeifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigeifinder/README.html