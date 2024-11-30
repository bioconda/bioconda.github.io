:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emblmygff3'
.. highlight: bash

emblmygff3
==========

.. conda:recipe:: emblmygff3
   :replaces_section_title:
   :noindex:

   An efficient way to convert gff3 annotation files into EMBL format ready to submit.

   :homepage: https://github.com/NBISweden/EMBLmyGFF3
   :license: GPL / GPLv3
   :recipe: /`emblmygff3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3/meta.yaml>`_

   


.. conda:package:: emblmygff3

   |downloads_emblmygff3| |docker_emblmygff3|

   :versions:
      
      

      ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2-1``,  ``2-0``,  ``1.3-0``

      

   
   :depends bcbio-gff: ``>=0.6.4``
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.22``
   :depends python: ``>=3.9.0``
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

      mamba install emblmygff3

   and update with::

      mamba update emblmygff3

  To create a new environment, run::

      mamba create --name myenvname emblmygff3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emblmygff3:<tag>

   (see `emblmygff3/tags`_ for valid values for ``<tag>``)


.. |downloads_emblmygff3| image:: https://img.shields.io/conda/dn/bioconda/emblmygff3.svg?style=flat
   :target: https://anaconda.org/bioconda/emblmygff3
   :alt:   (downloads)
.. |docker_emblmygff3| image:: https://quay.io/repository/biocontainers/emblmygff3/status
   :target: https://quay.io/repository/biocontainers/emblmygff3
.. _`emblmygff3/tags`: https://quay.io/repository/biocontainers/emblmygff3?tab=tags


.. raw:: html

    <script>
        var package = "emblmygff3";
        var versions = ["2.3","2.2","2.2","2.1","2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emblmygff3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emblmygff3/README.html