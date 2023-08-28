:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtk'
.. highlight: bash

fqtk
====

.. conda:recipe:: fqtk
   :replaces_section_title:
   :noindex:

   A toolkit for working with FASTQ files.

   :homepage: https://github.com/fulcrumgenomics/fqtk
   :license: MIT
   :recipe: /`fqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk/meta.yaml>`_

   


.. conda:package:: fqtk

   |downloads_fqtk| |docker_fqtk|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fqtk

   and update with::

      mamba update fqtk

  To create a new environment, run::

      mamba create --name myenvname fqtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fqtk:<tag>

   (see `fqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtk| image:: https://img.shields.io/conda/dn/bioconda/fqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtk
   :alt:   (downloads)
.. |docker_fqtk| image:: https://quay.io/repository/biocontainers/fqtk/status
   :target: https://quay.io/repository/biocontainers/fqtk
.. _`fqtk/tags`: https://quay.io/repository/biocontainers/fqtk?tab=tags


.. raw:: html

    <script>
        var package = "fqtk";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtk/README.html