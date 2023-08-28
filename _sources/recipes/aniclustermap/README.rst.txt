:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aniclustermap'
.. highlight: bash

aniclustermap
=============

.. conda:recipe:: aniclustermap
   :replaces_section_title:
   :noindex:

   A tool for drawing ANI clustermap between all\-vs\-all microbial genomes

   :homepage: https://github.com/moshi4/ANIclustermap/
   :license: MIT
   :recipe: /`aniclustermap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap/meta.yaml>`_

   


.. conda:package:: aniclustermap

   |downloads_aniclustermap| |docker_aniclustermap|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends fastani: ``>=1.33``
   :depends pandas: ``>=1.4.1``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.9.0``
   :depends seaborn: ``>=0.11.2``
   :depends skani: ``>=0.1.0``
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

      mamba install aniclustermap

   and update with::

      mamba update aniclustermap

  To create a new environment, run::

      mamba create --name myenvname aniclustermap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aniclustermap:<tag>

   (see `aniclustermap/tags`_ for valid values for ``<tag>``)


.. |downloads_aniclustermap| image:: https://img.shields.io/conda/dn/bioconda/aniclustermap.svg?style=flat
   :target: https://anaconda.org/bioconda/aniclustermap
   :alt:   (downloads)
.. |docker_aniclustermap| image:: https://quay.io/repository/biocontainers/aniclustermap/status
   :target: https://quay.io/repository/biocontainers/aniclustermap
.. _`aniclustermap/tags`: https://quay.io/repository/biocontainers/aniclustermap?tab=tags


.. raw:: html

    <script>
        var package = "aniclustermap";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aniclustermap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aniclustermap/README.html