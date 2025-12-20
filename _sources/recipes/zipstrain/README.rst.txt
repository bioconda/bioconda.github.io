:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zipstrain'
.. highlight: bash

zipstrain
=========

.. conda:recipe:: zipstrain
   :replaces_section_title:
   :noindex:

   Fast strain\-level metagenomics

   :homepage: https://github.com/OlmLab/ZipStrain
   :license: MIT / MIT
   :recipe: /`zipstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zipstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zipstrain/meta.yaml>`_

   


.. conda:package:: zipstrain

   |downloads_zipstrain| |docker_zipstrain|

   :versions:
      
      

      ``0.2.12-0``,  ``0.2.10-0``,  ``0.2.7-0``,  ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends aiofiles: 
   :depends click: 
   :depends intervaltree: 
   :depends numpy: 
   :depends plotly: 
   :depends polars: 
   :depends psutil: 
   :depends pyarrow: 
   :depends pydantic: 
   :depends python: ``>=3.12``
   :depends rich: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install zipstrain

   and update with::

      mamba update zipstrain

  To create a new environment, run::

      mamba create --name myenvname zipstrain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zipstrain:<tag>

   (see `zipstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_zipstrain| image:: https://img.shields.io/conda/dn/bioconda/zipstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/zipstrain
   :alt:   (downloads)
.. |docker_zipstrain| image:: https://quay.io/repository/biocontainers/zipstrain/status
   :target: https://quay.io/repository/biocontainers/zipstrain
.. _`zipstrain/tags`: https://quay.io/repository/biocontainers/zipstrain?tab=tags


.. raw:: html

    <script>
        var package = "zipstrain";
        var versions = ["0.2.12","0.2.10","0.2.7","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zipstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zipstrain/README.html