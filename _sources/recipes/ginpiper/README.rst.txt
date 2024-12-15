:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ginpiper'
.. highlight: bash

ginpiper
========

.. conda:recipe:: ginpiper
   :replaces_section_title:
   :noindex:

   Package for smooth curve estimation\, R\_e computation and plotting.

   :homepage: https://github.com/KleistLab/ginpiper
   :license: GPL / GPLv3
   :recipe: /`ginpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ginpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ginpiper/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.05.14.21257234`

   


.. conda:package:: ginpiper

   |downloads_ginpiper| |docker_ginpiper|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-r0: 
   :depends r-scales: 
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

      mamba install ginpiper

   and update with::

      mamba update ginpiper

  To create a new environment, run::

      mamba create --name myenvname ginpiper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ginpiper:<tag>

   (see `ginpiper/tags`_ for valid values for ``<tag>``)


.. |downloads_ginpiper| image:: https://img.shields.io/conda/dn/bioconda/ginpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/ginpiper
   :alt:   (downloads)
.. |docker_ginpiper| image:: https://quay.io/repository/biocontainers/ginpiper/status
   :target: https://quay.io/repository/biocontainers/ginpiper
.. _`ginpiper/tags`: https://quay.io/repository/biocontainers/ginpiper?tab=tags


.. raw:: html

    <script>
        var package = "ginpiper";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ginpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ginpiper/README.html