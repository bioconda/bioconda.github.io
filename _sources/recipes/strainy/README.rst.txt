:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainy'
.. highlight: bash

strainy
=======

.. conda:recipe:: strainy
   :replaces_section_title:
   :noindex:

   Assembly\-based metagenomic strain phasing using long reads.

   :homepage: https://github.com/katerinakazantseva/strainy
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`strainy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainy/meta.yaml>`_

   


.. conda:package:: strainy

   |downloads_strainy| |docker_strainy|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends bcftools: ``>=1.14``
   :depends biopython: 
   :depends flye: 
   :depends gfapy: 
   :depends karateclub: 
   :depends matplotlib-base: 
   :depends minimap2: ``>=2.28``
   :depends networkx: ``>=2.6,<3.4``
   :depends numpy: ``>=1.24,<1.27``
   :depends pandas: ``>=1.3,<3``
   :depends pygraphviz: 
   :depends pysam: ``>=0.20,<0.23``
   :depends python: ``>=3.8``
   :depends python-edlib: 
   :depends samtools: ``>=1.14``
   :depends scipy: ``>=1.8,<1.13``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strainy

   and update with::

      mamba update strainy

  To create a new environment, run::

      mamba create --name myenvname strainy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strainy:<tag>

   (see `strainy/tags`_ for valid values for ``<tag>``)


.. |downloads_strainy| image:: https://img.shields.io/conda/dn/bioconda/strainy.svg?style=flat
   :target: https://anaconda.org/bioconda/strainy
   :alt:   (downloads)
.. |docker_strainy| image:: https://quay.io/repository/biocontainers/strainy/status
   :target: https://quay.io/repository/biocontainers/strainy
.. _`strainy/tags`: https://quay.io/repository/biocontainers/strainy?tab=tags


.. raw:: html

    <script>
        var package = "strainy";
        var versions = ["1.2","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainy/README.html