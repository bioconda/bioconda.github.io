:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trackhub'
.. highlight: bash

trackhub
========

.. conda:recipe:: trackhub
   :replaces_section_title:
   :noindex:

   Create and manage UCSC track hubs from Python

   :homepage: http://github.com/daler/trackhub
   :license: MIT
   :recipe: /`trackhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub/meta.yaml>`_

   


.. conda:package:: trackhub

   |downloads_trackhub| |docker_trackhub|

   :versions:
      
      

      ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.1.2019.12.24-1``,  ``0.1.2019.12.24-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends docutils: 
   :depends python: 
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

      mamba install trackhub

   and update with::

      mamba update trackhub

  To create a new environment, run::

      mamba create --name myenvname trackhub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trackhub:<tag>

   (see `trackhub/tags`_ for valid values for ``<tag>``)


.. |downloads_trackhub| image:: https://img.shields.io/conda/dn/bioconda/trackhub.svg?style=flat
   :target: https://anaconda.org/bioconda/trackhub
   :alt:   (downloads)
.. |docker_trackhub| image:: https://quay.io/repository/biocontainers/trackhub/status
   :target: https://quay.io/repository/biocontainers/trackhub
.. _`trackhub/tags`: https://quay.io/repository/biocontainers/trackhub?tab=tags


.. raw:: html

    <script>
        var package = "trackhub";
        var versions = ["0.2.4","0.2.4","0.2.4","0.1.2019.12.24","0.1.2019.12.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trackhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trackhub/README.html