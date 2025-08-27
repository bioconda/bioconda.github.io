:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ale'
.. highlight: bash

ale
===

.. conda:recipe:: ale
   :replaces_section_title:
   :noindex:

   ALE\: Assembly Likelihood Estimator

   :homepage: https://github.com/sc932/ALE
   :license: NCSA
   :recipe: /`ale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale/meta.yaml>`_

   


.. conda:package:: ale

   |downloads_ale| |docker_ale|

   :versions:
      
      

      ``20180904-0``,  ``20160127-1``,  ``20160127-0``

      

   
   :depends matplotlib: 
   :depends mpmath: 
   :depends pymix: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends samtools: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install ale

   and update with::

      mamba update ale

  To create a new environment, run::

      mamba create --name myenvname ale

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ale:<tag>

   (see `ale/tags`_ for valid values for ``<tag>``)


.. |downloads_ale| image:: https://img.shields.io/conda/dn/bioconda/ale.svg?style=flat
   :target: https://anaconda.org/bioconda/ale
   :alt:   (downloads)
.. |docker_ale| image:: https://quay.io/repository/biocontainers/ale/status
   :target: https://quay.io/repository/biocontainers/ale
.. _`ale/tags`: https://quay.io/repository/biocontainers/ale?tab=tags


.. raw:: html

    <script>
        var package = "ale";
        var versions = ["20180904","20160127","20160127"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ale/README.html