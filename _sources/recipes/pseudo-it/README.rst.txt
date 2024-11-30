:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pseudo-it'
.. highlight: bash

pseudo-it
=========

.. conda:recipe:: pseudo-it
   :replaces_section_title:
   :noindex:

   Reference\-based genome assembly with iterative mapping

   :homepage: https://github.com/goodest-goodlab/pseudo-it
   :license: GPL / GNU GPLv3
   :recipe: /`pseudo-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseudo-it>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseudo-it/meta.yaml>`_

   Reference\-based genome assembly with iterative mapping


.. conda:package:: pseudo-it

   |downloads_pseudo-it| |docker_pseudo-it|

   :versions:
      
      

      ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends bwa: 
   :depends gatk4: 
   :depends picard: 
   :depends python: ``>=3.10``
   :depends samtools: 
   :depends sed: 
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

      mamba install pseudo-it

   and update with::

      mamba update pseudo-it

  To create a new environment, run::

      mamba create --name myenvname pseudo-it

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pseudo-it:<tag>

   (see `pseudo-it/tags`_ for valid values for ``<tag>``)


.. |downloads_pseudo-it| image:: https://img.shields.io/conda/dn/bioconda/pseudo-it.svg?style=flat
   :target: https://anaconda.org/bioconda/pseudo-it
   :alt:   (downloads)
.. |docker_pseudo-it| image:: https://quay.io/repository/biocontainers/pseudo-it/status
   :target: https://quay.io/repository/biocontainers/pseudo-it
.. _`pseudo-it/tags`: https://quay.io/repository/biocontainers/pseudo-it?tab=tags


.. raw:: html

    <script>
        var package = "pseudo-it";
        var versions = ["3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pseudo-it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pseudo-it/README.html