:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targetdb'
.. highlight: bash

targetdb
========

.. conda:recipe:: targetdb
   :replaces_section_title:
   :noindex:

   Package with an application to generate report on potential drug targets

   :homepage: https://github.com/sdecesco/targetDB
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`targetdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetdb/meta.yaml>`_

   


.. conda:package:: targetdb

   |downloads_targetdb| |docker_targetdb|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends biopython: ``<1.77``
   :depends blast: 
   :depends fpocket: 
   :depends intermine: 
   :depends matplotlib-base: 
   :depends mysqlclient: 
   :depends numpy: 
   :depends opencv: 
   :depends opentargets: 
   :depends pandas: ``>=0.25.3``
   :depends python: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends xmltodict: 
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

      mamba install targetdb

   and update with::

      mamba update targetdb

  To create a new environment, run::

      mamba create --name myenvname targetdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/targetdb:<tag>

   (see `targetdb/tags`_ for valid values for ``<tag>``)


.. |downloads_targetdb| image:: https://img.shields.io/conda/dn/bioconda/targetdb.svg?style=flat
   :target: https://anaconda.org/bioconda/targetdb
   :alt:   (downloads)
.. |docker_targetdb| image:: https://quay.io/repository/biocontainers/targetdb/status
   :target: https://quay.io/repository/biocontainers/targetdb
.. _`targetdb/tags`: https://quay.io/repository/biocontainers/targetdb?tab=tags


.. raw:: html

    <script>
        var package = "targetdb";
        var versions = ["1.3.1","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targetdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targetdb/README.html