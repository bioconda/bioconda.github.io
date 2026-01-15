:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bsaseq'
.. highlight: bash

bsaseq
======

.. conda:recipe:: bsaseq
   :replaces_section_title:
   :noindex:

   Bulk Segregant Analysis for QTL mapping from pooled whole\-genome sequencing

   :homepage: https://github.com/rcac-bioinformatics/bsaseq
   :license: MIT
   :recipe: /`bsaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsaseq/meta.yaml>`_

   


.. conda:package:: bsaseq

   |downloads_bsaseq| |docker_bsaseq|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends click: ``>=8.0.0``
   :depends cyvcf2: ``>=0.30.0``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.4.0``
   :depends python: ``>=3.9,<3.14``
   :depends rich: ``>=12.0.0``
   :depends scipy: ``>=1.7.0``
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

      mamba install bsaseq

   and update with::

      mamba update bsaseq

  To create a new environment, run::

      mamba create --name myenvname bsaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bsaseq:<tag>

   (see `bsaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bsaseq| image:: https://img.shields.io/conda/dn/bioconda/bsaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bsaseq
   :alt:   (downloads)
.. |docker_bsaseq| image:: https://quay.io/repository/biocontainers/bsaseq/status
   :target: https://quay.io/repository/biocontainers/bsaseq
.. _`bsaseq/tags`: https://quay.io/repository/biocontainers/bsaseq?tab=tags


.. raw:: html

    <script>
        var package = "bsaseq";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bsaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bsaseq/README.html