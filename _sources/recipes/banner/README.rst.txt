:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'banner'
.. highlight: bash

banner
======

.. conda:recipe:: banner
   :replaces_section_title:
   :noindex:

   BANNER is a tool that lives inside HULK and aims to make sense of hulk histosketches.

   :homepage: https://www.github.com/will-rowe/banner
   :license: MIT
   :recipe: /`banner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner/meta.yaml>`_

   


.. conda:package:: banner

   |downloads_banner| |docker_banner|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends numpy: ``1.15.0``
   :depends pandas: ``0.23.4``
   :depends pytest: ``3.7.1``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: ``1.1.0``
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

      mamba install banner

   and update with::

      mamba update banner

  To create a new environment, run::

      mamba create --name myenvname banner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/banner:<tag>

   (see `banner/tags`_ for valid values for ``<tag>``)


.. |downloads_banner| image:: https://img.shields.io/conda/dn/bioconda/banner.svg?style=flat
   :target: https://anaconda.org/bioconda/banner
   :alt:   (downloads)
.. |docker_banner| image:: https://quay.io/repository/biocontainers/banner/status
   :target: https://quay.io/repository/biocontainers/banner
.. _`banner/tags`: https://quay.io/repository/biocontainers/banner?tab=tags


.. raw:: html

    <script>
        var package = "banner";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/banner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/banner/README.html