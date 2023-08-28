:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flanker'
.. highlight: bash

flanker
=======

.. conda:recipe:: flanker
   :replaces_section_title:
   :noindex:

   Gene\-flank analysis tool

   :homepage: https://github.com/wtmatlock/flanker
   :license: MIT
   :recipe: /`flanker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flanker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flanker/meta.yaml>`_

   


.. conda:package:: flanker

   |downloads_flanker| |docker_flanker|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends abricate: ``>=1.0.1``
   :depends biopython: ``>=1.78``
   :depends mash: ``>=2.2.2``
   :depends networkx: ``>=2.5``
   :depends pandas: ``>=1.2``
   :depends python: ``>=3.6``
   :depends python-levenshtein: ``0.12.2``
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

      mamba install flanker

   and update with::

      mamba update flanker

  To create a new environment, run::

      mamba create --name myenvname flanker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flanker:<tag>

   (see `flanker/tags`_ for valid values for ``<tag>``)


.. |downloads_flanker| image:: https://img.shields.io/conda/dn/bioconda/flanker.svg?style=flat
   :target: https://anaconda.org/bioconda/flanker
   :alt:   (downloads)
.. |docker_flanker| image:: https://quay.io/repository/biocontainers/flanker/status
   :target: https://quay.io/repository/biocontainers/flanker
.. _`flanker/tags`: https://quay.io/repository/biocontainers/flanker?tab=tags


.. raw:: html

    <script>
        var package = "flanker";
        var versions = ["0.1.5","0.1.4","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flanker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flanker/README.html