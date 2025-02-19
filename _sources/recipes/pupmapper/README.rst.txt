:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pupmapper'
.. highlight: bash

pupmapper
=========

.. conda:recipe:: pupmapper
   :replaces_section_title:
   :noindex:

   Tool \& python package for calculating genome wide pileup mappability.

   :homepage: https://github.com/maxgmarin/pupmapper
   :license: MIT / MIT
   :recipe: /`pupmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pupmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pupmapper/meta.yaml>`_

   


.. conda:package:: pupmapper

   |downloads_pupmapper| |docker_pupmapper|

   :versions:
      
      

      ``0.0.9-0``

      

   
   :depends bigtools: 
   :depends bioframe: ``>=0.7.2``
   :depends genmap: ``1.3.*``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends tqdm: 
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

      mamba install pupmapper

   and update with::

      mamba update pupmapper

  To create a new environment, run::

      mamba create --name myenvname pupmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pupmapper:<tag>

   (see `pupmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_pupmapper| image:: https://img.shields.io/conda/dn/bioconda/pupmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/pupmapper
   :alt:   (downloads)
.. |docker_pupmapper| image:: https://quay.io/repository/biocontainers/pupmapper/status
   :target: https://quay.io/repository/biocontainers/pupmapper
.. _`pupmapper/tags`: https://quay.io/repository/biocontainers/pupmapper?tab=tags


.. raw:: html

    <script>
        var package = "pupmapper";
        var versions = ["0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pupmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pupmapper/README.html