:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtea'
.. highlight: bash

xtea
====

.. conda:recipe:: xtea
   :replaces_section_title:
   :noindex:

   TE insertion caller for both short and long reads

   :homepage: https://github.com/parklab/xTea
   :license: Academic and Non-Commercial Research Use
   :recipe: /`xtea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtea/meta.yaml>`_

   


.. conda:package:: xtea

   |downloads_xtea| |docker_xtea|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.15.0``
   :depends python: 
   :depends samtools: ``>=1.0``
   :depends scikit-learn: ``0.20.0``
   :depends sortedcontainers: 
   :depends wtdbg: 
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

      mamba install xtea

   and update with::

      mamba update xtea

  To create a new environment, run::

      mamba create --name myenvname xtea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xtea:<tag>

   (see `xtea/tags`_ for valid values for ``<tag>``)


.. |downloads_xtea| image:: https://img.shields.io/conda/dn/bioconda/xtea.svg?style=flat
   :target: https://anaconda.org/bioconda/xtea
   :alt:   (downloads)
.. |docker_xtea| image:: https://quay.io/repository/biocontainers/xtea/status
   :target: https://quay.io/repository/biocontainers/xtea
.. _`xtea/tags`: https://quay.io/repository/biocontainers/xtea?tab=tags


.. raw:: html

    <script>
        var package = "xtea";
        var versions = ["0.1.9","0.1.8","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtea/README.html