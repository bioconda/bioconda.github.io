:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastuniq'
.. highlight: bash

fastuniq
========

.. conda:recipe:: fastuniq
   :replaces_section_title:
   :noindex:

   FastUniq\, A Fast De Novo Duplicates Removal Tool for Paired Short Reads

   :homepage: https://sourceforge.net/projects/fastuniq/
   :license: Creative Commons Attribution License
   :recipe: /`fastuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastuniq/meta.yaml>`_

   


.. conda:package:: fastuniq

   |downloads_fastuniq| |docker_fastuniq|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install fastuniq

   and update with::

      mamba update fastuniq

  To create a new environment, run::

      mamba create --name myenvname fastuniq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastuniq:<tag>

   (see `fastuniq/tags`_ for valid values for ``<tag>``)


.. |downloads_fastuniq| image:: https://img.shields.io/conda/dn/bioconda/fastuniq.svg?style=flat
   :target: https://anaconda.org/bioconda/fastuniq
   :alt:   (downloads)
.. |docker_fastuniq| image:: https://quay.io/repository/biocontainers/fastuniq/status
   :target: https://quay.io/repository/biocontainers/fastuniq
.. _`fastuniq/tags`: https://quay.io/repository/biocontainers/fastuniq?tab=tags


.. raw:: html

    <script>
        var package = "fastuniq";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastuniq/README.html