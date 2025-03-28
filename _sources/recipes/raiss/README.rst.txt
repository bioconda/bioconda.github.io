:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raiss'
.. highlight: bash

raiss
=====

.. conda:recipe:: raiss
   :replaces_section_title:
   :noindex:

   SNP summary statistics imputation package

   :homepage: http://statistical-genetics.pages.pasteur.fr/raiss/
   :license: MIT / MIT
   :recipe: /`raiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raiss/meta.yaml>`_

   


.. conda:package:: raiss

   |downloads_raiss| |docker_raiss|

   :versions:
      
      

      ``4.0.1-0``,  ``4.0-0``,  ``3.1-0``,  ``3.0-0``,  ``2.0-0``,  ``1.0-0``

      

   
   :depends joblib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends pytz: 
   :depends scipy: ``>=1.7.0``
   :depends six: 
   :depends tzdata: 
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

      mamba install raiss

   and update with::

      mamba update raiss

  To create a new environment, run::

      mamba create --name myenvname raiss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/raiss:<tag>

   (see `raiss/tags`_ for valid values for ``<tag>``)


.. |downloads_raiss| image:: https://img.shields.io/conda/dn/bioconda/raiss.svg?style=flat
   :target: https://anaconda.org/bioconda/raiss
   :alt:   (downloads)
.. |docker_raiss| image:: https://quay.io/repository/biocontainers/raiss/status
   :target: https://quay.io/repository/biocontainers/raiss
.. _`raiss/tags`: https://quay.io/repository/biocontainers/raiss?tab=tags


.. raw:: html

    <script>
        var package = "raiss";
        var versions = ["4.0.1","4.0","3.1","3.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raiss/README.html