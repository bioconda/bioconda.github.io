:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ega2'
.. highlight: bash

ega2
====

.. conda:recipe:: ega2
   :replaces_section_title:
   :noindex:

   EGA download client v2

   :homepage: https://ega-archive.org/download/downloader-quickguide-v2
   :license: unknown
   :recipe: /`ega2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2/meta.yaml>`_

   The most up\-to\-date download client for EGA can be found in the pyega3
   package. However\, that tool does not download a fairly large chunk of EGA
   files \(those ending in .gpg rather than .cip\)\, which limits its generic
   usefulness. This package attempts to provide the v2 Java client in a more
   useful manner than a simple .jar.


.. conda:package:: ega2

   |downloads_ega2| |docker_ega2|

   :versions:
      
      

      ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install ega2

   and update with::

      mamba update ega2

  To create a new environment, run::

      mamba create --name myenvname ega2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ega2:<tag>

   (see `ega2/tags`_ for valid values for ``<tag>``)


.. |downloads_ega2| image:: https://img.shields.io/conda/dn/bioconda/ega2.svg?style=flat
   :target: https://anaconda.org/bioconda/ega2
   :alt:   (downloads)
.. |docker_ega2| image:: https://quay.io/repository/biocontainers/ega2/status
   :target: https://quay.io/repository/biocontainers/ega2
.. _`ega2/tags`: https://quay.io/repository/biocontainers/ega2?tab=tags


.. raw:: html

    <script>
        var package = "ega2";
        var versions = ["2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ega2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ega2/README.html