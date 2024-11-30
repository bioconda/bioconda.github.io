:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'im-pipelines'
.. highlight: bash

im-pipelines
============

.. conda:recipe:: im-pipelines
   :replaces_section_title:
   :noindex:

   Components for cheminformatics and computational chemistry from InformaticsMatters.

   :homepage: https://github.com/InformaticsMatters/pipelines
   :license: Apache / Apache-2.0
   :recipe: /`im-pipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im-pipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im-pipelines/meta.yaml>`_

   


.. conda:package:: im-pipelines

   |downloads_im-pipelines| |docker_im-pipelines|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends im-pipelines-utils: 
   :depends im-pipelines-utils-rdkit: 
   :depends matplotlib-base: 
   :depends molvs: 
   :depends python: 
   :depends scikit-learn: 
   :depends standardiser: 
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

      mamba install im-pipelines

   and update with::

      mamba update im-pipelines

  To create a new environment, run::

      mamba create --name myenvname im-pipelines

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/im-pipelines:<tag>

   (see `im-pipelines/tags`_ for valid values for ``<tag>``)


.. |downloads_im-pipelines| image:: https://img.shields.io/conda/dn/bioconda/im-pipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/im-pipelines
   :alt:   (downloads)
.. |docker_im-pipelines| image:: https://quay.io/repository/biocontainers/im-pipelines/status
   :target: https://quay.io/repository/biocontainers/im-pipelines
.. _`im-pipelines/tags`: https://quay.io/repository/biocontainers/im-pipelines?tab=tags


.. raw:: html

    <script>
        var package = "im-pipelines";
        var versions = ["1.1.6","1.1.5","1.1.5","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/im-pipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/im-pipelines/README.html