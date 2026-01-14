:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snipit'
.. highlight: bash

snipit
======

.. conda:recipe:: snipit
   :replaces_section_title:
   :noindex:

   Visualize snps relative to a reference sequence

   :homepage: https://github.com/aineniamh/snipit
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snipit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipit/meta.yaml>`_

   


.. conda:package:: snipit

   |downloads_snipit| |docker_snipit|

   :versions:
      
      

      ``1.7-0``,  ``1.6-0``,  ``1.2-0``,  ``1.1.2-0``,  ``1.1-0``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``

      

   
   :depends biopython: ``>=1.70``
   :depends matplotlib-base: ``>=3.2.1``
   :depends python: ``>3.5``
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

      mamba install snipit

   and update with::

      mamba update snipit

  To create a new environment, run::

      mamba create --name myenvname snipit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snipit:<tag>

   (see `snipit/tags`_ for valid values for ``<tag>``)


.. |downloads_snipit| image:: https://img.shields.io/conda/dn/bioconda/snipit.svg?style=flat
   :target: https://anaconda.org/bioconda/snipit
   :alt:   (downloads)
.. |docker_snipit| image:: https://quay.io/repository/biocontainers/snipit/status
   :target: https://quay.io/repository/biocontainers/snipit
.. _`snipit/tags`: https://quay.io/repository/biocontainers/snipit?tab=tags


.. raw:: html

    <script>
        var package = "snipit";
        var versions = ["1.7","1.6","1.2","1.1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snipit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snipit/README.html