:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igvtools'
.. highlight: bash

igvtools
========

.. conda:recipe:: igvtools
   :replaces_section_title:
   :noindex:

   Command line tools for IGV

   :homepage: http://www.broadinstitute.org/igv/
   :license: MIT / MIT
   :recipe: /`igvtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools/meta.yaml>`_
   :links: biotools: :biotools:`IGVtools`

   


.. conda:package:: igvtools

   |downloads_igvtools| |docker_igvtools|

   :versions:
      
      

      ``2.17.3-0``,  ``2.16.2-0``,  ``2.14.1-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.3.93-0``,  ``2.3.75-1``,  ``2.3.48-1``,  ``2.3.16-0``

      

   
   :depends openjdk: ``>=17``
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

      mamba install igvtools

   and update with::

      mamba update igvtools

  To create a new environment, run::

      mamba create --name myenvname igvtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igvtools:<tag>

   (see `igvtools/tags`_ for valid values for ``<tag>``)


.. |downloads_igvtools| image:: https://img.shields.io/conda/dn/bioconda/igvtools.svg?style=flat
   :target: https://anaconda.org/bioconda/igvtools
   :alt:   (downloads)
.. |docker_igvtools| image:: https://quay.io/repository/biocontainers/igvtools/status
   :target: https://quay.io/repository/biocontainers/igvtools
.. _`igvtools/tags`: https://quay.io/repository/biocontainers/igvtools?tab=tags


.. raw:: html

    <script>
        var package = "igvtools";
        var versions = ["2.17.3","2.16.2","2.14.1","2.5.3","2.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igvtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igvtools/README.html