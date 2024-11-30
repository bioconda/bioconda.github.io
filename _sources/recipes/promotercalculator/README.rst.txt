:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'promotercalculator'
.. highlight: bash

promotercalculator
==================

.. conda:recipe:: promotercalculator
   :replaces_section_title:
   :noindex:

   Promoter\-Calculator \(Barrick Lab Fork\)

   :homepage: https://github.com/barricklab/promoter-calculator
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`promotercalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/promotercalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/promotercalculator/meta.yaml>`_

   


.. conda:package:: promotercalculator

   |downloads_promotercalculator| |docker_promotercalculator|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install promotercalculator

   and update with::

      mamba update promotercalculator

  To create a new environment, run::

      mamba create --name myenvname promotercalculator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/promotercalculator:<tag>

   (see `promotercalculator/tags`_ for valid values for ``<tag>``)


.. |downloads_promotercalculator| image:: https://img.shields.io/conda/dn/bioconda/promotercalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/promotercalculator
   :alt:   (downloads)
.. |docker_promotercalculator| image:: https://quay.io/repository/biocontainers/promotercalculator/status
   :target: https://quay.io/repository/biocontainers/promotercalculator
.. _`promotercalculator/tags`: https://quay.io/repository/biocontainers/promotercalculator?tab=tags


.. raw:: html

    <script>
        var package = "promotercalculator";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/promotercalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/promotercalculator/README.html