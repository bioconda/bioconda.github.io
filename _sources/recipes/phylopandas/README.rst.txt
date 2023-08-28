:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylopandas'
.. highlight: bash

phylopandas
===========

.. conda:recipe:: phylopandas
   :replaces_section_title:
   :noindex:

   Pandas for phylogenetics

   :homepage: https://github.com/Zsailer/phylopandas
   :license: MIT / MIT
   :recipe: /`phylopandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas/meta.yaml>`_

   


.. conda:package:: phylopandas

   |downloads_phylopandas| |docker_phylopandas|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends biopython: 
   :depends dendropy: 
   :depends pandas: 
   :depends pandas-flavor: 
   :depends python: ``>3``
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

      mamba install phylopandas

   and update with::

      mamba update phylopandas

  To create a new environment, run::

      mamba create --name myenvname phylopandas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylopandas:<tag>

   (see `phylopandas/tags`_ for valid values for ``<tag>``)


.. |downloads_phylopandas| image:: https://img.shields.io/conda/dn/bioconda/phylopandas.svg?style=flat
   :target: https://anaconda.org/bioconda/phylopandas
   :alt:   (downloads)
.. |docker_phylopandas| image:: https://quay.io/repository/biocontainers/phylopandas/status
   :target: https://quay.io/repository/biocontainers/phylopandas
.. _`phylopandas/tags`: https://quay.io/repository/biocontainers/phylopandas?tab=tags


.. raw:: html

    <script>
        var package = "phylopandas";
        var versions = ["0.8.0","0.7.4","0.7.3","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylopandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylopandas/README.html