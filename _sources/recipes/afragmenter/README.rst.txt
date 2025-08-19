:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afragmenter'
.. highlight: bash

afragmenter
===========

.. conda:recipe:: afragmenter
   :replaces_section_title:
   :noindex:

   Schema\-free\, tunable protein domain segmentation tool for AlphaFold structures

   :homepage: https://github.com/sverwimp/AFragmenter
   :license: MIT
   :recipe: /`afragmenter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afragmenter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afragmenter/meta.yaml>`_

   


.. conda:package:: afragmenter

   |downloads_afragmenter| |docker_afragmenter|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends biopython: ``>=1.76.0``
   :depends matplotlib-base: ``>=3.9.2``
   :depends numpy: ``>=2.0.0``
   :depends python: ``>=3.9.0``
   :depends python-igraph: ``>=0.10.3``
   :depends requests: ``>=2.32.3``
   :depends rich: ``>=13.8.1``
   :depends rich-click: ``>=1.8.3``
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

      mamba install afragmenter

   and update with::

      mamba update afragmenter

  To create a new environment, run::

      mamba create --name myenvname afragmenter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/afragmenter:<tag>

   (see `afragmenter/tags`_ for valid values for ``<tag>``)


.. |downloads_afragmenter| image:: https://img.shields.io/conda/dn/bioconda/afragmenter.svg?style=flat
   :target: https://anaconda.org/bioconda/afragmenter
   :alt:   (downloads)
.. |docker_afragmenter| image:: https://quay.io/repository/biocontainers/afragmenter/status
   :target: https://quay.io/repository/biocontainers/afragmenter
.. _`afragmenter/tags`: https://quay.io/repository/biocontainers/afragmenter?tab=tags


.. raw:: html

    <script>
        var package = "afragmenter";
        var versions = ["0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afragmenter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afragmenter/README.html