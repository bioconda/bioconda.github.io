:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'check-sort-order'
.. highlight: bash

check-sort-order
================

.. conda:recipe:: check-sort-order
   :replaces_section_title:
   :noindex:

   check sort\-order of genomic files according to a genomefile

   :homepage: https://github.com/gogetdata/ggd-utils
   :license: MIT
   :recipe: /`check-sort-order <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/check-sort-order>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/check-sort-order/meta.yaml>`_

   


.. conda:package:: check-sort-order

   |downloads_check-sort-order| |docker_check-sort-order|

   :versions:
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
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

      mamba install check-sort-order

   and update with::

      mamba update check-sort-order

  To create a new environment, run::

      mamba create --name myenvname check-sort-order

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/check-sort-order:<tag>

   (see `check-sort-order/tags`_ for valid values for ``<tag>``)


.. |downloads_check-sort-order| image:: https://img.shields.io/conda/dn/bioconda/check-sort-order.svg?style=flat
   :target: https://anaconda.org/bioconda/check-sort-order
   :alt:   (downloads)
.. |docker_check-sort-order| image:: https://quay.io/repository/biocontainers/check-sort-order/status
   :target: https://quay.io/repository/biocontainers/check-sort-order
.. _`check-sort-order/tags`: https://quay.io/repository/biocontainers/check-sort-order?tab=tags


.. raw:: html

    <script>
        var package = "check-sort-order";
        var versions = ["0.0.7","0.0.7","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/check-sort-order/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/check-sort-order/README.html