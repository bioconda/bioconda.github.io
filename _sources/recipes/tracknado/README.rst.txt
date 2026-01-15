:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracknado'
.. highlight: bash

tracknado
=========

.. conda:recipe:: tracknado
   :replaces_section_title:
   :noindex:

   CLI library to generate UCSC trackhubs from sequencing data

   :homepage: https://pypi.org/project/tracknado/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tracknado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracknado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracknado/meta.yaml>`_

   


.. conda:package:: tracknado

   |downloads_tracknado| |docker_tracknado|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends click: 
   :depends cookiecutter: 
   :depends loguru: 
   :depends pandas: 
   :depends pandera: ``>=0.18``
   :depends pillow: 
   :depends pydantic: ``>=2.0``
   :depends python: ``>=3.7``
   :depends seaborn: 
   :depends trackhub: 
   :depends typer: 
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

      mamba install tracknado

   and update with::

      mamba update tracknado

  To create a new environment, run::

      mamba create --name myenvname tracknado

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tracknado:<tag>

   (see `tracknado/tags`_ for valid values for ``<tag>``)


.. |downloads_tracknado| image:: https://img.shields.io/conda/dn/bioconda/tracknado.svg?style=flat
   :target: https://anaconda.org/bioconda/tracknado
   :alt:   (downloads)
.. |docker_tracknado| image:: https://quay.io/repository/biocontainers/tracknado/status
   :target: https://quay.io/repository/biocontainers/tracknado
.. _`tracknado/tags`: https://quay.io/repository/biocontainers/tracknado?tab=tags


.. raw:: html

    <script>
        var package = "tracknado";
        var versions = ["0.3.0","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracknado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracknado/README.html