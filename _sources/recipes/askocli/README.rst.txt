:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'askocli'
.. highlight: bash

askocli
=======

.. conda:recipe:: askocli
   :replaces_section_title:
   :noindex:

   Command line interface for a distant AskOmics

   :homepage: https://github.com/askomics/askocli
   :license: AGPL / GNU Affero General Public License v3
   :recipe: /`askocli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/askocli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/askocli/meta.yaml>`_

   


.. conda:package:: askocli

   |downloads_askocli| |docker_askocli|

   :versions:
      
      

      ``0.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.2.1-0``

      

   
   :depends python: 
   :depends requests: ``>=2.4.3``
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

      mamba install askocli

   and update with::

      mamba update askocli

  To create a new environment, run::

      mamba create --name myenvname askocli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/askocli:<tag>

   (see `askocli/tags`_ for valid values for ``<tag>``)


.. |downloads_askocli| image:: https://img.shields.io/conda/dn/bioconda/askocli.svg?style=flat
   :target: https://anaconda.org/bioconda/askocli
   :alt:   (downloads)
.. |docker_askocli| image:: https://quay.io/repository/biocontainers/askocli/status
   :target: https://quay.io/repository/biocontainers/askocli
.. _`askocli/tags`: https://quay.io/repository/biocontainers/askocli?tab=tags


.. raw:: html

    <script>
        var package = "askocli";
        var versions = ["0.5","0.4.3","0.4.3","0.4.1","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/askocli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/askocli/README.html