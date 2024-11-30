:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabview'
.. highlight: bash

tabview
=======

.. conda:recipe:: tabview
   :replaces_section_title:
   :noindex:

   A curses command\-line CSV and list \(tabular data\) viewer

   :homepage: https://github.com/firecat53/tabview
   :license: MIT License
   :recipe: /`tabview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview/meta.yaml>`_

   


.. conda:package:: tabview

   |downloads_tabview| |docker_tabview|

   :versions:
      
      

      ``1.4.3-0``,  ``1.4.2-2``,  ``1.4.2-1``

      

   
   :depends ncurses: ``>=6.1,<6.2.0a0``
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

      mamba install tabview

   and update with::

      mamba update tabview

  To create a new environment, run::

      mamba create --name myenvname tabview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tabview:<tag>

   (see `tabview/tags`_ for valid values for ``<tag>``)


.. |downloads_tabview| image:: https://img.shields.io/conda/dn/bioconda/tabview.svg?style=flat
   :target: https://anaconda.org/bioconda/tabview
   :alt:   (downloads)
.. |docker_tabview| image:: https://quay.io/repository/biocontainers/tabview/status
   :target: https://quay.io/repository/biocontainers/tabview
.. _`tabview/tags`: https://quay.io/repository/biocontainers/tabview?tab=tags


.. raw:: html

    <script>
        var package = "tabview";
        var versions = ["1.4.3","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabview/README.html