:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wheezy.template'
.. highlight: bash

wheezy.template
===============

.. conda:recipe:: wheezy.template
   :replaces_section_title:
   :noindex:

   A lightweight template library

   :homepage: https://bitbucket.org/akorn/wheezy.template
   :license: MIT / MIT
   :recipe: /`wheezy.template <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wheezy.template>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wheezy.template/meta.yaml>`_

   


.. conda:package:: wheezy.template

   |downloads_wheezy.template| |docker_wheezy.template|

   :versions:
      
      

      ``0.1.178-0``,  ``0.1.169-0``,  ``0.1.167-1``,  ``0.1.167-0``

      

   
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

      mamba install wheezy.template

   and update with::

      mamba update wheezy.template

  To create a new environment, run::

      mamba create --name myenvname wheezy.template

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wheezy.template:<tag>

   (see `wheezy.template/tags`_ for valid values for ``<tag>``)


.. |downloads_wheezy.template| image:: https://img.shields.io/conda/dn/bioconda/wheezy.template.svg?style=flat
   :target: https://anaconda.org/bioconda/wheezy.template
   :alt:   (downloads)
.. |docker_wheezy.template| image:: https://quay.io/repository/biocontainers/wheezy.template/status
   :target: https://quay.io/repository/biocontainers/wheezy.template
.. _`wheezy.template/tags`: https://quay.io/repository/biocontainers/wheezy.template?tab=tags


.. raw:: html

    <script>
        var package = "wheezy.template";
        var versions = ["0.1.178","0.1.169","0.1.167","0.1.167"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wheezy.template/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wheezy.template/README.html