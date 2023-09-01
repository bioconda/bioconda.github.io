:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai'
.. highlight: bash

spliceai
========

.. conda:recipe:: spliceai
   :replaces_section_title:
   :noindex:

   A deep learning\-based tool to identify splice variants.

   :homepage: https://github.com/Illumina/SpliceAI
   :license: GPL / GPLv3
   :recipe: /`spliceai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai/meta.yaml>`_

   


.. conda:package:: spliceai

   |downloads_spliceai| |docker_spliceai|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends keras: ``>=2.0.5``
   :depends numpy: ``>=1.14.0``
   :depends pandas: ``>=0.24.2``
   :depends pyfaidx: ``>=0.5.0``
   :depends pysam: ``>=0.10.0``
   :depends python: 
   :depends tensorflow: ``>=1.13.0``
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

      mamba install spliceai

   and update with::

      mamba update spliceai

  To create a new environment, run::

      mamba create --name myenvname spliceai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spliceai:<tag>

   (see `spliceai/tags`_ for valid values for ``<tag>``)


.. |downloads_spliceai| image:: https://img.shields.io/conda/dn/bioconda/spliceai.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai
   :alt:   (downloads)
.. |docker_spliceai| image:: https://quay.io/repository/biocontainers/spliceai/status
   :target: https://quay.io/repository/biocontainers/spliceai
.. _`spliceai/tags`: https://quay.io/repository/biocontainers/spliceai?tab=tags


.. raw:: html

    <script>
        var package = "spliceai";
        var versions = ["1.3.1","1.3.1","1.3","1.3","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai/README.html