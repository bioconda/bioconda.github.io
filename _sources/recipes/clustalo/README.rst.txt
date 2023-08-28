:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustalo'
.. highlight: bash

clustalo
========

.. conda:recipe:: clustalo
   :replaces_section_title:
   :noindex:

   Latest version of Clustal\: a multiple sequence alignment program for DNA or proteins

   :homepage: http://www.clustal.org/omega/
   :license: GPLv2
   :recipe: /`clustalo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo/meta.yaml>`_

   


.. conda:package:: clustalo

   |downloads_clustalo| |docker_clustalo|

   :versions:
      
      

      ``1.2.4-7``,  ``1.2.4-6``,  ``1.2.4-5``,  ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``

      

   
   :depends argtable2: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install clustalo

   and update with::

      mamba update clustalo

  To create a new environment, run::

      mamba create --name myenvname clustalo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clustalo:<tag>

   (see `clustalo/tags`_ for valid values for ``<tag>``)


.. |downloads_clustalo| image:: https://img.shields.io/conda/dn/bioconda/clustalo.svg?style=flat
   :target: https://anaconda.org/bioconda/clustalo
   :alt:   (downloads)
.. |docker_clustalo| image:: https://quay.io/repository/biocontainers/clustalo/status
   :target: https://quay.io/repository/biocontainers/clustalo
.. _`clustalo/tags`: https://quay.io/repository/biocontainers/clustalo?tab=tags


.. raw:: html

    <script>
        var package = "clustalo";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalo/README.html