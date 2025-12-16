:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamate'
.. highlight: bash

metamate
========

.. conda:recipe:: metamate
   :replaces_section_title:
   :noindex:

   metaMATE\: your metabarcoding friend\!

   :homepage: https://github.com/tjcreedy/metamate
   :license: GPL-3.0
   :recipe: /`metamate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamate/meta.yaml>`_

   


.. conda:package:: metamate

   |downloads_metamate| |docker_metamate|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``

      

   
   :depends bbmap: 
   :depends biopython: ``>=1.76``
   :depends mafft: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends scipy: ``>=1.4.1``
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

      mamba install metamate

   and update with::

      mamba update metamate

  To create a new environment, run::

      mamba create --name myenvname metamate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metamate:<tag>

   (see `metamate/tags`_ for valid values for ``<tag>``)


.. |downloads_metamate| image:: https://img.shields.io/conda/dn/bioconda/metamate.svg?style=flat
   :target: https://anaconda.org/bioconda/metamate
   :alt:   (downloads)
.. |docker_metamate| image:: https://quay.io/repository/biocontainers/metamate/status
   :target: https://quay.io/repository/biocontainers/metamate
.. _`metamate/tags`: https://quay.io/repository/biocontainers/metamate?tab=tags


.. raw:: html

    <script>
        var package = "metamate";
        var versions = ["0.5.1","0.5.0","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamate/README.html