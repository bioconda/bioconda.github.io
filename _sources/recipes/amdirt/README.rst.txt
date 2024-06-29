:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amdirt'
.. highlight: bash

amdirt
======

.. conda:recipe:: amdirt
   :replaces_section_title:
   :noindex:

   AMDirT\: AncientMetagenomeDir Toolkit

   :homepage: https://github.com/SPAAM-community/AMDirT
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`amdirt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amdirt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amdirt/meta.yaml>`_

   


.. conda:package:: amdirt

   |downloads_amdirt| |docker_amdirt|

   :versions:
      
      

      ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``

      

   
   :depends click: 
   :depends colorlog: 
   :depends defusedxml: 
   :depends jsonschema: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends rich: 
   :depends streamlit: 
   :depends streamlit-aggrid: 
   :depends tabulate: 
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

      mamba install amdirt

   and update with::

      mamba update amdirt

  To create a new environment, run::

      mamba create --name myenvname amdirt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amdirt:<tag>

   (see `amdirt/tags`_ for valid values for ``<tag>``)


.. |downloads_amdirt| image:: https://img.shields.io/conda/dn/bioconda/amdirt.svg?style=flat
   :target: https://anaconda.org/bioconda/amdirt
   :alt:   (downloads)
.. |docker_amdirt| image:: https://quay.io/repository/biocontainers/amdirt/status
   :target: https://quay.io/repository/biocontainers/amdirt
.. _`amdirt/tags`: https://quay.io/repository/biocontainers/amdirt?tab=tags


.. raw:: html

    <script>
        var package = "amdirt";
        var versions = ["1.6.1","1.6.0","1.5.0","1.5.0","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amdirt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amdirt/README.html