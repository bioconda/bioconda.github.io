:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kpal'
.. highlight: bash

kpal
====

.. conda:recipe:: kpal
   :replaces_section_title:
   :noindex:

   Analysis toolkit and programming library for k\-mer profiles

   :homepage: https://kpal.readthedocs.org
   :license: MIT License
   :recipe: /`kpal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal/meta.yaml>`_

   


.. conda:package:: kpal

   |downloads_kpal| |docker_kpal|

   :versions:
      
      

      ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends biopython: 
   :depends future: 
   :depends h5py: ``>=2.1``
   :depends python: 
   :depends semantic_version: 
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

      mamba install kpal

   and update with::

      mamba update kpal

  To create a new environment, run::

      mamba create --name myenvname kpal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kpal:<tag>

   (see `kpal/tags`_ for valid values for ``<tag>``)


.. |downloads_kpal| image:: https://img.shields.io/conda/dn/bioconda/kpal.svg?style=flat
   :target: https://anaconda.org/bioconda/kpal
   :alt:   (downloads)
.. |docker_kpal| image:: https://quay.io/repository/biocontainers/kpal/status
   :target: https://quay.io/repository/biocontainers/kpal
.. _`kpal/tags`: https://quay.io/repository/biocontainers/kpal?tab=tags


.. raw:: html

    <script>
        var package = "kpal";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kpal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kpal/README.html