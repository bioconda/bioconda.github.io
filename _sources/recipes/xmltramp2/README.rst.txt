:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xmltramp2'
.. highlight: bash

xmltramp2
=========

.. conda:recipe:: xmltramp2
   :replaces_section_title:
   :noindex:

   A modern refactoring of the venerable xmltramp application

   :homepage: https://github.com/tBaxter/xmltramp2
   :license: GPL / GNU General Public License v2 (GPLv2)
   :recipe: /`xmltramp2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmltramp2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmltramp2/meta.yaml>`_

   


.. conda:package:: xmltramp2

   |downloads_xmltramp2| |docker_xmltramp2|

   :versions:
      
      

      ``3.1.1-1``,  ``3.1.1-0``

      

   
   :depends python: 
   :depends six: 
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

      mamba install xmltramp2

   and update with::

      mamba update xmltramp2

  To create a new environment, run::

      mamba create --name myenvname xmltramp2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xmltramp2:<tag>

   (see `xmltramp2/tags`_ for valid values for ``<tag>``)


.. |downloads_xmltramp2| image:: https://img.shields.io/conda/dn/bioconda/xmltramp2.svg?style=flat
   :target: https://anaconda.org/bioconda/xmltramp2
   :alt:   (downloads)
.. |docker_xmltramp2| image:: https://quay.io/repository/biocontainers/xmltramp2/status
   :target: https://quay.io/repository/biocontainers/xmltramp2
.. _`xmltramp2/tags`: https://quay.io/repository/biocontainers/xmltramp2?tab=tags


.. raw:: html

    <script>
        var package = "xmltramp2";
        var versions = ["3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmltramp2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmltramp2/README.html