:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blosum'
.. highlight: bash

blosum
======

.. conda:recipe:: blosum
   :replaces_section_title:
   :noindex:

   A small module for easy access to BLOSUM matrices without dependencies.

   :homepage: https://github.com/not-a-feature/blosum
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`blosum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blosum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blosum/meta.yaml>`_

   The BLOcks SUbstitution Matrices \(BLOSUM\) are used to score alignments between protein sequences and are therefore mainly used in bioinformatics. Reading such matrices is not particularly difficult\, yet most off the shelf packages are overloaded with strange dependencies. And why do we need to implement the same reader again if there is a simple module for that. blosum offers a robust and easy\-to\-expand implementation without relying on third\-party libraries.



.. conda:package:: blosum

   |downloads_blosum| |docker_blosum|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``

      

   
   :depends python: ``>=3.8``
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

      mamba install blosum

   and update with::

      mamba update blosum

  To create a new environment, run::

      mamba create --name myenvname blosum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blosum:<tag>

   (see `blosum/tags`_ for valid values for ``<tag>``)


.. |downloads_blosum| image:: https://img.shields.io/conda/dn/bioconda/blosum.svg?style=flat
   :target: https://anaconda.org/bioconda/blosum
   :alt:   (downloads)
.. |docker_blosum| image:: https://quay.io/repository/biocontainers/blosum/status
   :target: https://quay.io/repository/biocontainers/blosum
.. _`blosum/tags`: https://quay.io/repository/biocontainers/blosum?tab=tags


.. raw:: html

    <script>
        var package = "blosum";
        var versions = ["2.0.3","2.0.2","2.0.1","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blosum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blosum/README.html