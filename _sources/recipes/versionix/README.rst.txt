:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'versionix'
.. highlight: bash

versionix
=========

.. conda:recipe:: versionix
   :replaces_section_title:
   :noindex:

   Get version of any tools

   :homepage: https://github.com/sequana/versionix
   :license: BSD / BSD-3-Clause
   :recipe: /`versionix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/versionix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/versionix/meta.yaml>`_

   


.. conda:package:: versionix

   |downloads_versionix| |docker_versionix|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends click: ``>=8.1.7``
   :depends python: ``>=3.8.0``
   :depends rich-click: 
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

      mamba install versionix

   and update with::

      mamba update versionix

  To create a new environment, run::

      mamba create --name myenvname versionix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/versionix:<tag>

   (see `versionix/tags`_ for valid values for ``<tag>``)


.. |downloads_versionix| image:: https://img.shields.io/conda/dn/bioconda/versionix.svg?style=flat
   :target: https://anaconda.org/bioconda/versionix
   :alt:   (downloads)
.. |docker_versionix| image:: https://quay.io/repository/biocontainers/versionix/status
   :target: https://quay.io/repository/biocontainers/versionix
.. _`versionix/tags`: https://quay.io/repository/biocontainers/versionix?tab=tags


.. raw:: html

    <script>
        var package = "versionix";
        var versions = ["0.2.4","0.2.3","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/versionix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/versionix/README.html