:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdptools'
.. highlight: bash

rdptools
========

.. conda:recipe:: rdptools
   :replaces_section_title:
   :noindex:

   Metaproject for RDP Tools

   :homepage: http://rdp.cme.msu.edu/misc/resources.jsp
   :license: `CC / Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) <https://creativecommons.org/licenses/by-sa/3.0/legalcode>`_
   :recipe: /`rdptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools/meta.yaml>`_

   


.. conda:package:: rdptools

   |downloads_rdptools| |docker_rdptools|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends openjdk: ``8.0.*``
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

      mamba install rdptools

   and update with::

      mamba update rdptools

  To create a new environment, run::

      mamba create --name myenvname rdptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdptools:<tag>

   (see `rdptools/tags`_ for valid values for ``<tag>``)


.. |downloads_rdptools| image:: https://img.shields.io/conda/dn/bioconda/rdptools.svg?style=flat
   :target: https://anaconda.org/bioconda/rdptools
   :alt:   (downloads)
.. |docker_rdptools| image:: https://quay.io/repository/biocontainers/rdptools/status
   :target: https://quay.io/repository/biocontainers/rdptools
.. _`rdptools/tags`: https://quay.io/repository/biocontainers/rdptools?tab=tags


.. raw:: html

    <script>
        var package = "rdptools";
        var versions = ["2.0.3","2.0.3","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdptools/README.html