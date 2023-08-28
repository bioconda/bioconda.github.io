:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longstitch'
.. highlight: bash

longstitch
==========

.. conda:recipe:: longstitch
   :replaces_section_title:
   :noindex:

   A genome assembly correction and scaffolding pipeline using long reads

   :homepage: https://bcgsc.ca/resources/software/longstitch
   :documentation: https://github.com/bcgsc/longstitch
   
   :license: GPL-3.0
   :recipe: /`longstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2021.06.17.448848`

   


.. conda:package:: longstitch

   |downloads_longstitch| |docker_longstitch|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends arcs: ``>=1.2.2``
   :depends links: ``1.8.7``
   :depends make: 
   :depends ntlink: 
   :depends python: 
   :depends samtools: 
   :depends tigmint: ``>=1.2.4``
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

      mamba install longstitch

   and update with::

      mamba update longstitch

  To create a new environment, run::

      mamba create --name myenvname longstitch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longstitch:<tag>

   (see `longstitch/tags`_ for valid values for ``<tag>``)


.. |downloads_longstitch| image:: https://img.shields.io/conda/dn/bioconda/longstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/longstitch
   :alt:   (downloads)
.. |docker_longstitch| image:: https://quay.io/repository/biocontainers/longstitch/status
   :target: https://quay.io/repository/biocontainers/longstitch
.. _`longstitch/tags`: https://quay.io/repository/biocontainers/longstitch?tab=tags


.. raw:: html

    <script>
        var package = "longstitch";
        var versions = ["1.0.5","1.0.4","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longstitch/README.html