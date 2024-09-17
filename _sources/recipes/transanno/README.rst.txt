:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transanno'
.. highlight: bash

transanno
=========

.. conda:recipe:: transanno
   :replaces_section_title:
   :noindex:

   accurate VCF\/GFF3\/GTF LiftOver tool for new genome assemblies

   :homepage: https://github.com/informationsea/transanno
   :license: GPL / GPL-3.0-only
   :recipe: /`transanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transanno/meta.yaml>`_

   


.. conda:package:: transanno

   |downloads_transanno| |docker_transanno|

   :versions:
      
      

      ``0.4.5-0``

      

   
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

      mamba install transanno

   and update with::

      mamba update transanno

  To create a new environment, run::

      mamba create --name myenvname transanno

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transanno:<tag>

   (see `transanno/tags`_ for valid values for ``<tag>``)


.. |downloads_transanno| image:: https://img.shields.io/conda/dn/bioconda/transanno.svg?style=flat
   :target: https://anaconda.org/bioconda/transanno
   :alt:   (downloads)
.. |docker_transanno| image:: https://quay.io/repository/biocontainers/transanno/status
   :target: https://quay.io/repository/biocontainers/transanno
.. _`transanno/tags`: https://quay.io/repository/biocontainers/transanno?tab=tags


.. raw:: html

    <script>
        var package = "transanno";
        var versions = ["0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transanno/README.html