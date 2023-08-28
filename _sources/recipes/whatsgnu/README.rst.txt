:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatsgnu'
.. highlight: bash

whatsgnu
========

.. conda:recipe:: whatsgnu
   :replaces_section_title:
   :noindex:

   WhatsGNU A Tool For Identifying Proteomic Novelty

   :homepage: https://github.com/ahmedmagds/WhatsGNU
   :license: GPL / GPLv3
   :recipe: /`whatsgnu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu/meta.yaml>`_

   


.. conda:package:: whatsgnu

   |downloads_whatsgnu| |docker_whatsgnu|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends matplotlib-base: ``>=3.0.2``
   :depends numpy: ``>=1.15.3``
   :depends python: ``>=3.4``
   :depends scipy: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install whatsgnu

   and update with::

      mamba update whatsgnu

  To create a new environment, run::

      mamba create --name myenvname whatsgnu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/whatsgnu:<tag>

   (see `whatsgnu/tags`_ for valid values for ``<tag>``)


.. |downloads_whatsgnu| image:: https://img.shields.io/conda/dn/bioconda/whatsgnu.svg?style=flat
   :target: https://anaconda.org/bioconda/whatsgnu
   :alt:   (downloads)
.. |docker_whatsgnu| image:: https://quay.io/repository/biocontainers/whatsgnu/status
   :target: https://quay.io/repository/biocontainers/whatsgnu
.. _`whatsgnu/tags`: https://quay.io/repository/biocontainers/whatsgnu?tab=tags


.. raw:: html

    <script>
        var package = "whatsgnu";
        var versions = ["1.5","1.4","1.3","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatsgnu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatsgnu/README.html