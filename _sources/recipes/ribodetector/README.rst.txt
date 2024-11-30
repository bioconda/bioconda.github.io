:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribodetector'
.. highlight: bash

ribodetector
============

.. conda:recipe:: ribodetector
   :replaces_section_title:
   :noindex:

   Accurate and rapid RiboRNA sequences Detector based on deep learning

   :homepage: https://github.com/hzi-bifo/RiboDetector
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ribodetector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodetector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodetector/meta.yaml>`_
   :links: biotools: :biotools:`ribodetector`

   


.. conda:package:: ribodetector

   |downloads_ribodetector| |docker_ribodetector|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends onnxruntime: 
   :depends pandas: 
   :depends python: ``>=3.8,<=3.10``
   :depends pytorch: 
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

      mamba install ribodetector

   and update with::

      mamba update ribodetector

  To create a new environment, run::

      mamba create --name myenvname ribodetector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribodetector:<tag>

   (see `ribodetector/tags`_ for valid values for ``<tag>``)


.. |downloads_ribodetector| image:: https://img.shields.io/conda/dn/bioconda/ribodetector.svg?style=flat
   :target: https://anaconda.org/bioconda/ribodetector
   :alt:   (downloads)
.. |docker_ribodetector| image:: https://quay.io/repository/biocontainers/ribodetector/status
   :target: https://quay.io/repository/biocontainers/ribodetector
.. _`ribodetector/tags`: https://quay.io/repository/biocontainers/ribodetector?tab=tags


.. raw:: html

    <script>
        var package = "ribodetector";
        var versions = ["0.3.1","0.3.0","0.2.9","0.2.8","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribodetector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribodetector/README.html