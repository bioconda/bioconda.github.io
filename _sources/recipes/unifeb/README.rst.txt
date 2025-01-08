:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unifeb'
.. highlight: bash

unifeb
======

.. conda:recipe:: unifeb
   :replaces_section_title:
   :noindex:

   unifeb is an non\-linear dimension reduction\/embedding algorithm for UniFrac distance. It is ultra\-fast and scalable.

   :homepage: https://github.com/jianshu93/unifeb.git
   :license: MIT
   :recipe: /`unifeb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifeb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifeb/meta.yaml>`_

   


.. conda:package:: unifeb

   |downloads_unifeb| |docker_unifeb|

   :versions:
      
      

      ``0.1.1-0``

      

   
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

      mamba install unifeb

   and update with::

      mamba update unifeb

  To create a new environment, run::

      mamba create --name myenvname unifeb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unifeb:<tag>

   (see `unifeb/tags`_ for valid values for ``<tag>``)


.. |downloads_unifeb| image:: https://img.shields.io/conda/dn/bioconda/unifeb.svg?style=flat
   :target: https://anaconda.org/bioconda/unifeb
   :alt:   (downloads)
.. |docker_unifeb| image:: https://quay.io/repository/biocontainers/unifeb/status
   :target: https://quay.io/repository/biocontainers/unifeb
.. _`unifeb/tags`: https://quay.io/repository/biocontainers/unifeb?tab=tags


.. raw:: html

    <script>
        var package = "unifeb";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifeb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifeb/README.html