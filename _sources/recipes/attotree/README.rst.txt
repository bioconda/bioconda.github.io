:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'attotree'
.. highlight: bash

attotree
========

.. conda:recipe:: attotree
   :replaces_section_title:
   :noindex:

   rapid estimation of phylogenetic trees using sketching

   :homepage: https://github.com/karel-brinda/attotree
   :license: MIT / MIT
   :recipe: /`attotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/attotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/attotree/meta.yaml>`_

   


.. conda:package:: attotree

   |downloads_attotree| |docker_attotree|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends mash: 
   :depends python: ``>=3``
   :depends quicktree: 
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

      mamba install attotree

   and update with::

      mamba update attotree

  To create a new environment, run::

      mamba create --name myenvname attotree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/attotree:<tag>

   (see `attotree/tags`_ for valid values for ``<tag>``)


.. |downloads_attotree| image:: https://img.shields.io/conda/dn/bioconda/attotree.svg?style=flat
   :target: https://anaconda.org/bioconda/attotree
   :alt:   (downloads)
.. |docker_attotree| image:: https://quay.io/repository/biocontainers/attotree/status
   :target: https://quay.io/repository/biocontainers/attotree
.. _`attotree/tags`: https://quay.io/repository/biocontainers/attotree?tab=tags


.. raw:: html

    <script>
        var package = "attotree";
        var versions = ["0.1.6","0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/attotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/attotree/README.html