:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaspace2020'
.. highlight: bash

metaspace2020
=============

.. conda:recipe:: metaspace2020
   :replaces_section_title:
   :noindex:

   Python library for connecting to the METASPACE platform.

   :homepage: https://github.com/metaspace2020/metaspace
   :documentation: https://metaspace2020.readthedocs.io
   
   :license: Apache / Apache-2.0
   :recipe: /`metaspace2020 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaspace2020>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaspace2020/meta.yaml>`_

   


.. conda:package:: metaspace2020

   |downloads_metaspace2020| |docker_metaspace2020|

   :versions:
      
      

      ``2.0.9-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends plotly: ``>=1.12``
   :depends python: 
   :depends requests: 
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

      mamba install metaspace2020

   and update with::

      mamba update metaspace2020

  To create a new environment, run::

      mamba create --name myenvname metaspace2020

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaspace2020:<tag>

   (see `metaspace2020/tags`_ for valid values for ``<tag>``)


.. |downloads_metaspace2020| image:: https://img.shields.io/conda/dn/bioconda/metaspace2020.svg?style=flat
   :target: https://anaconda.org/bioconda/metaspace2020
   :alt:   (downloads)
.. |docker_metaspace2020| image:: https://quay.io/repository/biocontainers/metaspace2020/status
   :target: https://quay.io/repository/biocontainers/metaspace2020
.. _`metaspace2020/tags`: https://quay.io/repository/biocontainers/metaspace2020?tab=tags


.. raw:: html

    <script>
        var package = "metaspace2020";
        var versions = ["2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaspace2020/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaspace2020/README.html