:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs'
.. highlight: bash

macs
====

.. conda:recipe:: macs
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data

   :homepage: http://liulab.dfci.harvard.edu/MACS/
   :license: OTHER / Artistic
   :recipe: /`macs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs/meta.yaml>`_

   


.. conda:package:: macs

   |downloads_macs| |docker_macs|

   :versions:
      
      

      ``1.4.3-0``

      

   
   :depends python: ``<3``
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

      mamba install macs

   and update with::

      mamba update macs

  To create a new environment, run::

      mamba create --name myenvname macs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macs:<tag>

   (see `macs/tags`_ for valid values for ``<tag>``)


.. |downloads_macs| image:: https://img.shields.io/conda/dn/bioconda/macs.svg?style=flat
   :target: https://anaconda.org/bioconda/macs
   :alt:   (downloads)
.. |docker_macs| image:: https://quay.io/repository/biocontainers/macs/status
   :target: https://quay.io/repository/biocontainers/macs
.. _`macs/tags`: https://quay.io/repository/biocontainers/macs?tab=tags


.. raw:: html

    <script>
        var package = "macs";
        var versions = ["1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs/README.html