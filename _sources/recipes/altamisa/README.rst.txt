:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'altamisa'
.. highlight: bash

altamisa
========

.. conda:recipe:: altamisa
   :replaces_section_title:
   :noindex:

   Alternative Python API for accessing ISA\-tab files.

   :homepage: https://github.com/bihealth/altamisa
   :license: MIT / MIT
   :recipe: /`altamisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altamisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altamisa/meta.yaml>`_

   


.. conda:package:: altamisa

   |downloads_altamisa| |docker_altamisa|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends attrs: 
   :depends python: ``>=3``
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

      mamba install altamisa

   and update with::

      mamba update altamisa

  To create a new environment, run::

      mamba create --name myenvname altamisa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/altamisa:<tag>

   (see `altamisa/tags`_ for valid values for ``<tag>``)


.. |downloads_altamisa| image:: https://img.shields.io/conda/dn/bioconda/altamisa.svg?style=flat
   :target: https://anaconda.org/bioconda/altamisa
   :alt:   (downloads)
.. |docker_altamisa| image:: https://quay.io/repository/biocontainers/altamisa/status
   :target: https://quay.io/repository/biocontainers/altamisa
.. _`altamisa/tags`: https://quay.io/repository/biocontainers/altamisa?tab=tags


.. raw:: html

    <script>
        var package = "altamisa";
        var versions = ["0.2.9","0.2.8","0.2.6","0.2.5","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/altamisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/altamisa/README.html