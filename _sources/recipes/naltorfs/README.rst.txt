:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naltorfs'
.. highlight: bash

naltorfs
========

.. conda:recipe:: naltorfs
   :replaces_section_title:
   :noindex:

   Nested Alternate Open Reading Frames \(nAlt\-ORFs\)

   :homepage: https://github.com/BlankenbergLab/nAltORFs
   :license: MIT / MIT
   :recipe: /`naltorfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naltorfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naltorfs/meta.yaml>`_

   


.. conda:package:: naltorfs

   |downloads_naltorfs| |docker_naltorfs|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``1.79``
   :depends python: ``>=3.8``
   :depends twobitreader: ``3.1.7``
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

      mamba install naltorfs

   and update with::

      mamba update naltorfs

  To create a new environment, run::

      mamba create --name myenvname naltorfs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/naltorfs:<tag>

   (see `naltorfs/tags`_ for valid values for ``<tag>``)


.. |downloads_naltorfs| image:: https://img.shields.io/conda/dn/bioconda/naltorfs.svg?style=flat
   :target: https://anaconda.org/bioconda/naltorfs
   :alt:   (downloads)
.. |docker_naltorfs| image:: https://quay.io/repository/biocontainers/naltorfs/status
   :target: https://quay.io/repository/biocontainers/naltorfs
.. _`naltorfs/tags`: https://quay.io/repository/biocontainers/naltorfs?tab=tags


.. raw:: html

    <script>
        var package = "naltorfs";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naltorfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naltorfs/README.html