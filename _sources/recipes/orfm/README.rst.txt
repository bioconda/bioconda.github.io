:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfm'
.. highlight: bash

orfm
====

.. conda:recipe:: orfm
   :replaces_section_title:
   :noindex:

   OrfM is a simple and not slow ORF caller

   :homepage: https://github.com/wwood/OrfM
   :license: LGPL / LGPL-3.0
   :recipe: /`orfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfm/meta.yaml>`_

   


.. conda:package:: orfm

   |downloads_orfm| |docker_orfm|

   :versions:
      
      

      ``1.3-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.6.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install orfm

   and update with::

      mamba update orfm

  To create a new environment, run::

      mamba create --name myenvname orfm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orfm:<tag>

   (see `orfm/tags`_ for valid values for ``<tag>``)


.. |downloads_orfm| image:: https://img.shields.io/conda/dn/bioconda/orfm.svg?style=flat
   :target: https://anaconda.org/bioconda/orfm
   :alt:   (downloads)
.. |docker_orfm| image:: https://quay.io/repository/biocontainers/orfm/status
   :target: https://quay.io/repository/biocontainers/orfm
.. _`orfm/tags`: https://quay.io/repository/biocontainers/orfm?tab=tags


.. raw:: html

    <script>
        var package = "orfm";
        var versions = ["1.3","0.7.1","0.7.1","0.7.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfm/README.html