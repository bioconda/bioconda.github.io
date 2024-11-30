:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ideas'
.. highlight: bash

ideas
=====

.. conda:recipe:: ideas/1.20
   :replaces_section_title:
   :noindex:

   A method for jointly and quantitatively characterizing multivariate epigenetic landscapes in many cell types\, tissues or conditions.

   :homepage: https://github.com/yuzhang123/IDEAS
   :license: MIT
   :recipe: /`ideas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas>`_/`1.20 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas/1.20>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas/1.20/meta.yaml>`_

   


.. conda:package:: ideas

   |downloads_ideas| |docker_ideas|

   :versions:
      
      

      ``1.20-6``,  ``1.20-5``,  ``1.20-4``,  ``1.20-3``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mkl: 
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

      mamba install ideas

   and update with::

      mamba update ideas

  To create a new environment, run::

      mamba create --name myenvname ideas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ideas:<tag>

   (see `ideas/tags`_ for valid values for ``<tag>``)


.. |downloads_ideas| image:: https://img.shields.io/conda/dn/bioconda/ideas.svg?style=flat
   :target: https://anaconda.org/bioconda/ideas
   :alt:   (downloads)
.. |docker_ideas| image:: https://quay.io/repository/biocontainers/ideas/status
   :target: https://quay.io/repository/biocontainers/ideas
.. _`ideas/tags`: https://quay.io/repository/biocontainers/ideas?tab=tags


.. raw:: html

    <script>
        var package = "ideas";
        var versions = ["1.20","1.20","1.20","1.20","1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ideas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ideas/README.html