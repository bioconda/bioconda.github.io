:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wlogdate'
.. highlight: bash

wlogdate
========

.. conda:recipe:: wlogdate
   :replaces_section_title:
   :noindex:

   An implementation of the wLogDate algorithm for dating phylogenetic trees

   :homepage: https://github.com/uym2/wLogDate
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`wlogdate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wlogdate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wlogdate/meta.yaml>`_

   


.. conda:package:: wlogdate

   |downloads_wlogdate| |docker_wlogdate|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bitsets: ``>=0.7.15``
   :depends numpy: 
   :depends numpy: ``>=1.18.5``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.3.1``
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

      mamba install wlogdate

   and update with::

      mamba update wlogdate

  To create a new environment, run::

      mamba create --name myenvname wlogdate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wlogdate:<tag>

   (see `wlogdate/tags`_ for valid values for ``<tag>``)


.. |downloads_wlogdate| image:: https://img.shields.io/conda/dn/bioconda/wlogdate.svg?style=flat
   :target: https://anaconda.org/bioconda/wlogdate
   :alt:   (downloads)
.. |docker_wlogdate| image:: https://quay.io/repository/biocontainers/wlogdate/status
   :target: https://quay.io/repository/biocontainers/wlogdate
.. _`wlogdate/tags`: https://quay.io/repository/biocontainers/wlogdate?tab=tags


.. raw:: html

    <script>
        var package = "wlogdate";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wlogdate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wlogdate/README.html