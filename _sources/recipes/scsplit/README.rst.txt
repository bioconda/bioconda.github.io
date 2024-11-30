:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scsplit'
.. highlight: bash

scsplit
=======

.. conda:recipe:: scsplit
   :replaces_section_title:
   :noindex:

   Genotype\-free demultiplexing of pooled single\-cell RNA\-Seq

   :homepage: https://github.com/jon-xu/scSplit
   :license: MIT
   :recipe: /`scsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scsplit/meta.yaml>`_

   


.. conda:package:: scsplit

   |downloads_scsplit| |docker_scsplit|

   :versions:
      
      

      ``1.0.8.2-0``

      

   
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

      mamba install scsplit

   and update with::

      mamba update scsplit

  To create a new environment, run::

      mamba create --name myenvname scsplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scsplit:<tag>

   (see `scsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_scsplit| image:: https://img.shields.io/conda/dn/bioconda/scsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/scsplit
   :alt:   (downloads)
.. |docker_scsplit| image:: https://quay.io/repository/biocontainers/scsplit/status
   :target: https://quay.io/repository/biocontainers/scsplit
.. _`scsplit/tags`: https://quay.io/repository/biocontainers/scsplit?tab=tags


.. raw:: html

    <script>
        var package = "scsplit";
        var versions = ["1.0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scsplit/README.html