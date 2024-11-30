:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phizz'
.. highlight: bash

phizz
=====

.. conda:recipe:: phizz
   :replaces_section_title:
   :noindex:

   Tool to query hpo database and some other sources

   :homepage: https://github.com/moonso/phizz
   :license: MIT License
   :recipe: /`phizz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz/meta.yaml>`_

   


.. conda:package:: phizz

   |downloads_phizz| |docker_phizz|

   :versions:
      
      

      ``0.2.3-0``,  ``0.0.1-2``,  ``0.0.1-0``

      

   
   :depends click: 
   :depends configobj: 
   :depends interval_tree: 
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

      mamba install phizz

   and update with::

      mamba update phizz

  To create a new environment, run::

      mamba create --name myenvname phizz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phizz:<tag>

   (see `phizz/tags`_ for valid values for ``<tag>``)


.. |downloads_phizz| image:: https://img.shields.io/conda/dn/bioconda/phizz.svg?style=flat
   :target: https://anaconda.org/bioconda/phizz
   :alt:   (downloads)
.. |docker_phizz| image:: https://quay.io/repository/biocontainers/phizz/status
   :target: https://quay.io/repository/biocontainers/phizz
.. _`phizz/tags`: https://quay.io/repository/biocontainers/phizz?tab=tags


.. raw:: html

    <script>
        var package = "phizz";
        var versions = ["0.2.3","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phizz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phizz/README.html