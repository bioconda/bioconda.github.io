:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralrecall'
.. highlight: bash

viralrecall
===========

.. conda:recipe:: viralrecall
   :replaces_section_title:
   :noindex:

   Tool to identify giant viruses integrated into eukaryotic genomes

   :homepage: https://github.com/abdealijivaji/ViralRecall_3.0
   :license: MIT / MIT
   :recipe: /`viralrecall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralrecall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralrecall/meta.yaml>`_

   


.. conda:package:: viralrecall

   |downloads_viralrecall| |docker_viralrecall|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends matplotlib-base: ``>=3.10,<3.11``
   :depends numpy: ``>=2.2,<2.3``
   :depends pandas: ``>=2.2,<2.3``
   :depends progressbar: ``>=2.5``
   :depends pyfaidx: ``0.9.0``
   :depends pyhmmer: ``>=0.11.3``
   :depends pyrodigal-gv: ``>=0.3``
   :depends python: ``>=3.10``
   :depends requests: ``>=2.32,<2.33``
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

      mamba install viralrecall

   and update with::

      mamba update viralrecall

  To create a new environment, run::

      mamba create --name myenvname viralrecall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viralrecall:<tag>

   (see `viralrecall/tags`_ for valid values for ``<tag>``)


.. |downloads_viralrecall| image:: https://img.shields.io/conda/dn/bioconda/viralrecall.svg?style=flat
   :target: https://anaconda.org/bioconda/viralrecall
   :alt:   (downloads)
.. |docker_viralrecall| image:: https://quay.io/repository/biocontainers/viralrecall/status
   :target: https://quay.io/repository/biocontainers/viralrecall
.. _`viralrecall/tags`: https://quay.io/repository/biocontainers/viralrecall?tab=tags


.. raw:: html

    <script>
        var package = "viralrecall";
        var versions = ["3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralrecall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralrecall/README.html