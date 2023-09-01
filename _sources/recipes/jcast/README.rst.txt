:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcast'
.. highlight: bash

jcast
=====

.. conda:recipe:: jcast
   :replaces_section_title:
   :noindex:

   Jcast retrieves splice junction information and translates into amino acids

   :homepage: https://github.com/ed-lau/jcast
   :license: MIT / MIT
   :recipe: /`jcast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcast/meta.yaml>`_

   


.. conda:package:: jcast

   |downloads_jcast| |docker_jcast|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends biopython: ``>=1.78``
   :depends gtfparse: ``>=1.2.1``
   :depends matplotlib-base: ``>=3.4.2``
   :depends pandas: ``>=1.3.0``
   :depends pomegranate: ``>=0.13``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.24.0``
   :depends scikit-learn: ``>=0.24.2``
   :depends tqdm: ``>=4.61.2``
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

      mamba install jcast

   and update with::

      mamba update jcast

  To create a new environment, run::

      mamba create --name myenvname jcast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jcast:<tag>

   (see `jcast/tags`_ for valid values for ``<tag>``)


.. |downloads_jcast| image:: https://img.shields.io/conda/dn/bioconda/jcast.svg?style=flat
   :target: https://anaconda.org/bioconda/jcast
   :alt:   (downloads)
.. |docker_jcast| image:: https://quay.io/repository/biocontainers/jcast/status
   :target: https://quay.io/repository/biocontainers/jcast
.. _`jcast/tags`: https://quay.io/repository/biocontainers/jcast?tab=tags


.. raw:: html

    <script>
        var package = "jcast";
        var versions = ["0.3.5","0.3.4","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcast/README.html