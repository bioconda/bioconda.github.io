:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyimagingmspec'
.. highlight: bash

pyimagingmspec
==============

.. conda:recipe:: pyimagingmspec
   :replaces_section_title:
   :noindex:

   Python library for processing imaging mass spectrometry data

   :homepage: https://github.com/alexandrovteam/pyImagingMSpec
   :license: APACHE / Apache 2.0
   :recipe: /`pyimagingmspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimagingmspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimagingmspec/meta.yaml>`_

   


.. conda:package:: pyimagingmspec

   |downloads_pyimagingmspec| |docker_pyimagingmspec|

   :versions:
      
      

      ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends python: 
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

      mamba install pyimagingmspec

   and update with::

      mamba update pyimagingmspec

  To create a new environment, run::

      mamba create --name myenvname pyimagingmspec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyimagingmspec:<tag>

   (see `pyimagingmspec/tags`_ for valid values for ``<tag>``)


.. |downloads_pyimagingmspec| image:: https://img.shields.io/conda/dn/bioconda/pyimagingmspec.svg?style=flat
   :target: https://anaconda.org/bioconda/pyimagingmspec
   :alt:   (downloads)
.. |docker_pyimagingmspec| image:: https://quay.io/repository/biocontainers/pyimagingmspec/status
   :target: https://quay.io/repository/biocontainers/pyimagingmspec
.. _`pyimagingmspec/tags`: https://quay.io/repository/biocontainers/pyimagingmspec?tab=tags


.. raw:: html

    <script>
        var package = "pyimagingmspec";
        var versions = ["0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyimagingmspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyimagingmspec/README.html