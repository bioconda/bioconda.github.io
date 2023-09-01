:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'woltka'
.. highlight: bash

woltka
======

.. conda:recipe:: woltka
   :replaces_section_title:
   :noindex:

   versatile meta\-omic data classifier

   :homepage: https://github.com/qiyunzhu/woltka
   :license: BSD / BSD
   :recipe: /`woltka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/woltka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/woltka/meta.yaml>`_

   


.. conda:package:: woltka

   |downloads_woltka| |docker_woltka|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends biom-format: 
   :depends python: 
   :depends setuptools: 
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

      mamba install woltka

   and update with::

      mamba update woltka

  To create a new environment, run::

      mamba create --name myenvname woltka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/woltka:<tag>

   (see `woltka/tags`_ for valid values for ``<tag>``)


.. |downloads_woltka| image:: https://img.shields.io/conda/dn/bioconda/woltka.svg?style=flat
   :target: https://anaconda.org/bioconda/woltka
   :alt:   (downloads)
.. |docker_woltka| image:: https://quay.io/repository/biocontainers/woltka/status
   :target: https://quay.io/repository/biocontainers/woltka
.. _`woltka/tags`: https://quay.io/repository/biocontainers/woltka?tab=tags


.. raw:: html

    <script>
        var package = "woltka";
        var versions = ["0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/woltka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/woltka/README.html