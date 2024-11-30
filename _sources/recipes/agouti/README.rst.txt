:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agouti'
.. highlight: bash

agouti
======

.. conda:recipe:: agouti
   :replaces_section_title:
   :noindex:

   Annotation of Genomic and Transcriptomic Intervals

   :homepage: https://github.com/zywicki-lab/agouti
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`agouti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agouti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agouti/meta.yaml>`_

   


.. conda:package:: agouti

   |downloads_agouti| |docker_agouti|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends numpy: ``>=1.16``
   :depends pandas: 
   :depends python: ``>=3.7,<3.10``
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

      mamba install agouti

   and update with::

      mamba update agouti

  To create a new environment, run::

      mamba create --name myenvname agouti

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agouti:<tag>

   (see `agouti/tags`_ for valid values for ``<tag>``)


.. |downloads_agouti| image:: https://img.shields.io/conda/dn/bioconda/agouti.svg?style=flat
   :target: https://anaconda.org/bioconda/agouti
   :alt:   (downloads)
.. |docker_agouti| image:: https://quay.io/repository/biocontainers/agouti/status
   :target: https://quay.io/repository/biocontainers/agouti
.. _`agouti/tags`: https://quay.io/repository/biocontainers/agouti?tab=tags


.. raw:: html

    <script>
        var package = "agouti";
        var versions = ["1.0.3","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agouti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agouti/README.html