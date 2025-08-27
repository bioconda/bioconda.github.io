:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmannot'
.. highlight: bash

mmannot
=======

.. conda:recipe:: mmannot
   :replaces_section_title:
   :noindex:

   mmannot annotates reads\, or quantifies the features.  mmmannot takes special care of multi\-mapping reads.

   :homepage: https://github.com/mzytnicki/mmannot
   :license: GPL3/LGPL3
   :recipe: /`mmannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmannot/meta.yaml>`_

   


.. conda:package:: mmannot

   |downloads_mmannot| |docker_mmannot|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0.3-0``

      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install mmannot

   and update with::

      mamba update mmannot

  To create a new environment, run::

      mamba create --name myenvname mmannot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmannot:<tag>

   (see `mmannot/tags`_ for valid values for ``<tag>``)


.. |downloads_mmannot| image:: https://img.shields.io/conda/dn/bioconda/mmannot.svg?style=flat
   :target: https://anaconda.org/bioconda/mmannot
   :alt:   (downloads)
.. |docker_mmannot| image:: https://quay.io/repository/biocontainers/mmannot/status
   :target: https://quay.io/repository/biocontainers/mmannot
.. _`mmannot/tags`: https://quay.io/repository/biocontainers/mmannot?tab=tags


.. raw:: html

    <script>
        var package = "mmannot";
        var versions = ["1.1","1.1","1.1","1.1","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmannot/README.html