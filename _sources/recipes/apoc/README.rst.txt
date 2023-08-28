:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apoc'
.. highlight: bash

apoc
====

.. conda:recipe:: apoc
   :replaces_section_title:
   :noindex:

   Large\-scale structural comparison of protein pockets

   :homepage: http://cssb.biology.gatech.edu/APoc
   :license: This software is freely available to ALL users.
   :recipe: /`apoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc/meta.yaml>`_

   


.. conda:package:: apoc

   |downloads_apoc| |docker_apoc|

   :versions:
      
      

      ``1b16-5``,  ``1b16-4``,  ``1b16-3``,  ``1b16-2``,  ``1b16-1``,  ``1b16-0``

      

   
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=9.3.0``
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

      mamba install apoc

   and update with::

      mamba update apoc

  To create a new environment, run::

      mamba create --name myenvname apoc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apoc:<tag>

   (see `apoc/tags`_ for valid values for ``<tag>``)


.. |downloads_apoc| image:: https://img.shields.io/conda/dn/bioconda/apoc.svg?style=flat
   :target: https://anaconda.org/bioconda/apoc
   :alt:   (downloads)
.. |docker_apoc| image:: https://quay.io/repository/biocontainers/apoc/status
   :target: https://quay.io/repository/biocontainers/apoc
.. _`apoc/tags`: https://quay.io/repository/biocontainers/apoc?tab=tags


.. raw:: html

    <script>
        var package = "apoc";
        var versions = ["1b16","1b16","1b16","1b16","1b16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apoc/README.html