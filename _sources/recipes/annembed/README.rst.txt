:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annembed'
.. highlight: bash

annembed
========

.. conda:recipe:: annembed
   :replaces_section_title:
   :noindex:

   annembed is an ultra\-fast and scalable non\-linear dimension reduction\/embedding algorithm \(similar to UMAP or t\-SNE\) for large\-scale biological data

   :homepage: https://github.com/jianshu93/annembed
   :license: MIT
   :recipe: /`annembed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annembed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annembed/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqae172`

   


.. conda:package:: annembed

   |downloads_annembed| |docker_annembed|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install annembed

   and update with::

      mamba update annembed

  To create a new environment, run::

      mamba create --name myenvname annembed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/annembed:<tag>

   (see `annembed/tags`_ for valid values for ``<tag>``)


.. |downloads_annembed| image:: https://img.shields.io/conda/dn/bioconda/annembed.svg?style=flat
   :target: https://anaconda.org/bioconda/annembed
   :alt:   (downloads)
.. |docker_annembed| image:: https://quay.io/repository/biocontainers/annembed/status
   :target: https://quay.io/repository/biocontainers/annembed
.. _`annembed/tags`: https://quay.io/repository/biocontainers/annembed?tab=tags


.. raw:: html

    <script>
        var package = "annembed";
        var versions = ["0.1.8","0.1.7","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annembed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annembed/README.html