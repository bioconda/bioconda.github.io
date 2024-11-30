:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqiolib'
.. highlight: bash

seqiolib
========

.. conda:recipe:: seqiolib
   :replaces_section_title:
   :noindex:

   Library to read\, write sequence\, variants\, regions to use them for training of machine learning algorithms.

   :homepage: https://github.com/visze/seqiolib
   :license: MIT / MIT
   :recipe: /`seqiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqiolib/meta.yaml>`_

   


.. conda:package:: seqiolib

   |downloads_seqiolib| |docker_seqiolib|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends numpy: 
   :depends pyfaidx: 
   :depends python: ``>=3``
   :depends tensorflow: 
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

      mamba install seqiolib

   and update with::

      mamba update seqiolib

  To create a new environment, run::

      mamba create --name myenvname seqiolib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqiolib:<tag>

   (see `seqiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_seqiolib| image:: https://img.shields.io/conda/dn/bioconda/seqiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/seqiolib
   :alt:   (downloads)
.. |docker_seqiolib| image:: https://quay.io/repository/biocontainers/seqiolib/status
   :target: https://quay.io/repository/biocontainers/seqiolib
.. _`seqiolib/tags`: https://quay.io/repository/biocontainers/seqiolib?tab=tags


.. raw:: html

    <script>
        var package = "seqiolib";
        var versions = ["0.2.4","0.2.3","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqiolib/README.html