:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'classpro'
.. highlight: bash

classpro
========

.. conda:recipe:: classpro
   :replaces_section_title:
   :noindex:

   A K\-mer classifier for HiFi reads .

   :homepage: https://github.com/yoshihikosuzuki/ClassPro/
   :license: https://github.com/yoshihikosuzuki/ClassPro/blob/main/LICENSE
   :recipe: /`classpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/classpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/classpro/meta.yaml>`_

   


.. conda:package:: classpro

   |downloads_classpro| |docker_classpro|

   :versions:
      
      

      ``1.0.2-0``

      

   
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

      mamba install classpro

   and update with::

      mamba update classpro

  To create a new environment, run::

      mamba create --name myenvname classpro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/classpro:<tag>

   (see `classpro/tags`_ for valid values for ``<tag>``)


.. |downloads_classpro| image:: https://img.shields.io/conda/dn/bioconda/classpro.svg?style=flat
   :target: https://anaconda.org/bioconda/classpro
   :alt:   (downloads)
.. |docker_classpro| image:: https://quay.io/repository/biocontainers/classpro/status
   :target: https://quay.io/repository/biocontainers/classpro
.. _`classpro/tags`: https://quay.io/repository/biocontainers/classpro?tab=tags


.. raw:: html

    <script>
        var package = "classpro";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/classpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/classpro/README.html