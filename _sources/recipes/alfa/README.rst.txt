:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alfa'
.. highlight: bash

alfa
====

.. conda:recipe:: alfa
   :replaces_section_title:
   :noindex:

   A simple software to get a quick overview of features composing NGS dataset\(s\).

   :homepage: https://github.com/biocompibens/ALFA
   :license: MIT / MIT
   :recipe: /`alfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfa/meta.yaml>`_

   


.. conda:package:: alfa

   |downloads_alfa| |docker_alfa|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends matplotlib-base: ``>=3.0``
   :depends numpy: ``>=1.15``
   :depends progressbar2: ``>=3.37``
   :depends pybedtools: ``>=0.8``
   :depends pysam: ``>=0.15``
   :depends python: 
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

      mamba install alfa

   and update with::

      mamba update alfa

  To create a new environment, run::

      mamba create --name myenvname alfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alfa:<tag>

   (see `alfa/tags`_ for valid values for ``<tag>``)


.. |downloads_alfa| image:: https://img.shields.io/conda/dn/bioconda/alfa.svg?style=flat
   :target: https://anaconda.org/bioconda/alfa
   :alt:   (downloads)
.. |docker_alfa| image:: https://quay.io/repository/biocontainers/alfa/status
   :target: https://quay.io/repository/biocontainers/alfa
.. _`alfa/tags`: https://quay.io/repository/biocontainers/alfa?tab=tags


.. raw:: html

    <script>
        var package = "alfa";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alfa/README.html