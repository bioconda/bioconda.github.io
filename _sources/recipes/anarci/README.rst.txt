:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anarci'
.. highlight: bash

anarci
======

.. conda:recipe:: anarci
   :replaces_section_title:
   :noindex:

   ANARCI\: Antibody Numbering and Antigen Receptor ClassIfication

   :homepage: http://opig.stats.ox.ac.uk/webapps/newsabdab/sabpred/anarci/
   :license: BSD / BSD-3-Clause
   :recipe: /`anarci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci/meta.yaml>`_

   


.. conda:package:: anarci

   |downloads_anarci| |docker_anarci|

   :versions:
      
      

      ``2021.02.04-0``,  ``2020.04.23-3``,  ``2020.04.23-2``,  ``2020.04.23-1``,  ``2020.04.23-0``

      

   
   :depends biopython: 
   :depends hmmer: ``>=3.1``
   :depends python: 
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

      mamba install anarci

   and update with::

      mamba update anarci

  To create a new environment, run::

      mamba create --name myenvname anarci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anarci:<tag>

   (see `anarci/tags`_ for valid values for ``<tag>``)


.. |downloads_anarci| image:: https://img.shields.io/conda/dn/bioconda/anarci.svg?style=flat
   :target: https://anaconda.org/bioconda/anarci
   :alt:   (downloads)
.. |docker_anarci| image:: https://quay.io/repository/biocontainers/anarci/status
   :target: https://quay.io/repository/biocontainers/anarci
.. _`anarci/tags`: https://quay.io/repository/biocontainers/anarci?tab=tags


.. raw:: html

    <script>
        var package = "anarci";
        var versions = ["2021.02.04","2020.04.23","2020.04.23","2020.04.23","2020.04.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anarci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anarci/README.html