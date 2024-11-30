:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reago'
.. highlight: bash

reago
=====

.. conda:recipe:: reago
   :replaces_section_title:
   :noindex:

   An assembly tool for 16S ribosomal RNA recovery from metagenomic data

   :homepage: https://github.com/chengyuan/reago-1.1
   :license: Unknown
   :recipe: /`reago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago/meta.yaml>`_

   


.. conda:package:: reago

   |downloads_reago| |docker_reago|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends genometools-genometools: 
   :depends infernal: ``==1.1.1``
   :depends networkx: 
   :depends python: ``2.7*``
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

      mamba install reago

   and update with::

      mamba update reago

  To create a new environment, run::

      mamba create --name myenvname reago

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reago:<tag>

   (see `reago/tags`_ for valid values for ``<tag>``)


.. |downloads_reago| image:: https://img.shields.io/conda/dn/bioconda/reago.svg?style=flat
   :target: https://anaconda.org/bioconda/reago
   :alt:   (downloads)
.. |docker_reago| image:: https://quay.io/repository/biocontainers/reago/status
   :target: https://quay.io/repository/biocontainers/reago
.. _`reago/tags`: https://quay.io/repository/biocontainers/reago?tab=tags


.. raw:: html

    <script>
        var package = "reago";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reago/README.html