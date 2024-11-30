:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beamspy'
.. highlight: bash

beamspy
=======

.. conda:recipe:: beamspy
   :replaces_section_title:
   :noindex:

   BEAMSpy \- Birmingham mEtabolite Annotation for Mass Spectrometry \(Python package\)

   :homepage: https://github.com/computational-metabolomics/beamspy
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`beamspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy/meta.yaml>`_

   


.. conda:package:: beamspy

   |downloads_beamspy| |docker_beamspy|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends biopython: ``<=1.78``
   :depends matplotlib: 
   :depends networkx: ``<=2.5``
   :depends numpy: 
   :depends pandas: ``<=1.5.3``
   :depends pyside2: 
   :depends pyteomics: ``<=4.4.1``
   :depends python: ``>3.8,<3.11``
   :depends requests: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
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

      mamba install beamspy

   and update with::

      mamba update beamspy

  To create a new environment, run::

      mamba create --name myenvname beamspy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beamspy:<tag>

   (see `beamspy/tags`_ for valid values for ``<tag>``)


.. |downloads_beamspy| image:: https://img.shields.io/conda/dn/bioconda/beamspy.svg?style=flat
   :target: https://anaconda.org/bioconda/beamspy
   :alt:   (downloads)
.. |docker_beamspy| image:: https://quay.io/repository/biocontainers/beamspy/status
   :target: https://quay.io/repository/biocontainers/beamspy
.. _`beamspy/tags`: https://quay.io/repository/biocontainers/beamspy?tab=tags


.. raw:: html

    <script>
        var package = "beamspy";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beamspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beamspy/README.html