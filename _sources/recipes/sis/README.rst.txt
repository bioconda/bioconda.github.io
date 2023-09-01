:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sis'
.. highlight: bash

sis
===

.. conda:recipe:: sis
   :replaces_section_title:
   :noindex:

   A tool that uses mummer to scaffold small genomes.

   :homepage: http://marte.ic.unicamp.br:8747/
   :license: GPLv2+
   :recipe: /`sis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sis/meta.yaml>`_

   


.. conda:package:: sis

   |downloads_sis| |docker_sis|

   :versions:
      
      

      ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.0-0``

      

   
   :depends mummer: 
   :depends python: ``>=3``
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

      mamba install sis

   and update with::

      mamba update sis

  To create a new environment, run::

      mamba create --name myenvname sis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sis:<tag>

   (see `sis/tags`_ for valid values for ``<tag>``)


.. |downloads_sis| image:: https://img.shields.io/conda/dn/bioconda/sis.svg?style=flat
   :target: https://anaconda.org/bioconda/sis
   :alt:   (downloads)
.. |docker_sis| image:: https://quay.io/repository/biocontainers/sis/status
   :target: https://quay.io/repository/biocontainers/sis
.. _`sis/tags`: https://quay.io/repository/biocontainers/sis?tab=tags


.. raw:: html

    <script>
        var package = "sis";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sis/README.html