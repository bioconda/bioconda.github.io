:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxyxml'
.. highlight: bash

galaxyxml
=========

.. conda:recipe:: galaxyxml
   :replaces_section_title:
   :noindex:

   Galaxy XML generation library

   :homepage: https://github.com/hexylena/galaxyxml/
   :license: APACHE / Apache-2.0
   :recipe: /`galaxyxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxyxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxyxml/meta.yaml>`_

   


.. conda:package:: galaxyxml

   |downloads_galaxyxml| |docker_galaxyxml|

   :versions:
      
      

      ``0.5.3-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-1``,  ``0.4.9-0``,  ``0.4.8-0``

      

   
   :depends galaxy-tool-util: 
   :depends lxml: 
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

      mamba install galaxyxml

   and update with::

      mamba update galaxyxml

  To create a new environment, run::

      mamba create --name myenvname galaxyxml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxyxml:<tag>

   (see `galaxyxml/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxyxml| image:: https://img.shields.io/conda/dn/bioconda/galaxyxml.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxyxml
   :alt:   (downloads)
.. |docker_galaxyxml| image:: https://quay.io/repository/biocontainers/galaxyxml/status
   :target: https://quay.io/repository/biocontainers/galaxyxml
.. _`galaxyxml/tags`: https://quay.io/repository/biocontainers/galaxyxml?tab=tags


.. raw:: html

    <script>
        var package = "galaxyxml";
        var versions = ["0.5.3","0.4.14","0.4.13","0.4.12","0.4.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxyxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxyxml/README.html