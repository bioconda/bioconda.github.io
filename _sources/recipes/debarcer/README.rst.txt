:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debarcer'
.. highlight: bash

debarcer
========

.. conda:recipe:: debarcer
   :replaces_section_title:
   :noindex:

   A package for De\-Barcoding and Error Correction of sequencing data containing molecular barcodes.

   :homepage: https://github.com/oicr-gsi/debarcer
   :license: MIT
   :recipe: /`debarcer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debarcer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debarcer/meta.yaml>`_

   


.. conda:package:: debarcer

   |downloads_debarcer| |docker_debarcer|

   :versions:
      
      

      ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.1-0``

      

   
   :depends matplotlib-base: ``>=3.1,<=3.3``
   :depends mistune: ``>=0.8,<2``
   :depends networkx: ``2.4.*``
   :depends numpy: ``>=1.14``
   :depends pandas: ``>=0.22``
   :depends pygal: ``>=2.4``
   :depends pysam: ``>=0.14``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.1``
   :depends scipy: ``>=1.1,<=1.2``
   :depends seaborn: ``>=0.9,<=0.10``
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

      mamba install debarcer

   and update with::

      mamba update debarcer

  To create a new environment, run::

      mamba create --name myenvname debarcer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/debarcer:<tag>

   (see `debarcer/tags`_ for valid values for ``<tag>``)


.. |downloads_debarcer| image:: https://img.shields.io/conda/dn/bioconda/debarcer.svg?style=flat
   :target: https://anaconda.org/bioconda/debarcer
   :alt:   (downloads)
.. |docker_debarcer| image:: https://quay.io/repository/biocontainers/debarcer/status
   :target: https://quay.io/repository/biocontainers/debarcer
.. _`debarcer/tags`: https://quay.io/repository/biocontainers/debarcer?tab=tags


.. raw:: html

    <script>
        var package = "debarcer";
        var versions = ["2.1.4","2.1.4","2.1.4","2.1.3","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debarcer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debarcer/README.html