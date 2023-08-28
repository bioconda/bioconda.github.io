:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rubic'
.. highlight: bash

r-rubic
=======

.. conda:recipe:: r-rubic
   :replaces_section_title:
   :noindex:

   RUBIC detects recurrent copy number aberrations using copy number breaks\, rather than recurrently amplified or deleted regions. This allows for a vastly simplified approach as recursive peak splitting procedures and repeated re\-estimation of the background model are avoided. Furthermore\, the false discovery rate is controlled on the level of called regions\, rather than at the probe level.

   :homepage: http://ccb.nki.nl/software/
   :license: Apache-2.0
   :recipe: /`r-rubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic/meta.yaml>`_

   


.. conda:package:: r-rubic

   |downloads_r-rubic| |docker_r-rubic|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>1.9.6``
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-gtable: 
   :depends r-pracma: 
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

      mamba install r-rubic

   and update with::

      mamba update r-rubic

  To create a new environment, run::

      mamba create --name myenvname r-rubic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rubic:<tag>

   (see `r-rubic/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rubic| image:: https://img.shields.io/conda/dn/bioconda/r-rubic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rubic
   :alt:   (downloads)
.. |docker_r-rubic| image:: https://quay.io/repository/biocontainers/r-rubic/status
   :target: https://quay.io/repository/biocontainers/r-rubic
.. _`r-rubic/tags`: https://quay.io/repository/biocontainers/r-rubic?tab=tags


.. raw:: html

    <script>
        var package = "r-rubic";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rubic/README.html