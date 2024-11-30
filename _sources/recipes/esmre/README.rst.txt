:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esmre'
.. highlight: bash

esmre
=====

.. conda:recipe:: esmre
   :replaces_section_title:
   :noindex:

   Regular expression accelerator

   :homepage: http://code.google.com/p/esmre/
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`esmre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esmre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esmre/meta.yaml>`_

   


.. conda:package:: esmre

   |downloads_esmre| |docker_esmre|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install esmre

   and update with::

      mamba update esmre

  To create a new environment, run::

      mamba create --name myenvname esmre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esmre:<tag>

   (see `esmre/tags`_ for valid values for ``<tag>``)


.. |downloads_esmre| image:: https://img.shields.io/conda/dn/bioconda/esmre.svg?style=flat
   :target: https://anaconda.org/bioconda/esmre
   :alt:   (downloads)
.. |docker_esmre| image:: https://quay.io/repository/biocontainers/esmre/status
   :target: https://quay.io/repository/biocontainers/esmre
.. _`esmre/tags`: https://quay.io/repository/biocontainers/esmre?tab=tags


.. raw:: html

    <script>
        var package = "esmre";
        var versions = ["0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esmre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esmre/README.html