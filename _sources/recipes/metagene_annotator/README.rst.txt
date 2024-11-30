:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagene_annotator'
.. highlight: bash

metagene_annotator
==================

.. conda:recipe:: metagene_annotator
   :replaces_section_title:
   :noindex:

   MetaGeneAnnotator is a gene\-finding program for prokaryote and phage

   :homepage: http://metagene.nig.ac.jp/
   :license: The software is freely available for academic use
   :recipe: /`metagene_annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator/meta.yaml>`_

   


.. conda:package:: metagene_annotator

   |downloads_metagene_annotator| |docker_metagene_annotator|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
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

      mamba install metagene_annotator

   and update with::

      mamba update metagene_annotator

  To create a new environment, run::

      mamba create --name myenvname metagene_annotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metagene_annotator:<tag>

   (see `metagene_annotator/tags`_ for valid values for ``<tag>``)


.. |downloads_metagene_annotator| image:: https://img.shields.io/conda/dn/bioconda/metagene_annotator.svg?style=flat
   :target: https://anaconda.org/bioconda/metagene_annotator
   :alt:   (downloads)
.. |docker_metagene_annotator| image:: https://quay.io/repository/biocontainers/metagene_annotator/status
   :target: https://quay.io/repository/biocontainers/metagene_annotator
.. _`metagene_annotator/tags`: https://quay.io/repository/biocontainers/metagene_annotator?tab=tags


.. raw:: html

    <script>
        var package = "metagene_annotator";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagene_annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagene_annotator/README.html