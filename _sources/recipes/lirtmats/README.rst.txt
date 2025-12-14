:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lirtmats'
.. highlight: bash

lirtmats
========

.. conda:recipe:: lirtmats
   :replaces_section_title:
   :noindex:

   LiRTMaTS \- Liverpool retention time matching software

   :homepage: https://pypi.org/project/lirtmats/
   :developer docs: https://github.com/wanchanglin/lirtmats
   :license: GPL-3.0-only
   :recipe: /`lirtmats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lirtmats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lirtmats/meta.yaml>`_

   


.. conda:package:: lirtmats

   |downloads_lirtmats| |docker_lirtmats|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends lamps: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends scipy: 
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

      mamba install lirtmats

   and update with::

      mamba update lirtmats

  To create a new environment, run::

      mamba create --name myenvname lirtmats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lirtmats:<tag>

   (see `lirtmats/tags`_ for valid values for ``<tag>``)


.. |downloads_lirtmats| image:: https://img.shields.io/conda/dn/bioconda/lirtmats.svg?style=flat
   :target: https://anaconda.org/bioconda/lirtmats
   :alt:   (downloads)
.. |docker_lirtmats| image:: https://quay.io/repository/biocontainers/lirtmats/status
   :target: https://quay.io/repository/biocontainers/lirtmats
.. _`lirtmats/tags`: https://quay.io/repository/biocontainers/lirtmats?tab=tags


.. raw:: html

    <script>
        var package = "lirtmats";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lirtmats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lirtmats/README.html