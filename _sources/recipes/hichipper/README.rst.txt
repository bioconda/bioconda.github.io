:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hichipper'
.. highlight: bash

hichipper
=========

.. conda:recipe:: hichipper
   :replaces_section_title:
   :noindex:

   Processing HiChIP data into loops.

   :homepage: https://github.com/aryeelab/hichipper
   :license: BSD / BSD License
   :recipe: /`hichipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hichipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hichipper/meta.yaml>`_

   


.. conda:package:: hichipper

   |downloads_hichipper| |docker_hichipper|

   :versions:
      
      

      ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends click: 
   :depends macs2: 
   :depends numpy: 
   :depends python: ``<3``
   :depends pyyaml: 
   :depends whichcraft: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hichipper

   and update with::

      mamba update hichipper

  To create a new environment, run::

      mamba create --name myenvname hichipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hichipper:<tag>

   (see `hichipper/tags`_ for valid values for ``<tag>``)


.. |downloads_hichipper| image:: https://img.shields.io/conda/dn/bioconda/hichipper.svg?style=flat
   :target: https://anaconda.org/bioconda/hichipper
   :alt:   (downloads)
.. |docker_hichipper| image:: https://quay.io/repository/biocontainers/hichipper/status
   :target: https://quay.io/repository/biocontainers/hichipper
.. _`hichipper/tags`: https://quay.io/repository/biocontainers/hichipper?tab=tags


.. raw:: html

    <script>
        var package = "hichipper";
        var versions = ["0.7.7","0.7.7","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hichipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hichipper/README.html