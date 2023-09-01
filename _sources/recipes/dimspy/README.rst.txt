:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dimspy'
.. highlight: bash

dimspy
======

.. conda:recipe:: dimspy
   :replaces_section_title:
   :noindex:

   Python package for data processing of direct\-infusion mass spectrometry\-based metabolomics and lipidomics data

   :homepage: https://github.com/computational-metabolomics/dimspy
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`dimspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy/meta.yaml>`_

   


.. conda:package:: dimspy

   |downloads_dimspy| |docker_dimspy|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends fastcluster: ``1.1.26``
   :depends h5py: ``2.10.0``
   :depends mono: ``5.*``
   :depends numpy: ``1.17.1``
   :depends pandas: ``0.25.0``
   :depends pymzml: ``2.4.5``
   :depends pytables: ``3.6.1``
   :depends python: ``>3.7``
   :depends pythonnet: ``2.4.0``
   :depends scipy: ``1.3.1``
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

      mamba install dimspy

   and update with::

      mamba update dimspy

  To create a new environment, run::

      mamba create --name myenvname dimspy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dimspy:<tag>

   (see `dimspy/tags`_ for valid values for ``<tag>``)


.. |downloads_dimspy| image:: https://img.shields.io/conda/dn/bioconda/dimspy.svg?style=flat
   :target: https://anaconda.org/bioconda/dimspy
   :alt:   (downloads)
.. |docker_dimspy| image:: https://quay.io/repository/biocontainers/dimspy/status
   :target: https://quay.io/repository/biocontainers/dimspy
.. _`dimspy/tags`: https://quay.io/repository/biocontainers/dimspy?tab=tags


.. raw:: html

    <script>
        var package = "dimspy";
        var versions = ["2.0.0","2.0.0","1.4.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dimspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dimspy/README.html