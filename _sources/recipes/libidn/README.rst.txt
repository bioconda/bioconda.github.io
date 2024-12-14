:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libidn'
.. highlight: bash

libidn
======

.. conda:recipe:: libidn
   :replaces_section_title:
   :noindex:

   Library for internationalized domain name support

   :homepage: https://www.gnu.org/software/libidn/
   :license: LGPLv3
   :recipe: /`libidn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn/meta.yaml>`_

   


.. conda:package:: libidn

   |downloads_libidn| |docker_libidn|

   :versions:
      
      

      ``7.45.0-9``,  ``7.45.0-8``,  ``7.45.0-7``,  ``7.45.0-6``,  ``7.45.0-5``,  ``7.45.0-4``,  ``7.45.0-3``,  ``7.45.0-2``,  ``7.45.0-1``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install libidn

   and update with::

      mamba update libidn

  To create a new environment, run::

      mamba create --name myenvname libidn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libidn:<tag>

   (see `libidn/tags`_ for valid values for ``<tag>``)


.. |downloads_libidn| image:: https://img.shields.io/conda/dn/bioconda/libidn.svg?style=flat
   :target: https://anaconda.org/bioconda/libidn
   :alt:   (downloads)
.. |docker_libidn| image:: https://quay.io/repository/biocontainers/libidn/status
   :target: https://quay.io/repository/biocontainers/libidn
.. _`libidn/tags`: https://quay.io/repository/biocontainers/libidn?tab=tags


.. raw:: html

    <script>
        var package = "libidn";
        var versions = ["7.45.0","7.45.0","7.45.0","7.45.0","7.45.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libidn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libidn/README.html