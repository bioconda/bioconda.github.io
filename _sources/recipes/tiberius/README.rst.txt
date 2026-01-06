:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiberius'
.. highlight: bash

tiberius
========

.. conda:recipe:: tiberius
   :replaces_section_title:
   :noindex:

   Tiberius is a deep learning gene\-finder.

   :homepage: https://github.com/Gaius-Augustus/Tiberius
   :documentation: https://github.com/Gaius-Augustus/Tiberius/blob/v1.1.8/README.md
   
   :license: MIT / MIT
   :recipe: /`tiberius <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiberius>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiberius/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae685`, biotools: :biotools:`tiberius`

   


.. conda:package:: tiberius

   |downloads_tiberius| |docker_tiberius|

   :versions:
      
      

      ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends learnmsa: 
   :depends numpy: 
   :depends python: ``>=3.10``
   :depends tensorflow: ``<2.18``
   :depends transformers: 
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

      mamba install tiberius

   and update with::

      mamba update tiberius

  To create a new environment, run::

      mamba create --name myenvname tiberius

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tiberius:<tag>

   (see `tiberius/tags`_ for valid values for ``<tag>``)


.. |downloads_tiberius| image:: https://img.shields.io/conda/dn/bioconda/tiberius.svg?style=flat
   :target: https://anaconda.org/bioconda/tiberius
   :alt:   (downloads)
.. |docker_tiberius| image:: https://quay.io/repository/biocontainers/tiberius/status
   :target: https://quay.io/repository/biocontainers/tiberius
.. _`tiberius/tags`: https://quay.io/repository/biocontainers/tiberius?tab=tags


.. raw:: html

    <script>
        var package = "tiberius";
        var versions = ["1.1.8","1.1.7","1.1.6","1.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiberius/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiberius/README.html