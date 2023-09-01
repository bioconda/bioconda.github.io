:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macaron'
.. highlight: bash

macaron
=======

.. conda:recipe:: macaron
   :replaces_section_title:
   :noindex:

   Multi\-bAse Codon\-Associated variant Re\-annotatiON

   :homepage: https://github.com/waqasuddinkhan/MACARON-GenMed-LabEx
   :license: LGPL-3
   :recipe: /`macaron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macaron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macaron/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty382`

   


.. conda:package:: macaron

   |downloads_macaron| |docker_macaron|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``,  ``0.7-0``

      

   
   :depends gatk4: 
   :depends python: 
   :depends samtools: 
   :depends snpeff: 
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

      mamba install macaron

   and update with::

      mamba update macaron

  To create a new environment, run::

      mamba create --name myenvname macaron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macaron:<tag>

   (see `macaron/tags`_ for valid values for ``<tag>``)


.. |downloads_macaron| image:: https://img.shields.io/conda/dn/bioconda/macaron.svg?style=flat
   :target: https://anaconda.org/bioconda/macaron
   :alt:   (downloads)
.. |docker_macaron| image:: https://quay.io/repository/biocontainers/macaron/status
   :target: https://quay.io/repository/biocontainers/macaron
.. _`macaron/tags`: https://quay.io/repository/biocontainers/macaron?tab=tags


.. raw:: html

    <script>
        var package = "macaron";
        var versions = ["1.0","1.0","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macaron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macaron/README.html