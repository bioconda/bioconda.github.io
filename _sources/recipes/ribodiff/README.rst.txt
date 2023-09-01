:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribodiff'
.. highlight: bash

ribodiff
========

.. conda:recipe:: ribodiff
   :replaces_section_title:
   :noindex:

   RiboDiff is a statistical tool that detects the protein translational efficiency change from Ribo\-Seq \(ribosome footprinting\) and RNA\-Seq data.

   :homepage: http://public.bmi.inf.ethz.ch/user/zhongy/RiboDiff/index.html
   :license: GPL 3
   :recipe: /`ribodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodiff/meta.yaml>`_

   


.. conda:package:: ribodiff

   |downloads_ribodiff| |docker_ribodiff|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends matplotlib: ``>=1.3.0``
   :depends numpy: ``>=1.8.0``
   :depends python: ``<3``
   :depends scipy: ``>=0.13.3``
   :depends statsmodels: ``>=0.5.0``
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

      mamba install ribodiff

   and update with::

      mamba update ribodiff

  To create a new environment, run::

      mamba create --name myenvname ribodiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribodiff:<tag>

   (see `ribodiff/tags`_ for valid values for ``<tag>``)


.. |downloads_ribodiff| image:: https://img.shields.io/conda/dn/bioconda/ribodiff.svg?style=flat
   :target: https://anaconda.org/bioconda/ribodiff
   :alt:   (downloads)
.. |docker_ribodiff| image:: https://quay.io/repository/biocontainers/ribodiff/status
   :target: https://quay.io/repository/biocontainers/ribodiff
.. _`ribodiff/tags`: https://quay.io/repository/biocontainers/ribodiff?tab=tags


.. raw:: html

    <script>
        var package = "ribodiff";
        var versions = ["0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribodiff/README.html