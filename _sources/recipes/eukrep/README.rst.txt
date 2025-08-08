:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukrep'
.. highlight: bash

eukrep
======

.. conda:recipe:: eukrep
   :replaces_section_title:
   :noindex:

   Classification of Eukaryotic and Prokaryotic sequences from metagenomic datasets

   :homepage: https://github.com/patrickwest/EukRep
   :license: MIT / MIT
   :recipe: /`eukrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukrep/meta.yaml>`_

   


.. conda:package:: eukrep

   |downloads_eukrep| |docker_eukrep|

   :versions:
      
      

      ``0.6.7-3``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``

      

   
   :depends biopython: 
   :depends kpal: 
   :depends libgfortran: ``3.0.0.*``
   :depends numpy: 
   :depends python: 
   :depends scikit-learn: ``0.19.2.*``
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

      mamba install eukrep

   and update with::

      mamba update eukrep

  To create a new environment, run::

      mamba create --name myenvname eukrep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eukrep:<tag>

   (see `eukrep/tags`_ for valid values for ``<tag>``)


.. |downloads_eukrep| image:: https://img.shields.io/conda/dn/bioconda/eukrep.svg?style=flat
   :target: https://anaconda.org/bioconda/eukrep
   :alt:   (downloads)
.. |docker_eukrep| image:: https://quay.io/repository/biocontainers/eukrep/status
   :target: https://quay.io/repository/biocontainers/eukrep
.. _`eukrep/tags`: https://quay.io/repository/biocontainers/eukrep?tab=tags


.. raw:: html

    <script>
        var package = "eukrep";
        var versions = ["0.6.7","0.6.7","0.6.7","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukrep/README.html