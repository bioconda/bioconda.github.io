:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lamps'
.. highlight: bash

lamps
=====

.. conda:recipe:: lamps
   :replaces_section_title:
   :noindex:

   Liverpool Annotation of metabolites using Mass Spectrometry

   :homepage: https://pypi.org/project/lamps/
   :developer docs: https://github.com/wanchanglin/lamp
   :license: GPL-3.0-or-later
   :recipe: /`lamps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamps/meta.yaml>`_

   


.. conda:package:: lamps

   |downloads_lamps| |docker_lamps|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pyjanitor: 
   :depends pyside6: 
   :depends pyteomics: 
   :depends python: ``>=3.8``
   :depends scipy: 
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

      mamba install lamps

   and update with::

      mamba update lamps

  To create a new environment, run::

      mamba create --name myenvname lamps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lamps:<tag>

   (see `lamps/tags`_ for valid values for ``<tag>``)


.. |downloads_lamps| image:: https://img.shields.io/conda/dn/bioconda/lamps.svg?style=flat
   :target: https://anaconda.org/bioconda/lamps
   :alt:   (downloads)
.. |docker_lamps| image:: https://quay.io/repository/biocontainers/lamps/status
   :target: https://quay.io/repository/biocontainers/lamps
.. _`lamps/tags`: https://quay.io/repository/biocontainers/lamps?tab=tags


.. raw:: html

    <script>
        var package = "lamps";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lamps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lamps/README.html