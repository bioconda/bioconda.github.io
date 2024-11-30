:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pp'
.. highlight: bash

pp
==

.. conda:recipe:: pp
   :replaces_section_title:
   :noindex:

   Parallel and distributed programming for Python

   :homepage: http://www.parallelpython.com
   :license: BSD / BSD License
   :recipe: /`pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp/meta.yaml>`_

   


.. conda:package:: pp

   |downloads_pp| |docker_pp|

   :versions:
      
      

      ``1.6.5-2``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4.4-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends python: ``<3``
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

      mamba install pp

   and update with::

      mamba update pp

  To create a new environment, run::

      mamba create --name myenvname pp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pp:<tag>

   (see `pp/tags`_ for valid values for ``<tag>``)


.. |downloads_pp| image:: https://img.shields.io/conda/dn/bioconda/pp.svg?style=flat
   :target: https://anaconda.org/bioconda/pp
   :alt:   (downloads)
.. |docker_pp| image:: https://quay.io/repository/biocontainers/pp/status
   :target: https://quay.io/repository/biocontainers/pp
.. _`pp/tags`: https://quay.io/repository/biocontainers/pp?tab=tags


.. raw:: html

    <script>
        var package = "pp";
        var versions = ["1.6.5","1.6.5","1.6.5","1.6.4.4","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pp/README.html