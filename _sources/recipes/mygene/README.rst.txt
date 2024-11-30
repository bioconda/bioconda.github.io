:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mygene'
.. highlight: bash

mygene
======

.. conda:recipe:: mygene
   :replaces_section_title:
   :noindex:

   Python Client for MyGene.Info services.

   :homepage: https://github.com/suLab/mygene.py
   :license: BSD / BSD License
   :recipe: /`mygene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene/meta.yaml>`_

   


.. conda:package:: mygene

   |downloads_mygene| |docker_mygene|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-2``,  ``3.0.0-0``,  ``2.2.0-0``

      

   
   :depends biothings_client: ``>=0.2.0``
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

      mamba install mygene

   and update with::

      mamba update mygene

  To create a new environment, run::

      mamba create --name myenvname mygene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mygene:<tag>

   (see `mygene/tags`_ for valid values for ``<tag>``)


.. |downloads_mygene| image:: https://img.shields.io/conda/dn/bioconda/mygene.svg?style=flat
   :target: https://anaconda.org/bioconda/mygene
   :alt:   (downloads)
.. |docker_mygene| image:: https://quay.io/repository/biocontainers/mygene/status
   :target: https://quay.io/repository/biocontainers/mygene
.. _`mygene/tags`: https://quay.io/repository/biocontainers/mygene?tab=tags


.. raw:: html

    <script>
        var package = "mygene";
        var versions = ["3.2.2","3.2.1","3.2.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mygene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mygene/README.html