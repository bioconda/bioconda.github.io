:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'triqler'
.. highlight: bash

triqler
=======

.. conda:recipe:: triqler
   :replaces_section_title:
   :noindex:

   A combined identification and quantification error model of label\-free protein quantification

   :homepage: https://github.com/statisticalbiotechnology/triqler
   :license: APACHE / Apache Software
   :recipe: /`triqler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triqler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triqler/meta.yaml>`_

   


.. conda:package:: triqler

   |downloads_triqler| |docker_triqler|

   :versions:
      
      

      ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends numpy: ``>=1.12``
   :depends python: 
   :depends scipy: ``>=0.17``
   :depends threadpoolctl: ``>=1.0``
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

      mamba install triqler

   and update with::

      mamba update triqler

  To create a new environment, run::

      mamba create --name myenvname triqler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/triqler:<tag>

   (see `triqler/tags`_ for valid values for ``<tag>``)


.. |downloads_triqler| image:: https://img.shields.io/conda/dn/bioconda/triqler.svg?style=flat
   :target: https://anaconda.org/bioconda/triqler
   :alt:   (downloads)
.. |docker_triqler| image:: https://quay.io/repository/biocontainers/triqler/status
   :target: https://quay.io/repository/biocontainers/triqler
.. _`triqler/tags`: https://quay.io/repository/biocontainers/triqler?tab=tags


.. raw:: html

    <script>
        var package = "triqler";
        var versions = ["0.6.2","0.6.1","0.6.0","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triqler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triqler/README.html