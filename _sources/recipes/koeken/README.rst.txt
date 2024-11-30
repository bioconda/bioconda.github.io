:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'koeken'
.. highlight: bash

koeken
======

.. conda:recipe:: koeken
   :replaces_section_title:
   :noindex:

   A Linear Discriminant Analysis \(LEfSe\) wrapper.

   :homepage: https://github.com/twbattaglia/koeken
   :license: MIT / MIT
   :recipe: /`koeken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken/meta.yaml>`_

   


.. conda:package:: koeken

   |downloads_koeken| |docker_koeken|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends biopython: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends qiime: 
   :depends r-coin: 
   :depends r-gtools: 
   :depends r-klar: 
   :depends r-mass: 
   :depends r-modeltools: 
   :depends r-mvtnorm: 
   :depends r-optparse: 
   :depends r-survival: 
   :depends rpy2: 
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

      mamba install koeken

   and update with::

      mamba update koeken

  To create a new environment, run::

      mamba create --name myenvname koeken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/koeken:<tag>

   (see `koeken/tags`_ for valid values for ``<tag>``)


.. |downloads_koeken| image:: https://img.shields.io/conda/dn/bioconda/koeken.svg?style=flat
   :target: https://anaconda.org/bioconda/koeken
   :alt:   (downloads)
.. |docker_koeken| image:: https://quay.io/repository/biocontainers/koeken/status
   :target: https://quay.io/repository/biocontainers/koeken
.. _`koeken/tags`: https://quay.io/repository/biocontainers/koeken?tab=tags


.. raw:: html

    <script>
        var package = "koeken";
        var versions = ["0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/koeken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/koeken/README.html