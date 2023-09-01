:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roary2fripan.py'
.. highlight: bash

roary2fripan.py
===============

.. conda:recipe:: roary2fripan.py
   :replaces_section_title:
   :noindex:

   Formats Roary output for viewing in FriPan

   :homepage: https://github.com/kwongj/roary2fripan
   :license: GPLv2
   :recipe: /`roary2fripan.py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary2fripan.py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary2fripan.py/meta.yaml>`_

   


.. conda:package:: roary2fripan.py

   |downloads_roary2fripan.py| |docker_roary2fripan.py|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends python: ``<3``
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

      mamba install roary2fripan.py

   and update with::

      mamba update roary2fripan.py

  To create a new environment, run::

      mamba create --name myenvname roary2fripan.py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/roary2fripan.py:<tag>

   (see `roary2fripan.py/tags`_ for valid values for ``<tag>``)


.. |downloads_roary2fripan.py| image:: https://img.shields.io/conda/dn/bioconda/roary2fripan.py.svg?style=flat
   :target: https://anaconda.org/bioconda/roary2fripan.py
   :alt:   (downloads)
.. |docker_roary2fripan.py| image:: https://quay.io/repository/biocontainers/roary2fripan.py/status
   :target: https://quay.io/repository/biocontainers/roary2fripan.py
.. _`roary2fripan.py/tags`: https://quay.io/repository/biocontainers/roary2fripan.py?tab=tags


.. raw:: html

    <script>
        var package = "roary2fripan.py";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roary2fripan.py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roary2fripan.py/README.html