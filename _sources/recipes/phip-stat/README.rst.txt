:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phip-stat'
.. highlight: bash

phip-stat
=========

.. conda:recipe:: phip-stat
   :replaces_section_title:
   :noindex:

   PhIP\-seq analysis tools

   :homepage: https://github.com/lasersonlab/phip-stat
   :license: Apache-2.0
   :recipe: /`phip-stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat/meta.yaml>`_

   


.. conda:package:: phip-stat

   |downloads_phip-stat| |docker_phip-stat|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phip-stat

   and update with::

      mamba update phip-stat

  To create a new environment, run::

      mamba create --name myenvname phip-stat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phip-stat:<tag>

   (see `phip-stat/tags`_ for valid values for ``<tag>``)


.. |downloads_phip-stat| image:: https://img.shields.io/conda/dn/bioconda/phip-stat.svg?style=flat
   :target: https://anaconda.org/bioconda/phip-stat
   :alt:   (downloads)
.. |docker_phip-stat| image:: https://quay.io/repository/biocontainers/phip-stat/status
   :target: https://quay.io/repository/biocontainers/phip-stat
.. _`phip-stat/tags`: https://quay.io/repository/biocontainers/phip-stat?tab=tags


.. raw:: html

    <script>
        var package = "phip-stat";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phip-stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phip-stat/README.html