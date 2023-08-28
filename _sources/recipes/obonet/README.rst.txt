:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'obonet'
.. highlight: bash

obonet
======

.. conda:recipe:: obonet
   :replaces_section_title:
   :noindex:

   Parse OBO formatted ontologies into networkx

   :homepage: https://github.com/dhimmel/obonet
   :documentation: https://github.com/dhimmel/obonet/README.md
   
   :license: BSD-2-Clause-Patent
   :recipe: /`obonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obonet/meta.yaml>`_

   


.. conda:package:: obonet

   |downloads_obonet| |docker_obonet|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.3-0``

      

   
   :depends networkx: 
   :depends python: 
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

      mamba install obonet

   and update with::

      mamba update obonet

  To create a new environment, run::

      mamba create --name myenvname obonet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/obonet:<tag>

   (see `obonet/tags`_ for valid values for ``<tag>``)


.. |downloads_obonet| image:: https://img.shields.io/conda/dn/bioconda/obonet.svg?style=flat
   :target: https://anaconda.org/bioconda/obonet
   :alt:   (downloads)
.. |docker_obonet| image:: https://quay.io/repository/biocontainers/obonet/status
   :target: https://quay.io/repository/biocontainers/obonet
.. _`obonet/tags`: https://quay.io/repository/biocontainers/obonet?tab=tags


.. raw:: html

    <script>
        var package = "obonet";
        var versions = ["1.0.0","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/obonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/obonet/README.html