:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kid'
.. highlight: bash

kid
===

.. conda:recipe:: kid
   :replaces_section_title:
   :noindex:

   A simple and pythonic XML template language

   :homepage: https://pypi.python.org/pypi/kid
   :license: MIT
   :recipe: /`kid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid/meta.yaml>`_

   


.. conda:package:: kid

   |downloads_kid| |docker_kid|

   :versions:
      
      

      ``0.9.6-2``,  ``0.9.6-1``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install kid

   and update with::

      mamba update kid

  To create a new environment, run::

      mamba create --name myenvname kid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kid:<tag>

   (see `kid/tags`_ for valid values for ``<tag>``)


.. |downloads_kid| image:: https://img.shields.io/conda/dn/bioconda/kid.svg?style=flat
   :target: https://anaconda.org/bioconda/kid
   :alt:   (downloads)
.. |docker_kid| image:: https://quay.io/repository/biocontainers/kid/status
   :target: https://quay.io/repository/biocontainers/kid
.. _`kid/tags`: https://quay.io/repository/biocontainers/kid?tab=tags


.. raw:: html

    <script>
        var package = "kid";
        var versions = ["0.9.6","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kid/README.html