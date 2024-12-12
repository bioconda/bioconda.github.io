:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqyclean'
.. highlight: bash

seqyclean
=========

.. conda:recipe:: seqyclean
   :replaces_section_title:
   :noindex:

   Main purpose of this software is to pre\-process NGS data in order to prepare for downstream analysis.

   :homepage: https://github.com/ibest/seqyclean
   :license: MIT / MIT
   :recipe: /`seqyclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean/meta.yaml>`_

   


.. conda:package:: seqyclean

   |downloads_seqyclean| |docker_seqyclean|

   :versions:
      
      

      ``1.10.09-6``,  ``1.10.09-5``,  ``1.10.09-4``,  ``1.10.09-3``,  ``1.10.09-2``,  ``1.10.09-1``,  ``1.10.09-0``,  ``1.10.07-1``,  ``1.10.07-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install seqyclean

   and update with::

      mamba update seqyclean

  To create a new environment, run::

      mamba create --name myenvname seqyclean

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqyclean:<tag>

   (see `seqyclean/tags`_ for valid values for ``<tag>``)


.. |downloads_seqyclean| image:: https://img.shields.io/conda/dn/bioconda/seqyclean.svg?style=flat
   :target: https://anaconda.org/bioconda/seqyclean
   :alt:   (downloads)
.. |docker_seqyclean| image:: https://quay.io/repository/biocontainers/seqyclean/status
   :target: https://quay.io/repository/biocontainers/seqyclean
.. _`seqyclean/tags`: https://quay.io/repository/biocontainers/seqyclean?tab=tags


.. raw:: html

    <script>
        var package = "seqyclean";
        var versions = ["1.10.09","1.10.09","1.10.09","1.10.09","1.10.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqyclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqyclean/README.html