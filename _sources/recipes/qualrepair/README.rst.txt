:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qualrepair'
.. highlight: bash

qualrepair
==========

.. conda:recipe:: qualrepair
   :replaces_section_title:
   :noindex:

   Update the FASTQ quality scores from a subsequence FASTQ.

   :homepage: https://github.com/clintval/qualrepair
   :license: MIT
   :recipe: /`qualrepair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualrepair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualrepair/meta.yaml>`_

   


.. conda:package:: qualrepair

   |downloads_qualrepair| |docker_qualrepair|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends pysam: ``>=0.23.3``
   :depends python: ``>=3.11``
   :depends syncup: ``>=0.1.0``
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

      mamba install qualrepair

   and update with::

      mamba update qualrepair

  To create a new environment, run::

      mamba create --name myenvname qualrepair

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qualrepair:<tag>

   (see `qualrepair/tags`_ for valid values for ``<tag>``)


.. |downloads_qualrepair| image:: https://img.shields.io/conda/dn/bioconda/qualrepair.svg?style=flat
   :target: https://anaconda.org/bioconda/qualrepair
   :alt:   (downloads)
.. |docker_qualrepair| image:: https://quay.io/repository/biocontainers/qualrepair/status
   :target: https://quay.io/repository/biocontainers/qualrepair
.. _`qualrepair/tags`: https://quay.io/repository/biocontainers/qualrepair?tab=tags


.. raw:: html

    <script>
        var package = "qualrepair";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualrepair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualrepair/README.html