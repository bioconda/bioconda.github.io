:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suppa'
.. highlight: bash

suppa
=====

.. conda:recipe:: suppa
   :replaces_section_title:
   :noindex:

   A tool to study splicing across multiple conditions at high speed and accuracy.

   :homepage: https://github.com/comprna/SUPPA
   :license: MIT / MIT License
   :recipe: /`suppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa/meta.yaml>`_

   


.. conda:package:: suppa

   |downloads_suppa| |docker_suppa|

   :versions:
      
      

      ``2.3-2``,  ``2.3-1``,  ``2.3-0``

      

   
   :depends numpy: ``>=1.11.0``
   :depends pandas: ``>=0.18.0``
   :depends python: ``>=3``
   :depends scikit-learn: ``>=0.16.1``
   :depends scipy: ``>=0.15.1``
   :depends statsmodels: ``>=0.6.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install suppa

   and update with::

      mamba update suppa

  To create a new environment, run::

      mamba create --name myenvname suppa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/suppa:<tag>

   (see `suppa/tags`_ for valid values for ``<tag>``)


.. |downloads_suppa| image:: https://img.shields.io/conda/dn/bioconda/suppa.svg?style=flat
   :target: https://anaconda.org/bioconda/suppa
   :alt:   (downloads)
.. |docker_suppa| image:: https://quay.io/repository/biocontainers/suppa/status
   :target: https://quay.io/repository/biocontainers/suppa
.. _`suppa/tags`: https://quay.io/repository/biocontainers/suppa?tab=tags


.. raw:: html

    <script>
        var package = "suppa";
        var versions = ["2.3","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suppa/README.html