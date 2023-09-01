:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai-wrapper'
.. highlight: bash

spliceai-wrapper
================

.. conda:recipe:: spliceai-wrapper
   :replaces_section_title:
   :noindex:

   A caching wrapper for Illumina SpliceAI.

   :homepage: https://github.com/bihealth/spliceai-wrapper
   :license: MIT / MIT
   :recipe: /`spliceai-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper/meta.yaml>`_

   


.. conda:package:: spliceai-wrapper

   |downloads_spliceai-wrapper| |docker_spliceai-wrapper|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bcftools: 
   :depends logzero: 
   :depends ncls: 
   :depends pysam: 
   :depends spliceai: 
   :depends tqdm: 
   :depends xdg: 
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

      mamba install spliceai-wrapper

   and update with::

      mamba update spliceai-wrapper

  To create a new environment, run::

      mamba create --name myenvname spliceai-wrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spliceai-wrapper:<tag>

   (see `spliceai-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_spliceai-wrapper| image:: https://img.shields.io/conda/dn/bioconda/spliceai-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai-wrapper
   :alt:   (downloads)
.. |docker_spliceai-wrapper| image:: https://quay.io/repository/biocontainers/spliceai-wrapper/status
   :target: https://quay.io/repository/biocontainers/spliceai-wrapper
.. _`spliceai-wrapper/tags`: https://quay.io/repository/biocontainers/spliceai-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "spliceai-wrapper";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai-wrapper/README.html