:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kounta'
.. highlight: bash

kounta
======

.. conda:recipe:: kounta
   :replaces_section_title:
   :noindex:

   Generate multi\-sample k\-mer count matrix

   :homepage: https://github.com/tseemann/kounta
   :license: GPL-3.0
   :recipe: /`kounta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kounta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kounta/meta.yaml>`_

   


.. conda:package:: kounta

   |downloads_kounta| |docker_kounta|

   :versions:
      
      

      ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.0-0``

      

   
   :depends coreutils: 
   :depends kmc: ``>=3.1``
   :depends parallel: 
   :depends perl: ``>=5.26``
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

      mamba install kounta

   and update with::

      mamba update kounta

  To create a new environment, run::

      mamba create --name myenvname kounta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kounta:<tag>

   (see `kounta/tags`_ for valid values for ``<tag>``)


.. |downloads_kounta| image:: https://img.shields.io/conda/dn/bioconda/kounta.svg?style=flat
   :target: https://anaconda.org/bioconda/kounta
   :alt:   (downloads)
.. |docker_kounta| image:: https://quay.io/repository/biocontainers/kounta/status
   :target: https://quay.io/repository/biocontainers/kounta
.. _`kounta/tags`: https://quay.io/repository/biocontainers/kounta?tab=tags


.. raw:: html

    <script>
        var package = "kounta";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kounta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kounta/README.html