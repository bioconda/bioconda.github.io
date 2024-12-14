:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mp-est'
.. highlight: bash

mp-est
======

.. conda:recipe:: mp-est
   :replaces_section_title:
   :noindex:

   Maximum Pseudo\-likelihood Estimation of Species Trees

   :homepage: https://github.com/lliu1871/mp-est
   :license: GPL / GNU GPLv3
   :recipe: /`mp-est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est/meta.yaml>`_

   Maximum Pseudo\-likelihood Estimation of Species Trees


.. conda:package:: mp-est

   |downloads_mp-est| |docker_mp-est|

   :versions:
      
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install mp-est

   and update with::

      mamba update mp-est

  To create a new environment, run::

      mamba create --name myenvname mp-est

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mp-est:<tag>

   (see `mp-est/tags`_ for valid values for ``<tag>``)


.. |downloads_mp-est| image:: https://img.shields.io/conda/dn/bioconda/mp-est.svg?style=flat
   :target: https://anaconda.org/bioconda/mp-est
   :alt:   (downloads)
.. |docker_mp-est| image:: https://quay.io/repository/biocontainers/mp-est/status
   :target: https://quay.io/repository/biocontainers/mp-est
.. _`mp-est/tags`: https://quay.io/repository/biocontainers/mp-est?tab=tags


.. raw:: html

    <script>
        var package = "mp-est";
        var versions = ["3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mp-est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mp-est/README.html