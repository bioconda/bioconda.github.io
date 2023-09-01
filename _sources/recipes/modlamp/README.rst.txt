:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modlamp'
.. highlight: bash

modlamp
=======

.. conda:recipe:: modlamp
   :replaces_section_title:
   :noindex:

   python package for in silico peptide design and QSAR studies

   :homepage: http://modlamp.org
   :documentation: https://modlamp.org/index.html
   
   :license: BSD / BSD
   :recipe: /`modlamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp/meta.yaml>`_

   


.. conda:package:: modlamp

   |downloads_modlamp| |docker_modlamp|

   :versions:
      
      

      ``4.2.1-0``,  ``4.1.2-0``

      

   
   :depends joblib: ``>=0.15.1``
   :depends lxml: ``>=3.6.4``
   :depends matplotlib-base: ``>=1.5.1``
   :depends mysql-connector-python: ``>=2.2.9``
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.18.1``
   :depends python: 
   :depends requests: ``>=2.11.1``
   :depends scikit-learn: ``>=0.18.0``
   :depends scipy: ``>=0.17.0``
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

      mamba install modlamp

   and update with::

      mamba update modlamp

  To create a new environment, run::

      mamba create --name myenvname modlamp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/modlamp:<tag>

   (see `modlamp/tags`_ for valid values for ``<tag>``)


.. |downloads_modlamp| image:: https://img.shields.io/conda/dn/bioconda/modlamp.svg?style=flat
   :target: https://anaconda.org/bioconda/modlamp
   :alt:   (downloads)
.. |docker_modlamp| image:: https://quay.io/repository/biocontainers/modlamp/status
   :target: https://quay.io/repository/biocontainers/modlamp
.. _`modlamp/tags`: https://quay.io/repository/biocontainers/modlamp?tab=tags


.. raw:: html

    <script>
        var package = "modlamp";
        var versions = ["4.2.1","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modlamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modlamp/README.html