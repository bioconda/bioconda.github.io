:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picopore'
.. highlight: bash

picopore
========

.. conda:recipe:: picopore
   :replaces_section_title:
   :noindex:

   A tool for reducing the size of Oxford Nanopore Technologies\' datasets without losing information.

   :homepage: https://github.com/scottgigante/picopore
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`picopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore/meta.yaml>`_

   


.. conda:package:: picopore

   |downloads_picopore| |docker_picopore|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends future: 
   :depends h5py: ``>2.2.0``
   :depends hdf5: ``>=1.10.2,<1.10.3.0a0``
   :depends python: 
   :depends watchdog: 
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

      mamba install picopore

   and update with::

      mamba update picopore

  To create a new environment, run::

      mamba create --name myenvname picopore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/picopore:<tag>

   (see `picopore/tags`_ for valid values for ``<tag>``)


.. |downloads_picopore| image:: https://img.shields.io/conda/dn/bioconda/picopore.svg?style=flat
   :target: https://anaconda.org/bioconda/picopore
   :alt:   (downloads)
.. |docker_picopore| image:: https://quay.io/repository/biocontainers/picopore/status
   :target: https://quay.io/repository/biocontainers/picopore
.. _`picopore/tags`: https://quay.io/repository/biocontainers/picopore?tab=tags


.. raw:: html

    <script>
        var package = "picopore";
        var versions = ["1.2.0","1.2.0","1.1.5","1.1.4","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picopore/README.html