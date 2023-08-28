:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stag'
.. highlight: bash

stag
====

.. conda:recipe:: stag
   :replaces_section_title:
   :noindex:

   A hierarchical taxonomic classifier for metagenomic sequences

   :homepage: https://github.com/zellerlab/stag
   :license: GPL / GPL-3.0
   :recipe: /`stag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stag/meta.yaml>`_

   


.. conda:package:: stag

   |downloads_stag| |docker_stag|

   :versions:
      
      

      ``0.8.3-1``,  ``0.8.3-0``

      

   
   :depends h5py: ``2.10.0.*``
   :depends hmmer: 
   :depends infernal: 
   :depends numpy: ``1.19.*``
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends regex: 
   :depends scikit-learn: ``<0.24``
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install stag

   and update with::

      mamba update stag

  To create a new environment, run::

      mamba create --name myenvname stag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stag:<tag>

   (see `stag/tags`_ for valid values for ``<tag>``)


.. |downloads_stag| image:: https://img.shields.io/conda/dn/bioconda/stag.svg?style=flat
   :target: https://anaconda.org/bioconda/stag
   :alt:   (downloads)
.. |docker_stag| image:: https://quay.io/repository/biocontainers/stag/status
   :target: https://quay.io/repository/biocontainers/stag
.. _`stag/tags`: https://quay.io/repository/biocontainers/stag?tab=tags


.. raw:: html

    <script>
        var package = "stag";
        var versions = ["0.8.3","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stag/README.html