:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'td2'
.. highlight: bash

td2
===

.. conda:recipe:: td2
   :replaces_section_title:
   :noindex:

   TD2\: a tool to find protein coding regions in transcripts.

   :homepage: https://github.com/Markusjsommer/TD2
   :license: MIT / MIT
   :recipe: /`td2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/td2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/td2/meta.yaml>`_

   


.. conda:package:: td2

   |downloads_td2| |docker_td2|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends numpy: ``>=1.24.4,<2``
   :depends pandas: ``>=2.0.3``
   :depends psauron: ``>=1.0.5``
   :depends psutil: 
   :depends python: ``>=3.9,<3.13``
   :depends pytorch: ``>=2.1.2``
   :depends scipy: ``>=1.10.1``
   :depends setuptools: ``<81``
   :depends torchaudio: ``>=2.1.2``
   :depends torchvision: ``>=0.16.2``
   :depends tqdm: ``>=4.66.1``
   :depends typing_extensions: ``>=4.9.0``
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

      mamba install td2

   and update with::

      mamba update td2

  To create a new environment, run::

      mamba create --name myenvname td2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/td2:<tag>

   (see `td2/tags`_ for valid values for ``<tag>``)


.. |downloads_td2| image:: https://img.shields.io/conda/dn/bioconda/td2.svg?style=flat
   :target: https://anaconda.org/bioconda/td2
   :alt:   (downloads)
.. |docker_td2| image:: https://quay.io/repository/biocontainers/td2/status
   :target: https://quay.io/repository/biocontainers/td2
.. _`td2/tags`: https://quay.io/repository/biocontainers/td2?tab=tags


.. raw:: html

    <script>
        var package = "td2";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/td2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/td2/README.html