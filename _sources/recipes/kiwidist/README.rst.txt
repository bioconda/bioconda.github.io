:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kiwidist'
.. highlight: bash

kiwidist
========

.. conda:recipe:: kiwidist
   :replaces_section_title:
   :noindex:

   Combining gene\-set analysis with network properties

   :homepage: https://pypi.org/project/KiwiDist/
   :license: MIT
   :recipe: /`kiwidist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist/meta.yaml>`_

   


.. conda:package:: kiwidist

   |downloads_kiwidist| |docker_kiwidist|

   :versions:
      
      

      ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``

      

   
   :depends matplotlib: ``>=1.3.1,<=1.4.3``
   :depends mygene: ``>=2.1.0``
   :depends networkx: ``>=1.8.1``
   :depends numpy: ``>=1.8.0``
   :depends pandas: ``>=0.13.1``
   :depends python: ``<3``
   :depends scipy: ``>=0.13.3,<=0.16.0``
   :depends six: ``>=1.5``
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

      mamba install kiwidist

   and update with::

      mamba update kiwidist

  To create a new environment, run::

      mamba create --name myenvname kiwidist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kiwidist:<tag>

   (see `kiwidist/tags`_ for valid values for ``<tag>``)


.. |downloads_kiwidist| image:: https://img.shields.io/conda/dn/bioconda/kiwidist.svg?style=flat
   :target: https://anaconda.org/bioconda/kiwidist
   :alt:   (downloads)
.. |docker_kiwidist| image:: https://quay.io/repository/biocontainers/kiwidist/status
   :target: https://quay.io/repository/biocontainers/kiwidist
.. _`kiwidist/tags`: https://quay.io/repository/biocontainers/kiwidist?tab=tags


.. raw:: html

    <script>
        var package = "kiwidist";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.5","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kiwidist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kiwidist/README.html