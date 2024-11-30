:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboloco'
.. highlight: bash

riboloco
========

.. conda:recipe:: riboloco
   :replaces_section_title:
   :noindex:

   Riboseq analysis

   :homepage: https://github.com/Delayed-Gitification/riboloco.git
   :license: MIT / MIT
   :recipe: /`riboloco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboloco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboloco/meta.yaml>`_

   


.. conda:package:: riboloco

   |downloads_riboloco| |docker_riboloco|

   :versions:
      
      

      ``0.3.9-0``

      

   
   :depends gffutils: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install riboloco

   and update with::

      mamba update riboloco

  To create a new environment, run::

      mamba create --name myenvname riboloco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riboloco:<tag>

   (see `riboloco/tags`_ for valid values for ``<tag>``)


.. |downloads_riboloco| image:: https://img.shields.io/conda/dn/bioconda/riboloco.svg?style=flat
   :target: https://anaconda.org/bioconda/riboloco
   :alt:   (downloads)
.. |docker_riboloco| image:: https://quay.io/repository/biocontainers/riboloco/status
   :target: https://quay.io/repository/biocontainers/riboloco
.. _`riboloco/tags`: https://quay.io/repository/biocontainers/riboloco?tab=tags


.. raw:: html

    <script>
        var package = "riboloco";
        var versions = ["0.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboloco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboloco/README.html