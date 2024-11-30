:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourcetracker'
.. highlight: bash

sourcetracker
=============

.. conda:recipe:: sourcetracker
   :replaces_section_title:
   :noindex:

   Python implementation of the SourceTracker R package.

   :homepage: http://www.biota.com
   :documentation: https://github.com/biota/sourcetracker2
   
   :developer docs: https://github.com/biota/sourcetracker2
   :license: BSD / modified BSD
   :recipe: /`sourcetracker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcetracker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcetracker/meta.yaml>`_

   Python implementation of the SourceTracker R package.


.. conda:package:: sourcetracker

   |downloads_sourcetracker| |docker_sourcetracker|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends biom-format: ``>=2.1.5,<2.2.0``
   :depends click: 
   :depends h5py: 
   :depends ipyparallel: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-bio: 
   :depends setuptools: 
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

      mamba install sourcetracker

   and update with::

      mamba update sourcetracker

  To create a new environment, run::

      mamba create --name myenvname sourcetracker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sourcetracker:<tag>

   (see `sourcetracker/tags`_ for valid values for ``<tag>``)


.. |downloads_sourcetracker| image:: https://img.shields.io/conda/dn/bioconda/sourcetracker.svg?style=flat
   :target: https://anaconda.org/bioconda/sourcetracker
   :alt:   (downloads)
.. |docker_sourcetracker| image:: https://quay.io/repository/biocontainers/sourcetracker/status
   :target: https://quay.io/repository/biocontainers/sourcetracker
.. _`sourcetracker/tags`: https://quay.io/repository/biocontainers/sourcetracker?tab=tags


.. raw:: html

    <script>
        var package = "sourcetracker";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourcetracker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourcetracker/README.html