:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fings'
.. highlight: bash

fings
=====

.. conda:recipe:: fings
   :replaces_section_title:
   :noindex:

   Filters for Next Generation Sequencing

   :homepage: https://github.com/cpwardell/FiNGS
   :license: APACHE / Apache Software
   :recipe: /`fings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fings/meta.yaml>`_

   


.. conda:package:: fings

   |downloads_fings| |docker_fings|

   :versions:
      
      

      ``1.7.1-0``,  ``1.6.8-0``,  ``1.6.7-0``

      

   
   :depends editdistance: 
   :depends joblib: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends pyvcf: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
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

      mamba install fings

   and update with::

      mamba update fings

  To create a new environment, run::

      mamba create --name myenvname fings

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fings:<tag>

   (see `fings/tags`_ for valid values for ``<tag>``)


.. |downloads_fings| image:: https://img.shields.io/conda/dn/bioconda/fings.svg?style=flat
   :target: https://anaconda.org/bioconda/fings
   :alt:   (downloads)
.. |docker_fings| image:: https://quay.io/repository/biocontainers/fings/status
   :target: https://quay.io/repository/biocontainers/fings
.. _`fings/tags`: https://quay.io/repository/biocontainers/fings?tab=tags


.. raw:: html

    <script>
        var package = "fings";
        var versions = ["1.7.1","1.6.8","1.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fings/README.html