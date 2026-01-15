:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast2-xml'
.. highlight: bash

beast2-xml
==========

.. conda:recipe:: beast2-xml
   :replaces_section_title:
   :noindex:

   Command line script and Python class for generating BEAST2 XML config files.

   :homepage: https://github.com/acorg/beast2-xml
   :license: MIT
   :recipe: /`beast2-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2-xml/meta.yaml>`_

   


.. conda:package:: beast2-xml

   |downloads_beast2-xml| |docker_beast2-xml|

   :versions:
      
      

      ``1.5.0-0``

      

   
   :depends dark-matter: ``>=1.1.28``
   :depends ete3: ``>=3.1.3``
   :depends numpy: ``>=1.10.0``
   :depends pandas: ``>=2.2.2``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends six: ``>=1.16.0``
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

      mamba install beast2-xml

   and update with::

      mamba update beast2-xml

  To create a new environment, run::

      mamba create --name myenvname beast2-xml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beast2-xml:<tag>

   (see `beast2-xml/tags`_ for valid values for ``<tag>``)


.. |downloads_beast2-xml| image:: https://img.shields.io/conda/dn/bioconda/beast2-xml.svg?style=flat
   :target: https://anaconda.org/bioconda/beast2-xml
   :alt:   (downloads)
.. |docker_beast2-xml| image:: https://quay.io/repository/biocontainers/beast2-xml/status
   :target: https://quay.io/repository/biocontainers/beast2-xml
.. _`beast2-xml/tags`: https://quay.io/repository/biocontainers/beast2-xml?tab=tags


.. raw:: html

    <script>
        var package = "beast2-xml";
        var versions = ["1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast2-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast2-xml/README.html