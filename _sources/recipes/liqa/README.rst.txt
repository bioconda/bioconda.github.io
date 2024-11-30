:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liqa'
.. highlight: bash

liqa
====

.. conda:recipe:: liqa
   :replaces_section_title:
   :noindex:

   A statistical tool to quantify isoform\-specific expression using long\-read RNA\-seq.

   :homepage: https://github.com/WGLab/LIQA
   :documentation: https://github.com/WGLab/LIQA/blob/master/doc/Usage.md
   
   :license: MIT / MIT
   :recipe: /`liqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liqa/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02399-8`

   


.. conda:package:: liqa

   |downloads_liqa| |docker_liqa|

   :versions:
      
      

      ``1.3.4-0``

      

   
   :depends lifelines: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-betareg: 
   :depends scipy: 
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

      mamba install liqa

   and update with::

      mamba update liqa

  To create a new environment, run::

      mamba create --name myenvname liqa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/liqa:<tag>

   (see `liqa/tags`_ for valid values for ``<tag>``)


.. |downloads_liqa| image:: https://img.shields.io/conda/dn/bioconda/liqa.svg?style=flat
   :target: https://anaconda.org/bioconda/liqa
   :alt:   (downloads)
.. |docker_liqa| image:: https://quay.io/repository/biocontainers/liqa/status
   :target: https://quay.io/repository/biocontainers/liqa
.. _`liqa/tags`: https://quay.io/repository/biocontainers/liqa?tab=tags


.. raw:: html

    <script>
        var package = "liqa";
        var versions = ["1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liqa/README.html