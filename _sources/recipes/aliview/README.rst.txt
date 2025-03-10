:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aliview'
.. highlight: bash

aliview
=======

.. conda:recipe:: aliview
   :replaces_section_title:
   :noindex:

   AliView is an intuitive and fast alignment viewer and editor for DNA and amino acid sequences.

   :homepage: https://ormbunkar.se/aliview/
   :developer docs: https://github.com/AliView/AliView
   :license: GPL-3.0-or-later
   :recipe: /`aliview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aliview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aliview/meta.yaml>`_

   


.. conda:package:: aliview

   |downloads_aliview| |docker_aliview|

   :versions:
      
      

      ``1.30-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install aliview

   and update with::

      mamba update aliview

  To create a new environment, run::

      mamba create --name myenvname aliview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aliview:<tag>

   (see `aliview/tags`_ for valid values for ``<tag>``)


.. |downloads_aliview| image:: https://img.shields.io/conda/dn/bioconda/aliview.svg?style=flat
   :target: https://anaconda.org/bioconda/aliview
   :alt:   (downloads)
.. |docker_aliview| image:: https://quay.io/repository/biocontainers/aliview/status
   :target: https://quay.io/repository/biocontainers/aliview
.. _`aliview/tags`: https://quay.io/repository/biocontainers/aliview?tab=tags


.. raw:: html

    <script>
        var package = "aliview";
        var versions = ["1.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aliview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aliview/README.html