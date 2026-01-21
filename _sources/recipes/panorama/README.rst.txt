:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panorama'
.. highlight: bash

panorama
========

.. conda:recipe:: panorama
   :replaces_section_title:
   :noindex:

   A robust pangenome\-based method for predicting and comparing biological systems across species.

   :homepage: https://github.com/labgem/panorama
   :documentation: https://panorama.readthedocs.io
   
   :license: CeCiLL 2.1
   :recipe: /`panorama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panorama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panorama/meta.yaml>`_

   


.. conda:package:: panorama

   |downloads_panorama| |docker_panorama|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.0-0``

      

   
   :depends geckodriver: ``>=0.36.0``
   :depends lxml: ``>=4.9.2``
   :depends ppanggolin: ``>=2.1.0``
   :depends pyhmmer: ``>=0.6``
   :depends python: ``>=3.10``
   :depends selenium: ``>=4.35.0``
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

      mamba install panorama

   and update with::

      mamba update panorama

  To create a new environment, run::

      mamba create --name myenvname panorama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panorama:<tag>

   (see `panorama/tags`_ for valid values for ``<tag>``)


.. |downloads_panorama| image:: https://img.shields.io/conda/dn/bioconda/panorama.svg?style=flat
   :target: https://anaconda.org/bioconda/panorama
   :alt:   (downloads)
.. |docker_panorama| image:: https://quay.io/repository/biocontainers/panorama/status
   :target: https://quay.io/repository/biocontainers/panorama
.. _`panorama/tags`: https://quay.io/repository/biocontainers/panorama?tab=tags


.. raw:: html

    <script>
        var package = "panorama";
        var versions = ["1.0.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panorama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panorama/README.html