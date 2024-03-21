:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skyline2isocor'
.. highlight: bash

skyline2isocor
==============

.. conda:recipe:: skyline2isocor
   :replaces_section_title:
   :noindex:

   Convert skyline output to IsoCor input format

   :homepage: https://pypi.org/project/skyline2isocor/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`skyline2isocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skyline2isocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skyline2isocor/meta.yaml>`_

   


.. conda:package:: skyline2isocor

   |downloads_skyline2isocor| |docker_skyline2isocor|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends pandas: ``>=2.1.4,<3.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install skyline2isocor

   and update with::

      mamba update skyline2isocor

  To create a new environment, run::

      mamba create --name myenvname skyline2isocor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skyline2isocor:<tag>

   (see `skyline2isocor/tags`_ for valid values for ``<tag>``)


.. |downloads_skyline2isocor| image:: https://img.shields.io/conda/dn/bioconda/skyline2isocor.svg?style=flat
   :target: https://anaconda.org/bioconda/skyline2isocor
   :alt:   (downloads)
.. |docker_skyline2isocor| image:: https://quay.io/repository/biocontainers/skyline2isocor/status
   :target: https://quay.io/repository/biocontainers/skyline2isocor
.. _`skyline2isocor/tags`: https://quay.io/repository/biocontainers/skyline2isocor?tab=tags


.. raw:: html

    <script>
        var package = "skyline2isocor";
        var versions = ["1.0.0","0.3.0","0.2.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skyline2isocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skyline2isocor/README.html