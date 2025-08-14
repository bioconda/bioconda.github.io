:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panoct'
.. highlight: bash

panoct
======

.. conda:recipe:: panoct
   :replaces_section_title:
   :noindex:

   PanOCT\, Pan\-genome Ortholog Clustering Tool\, is a program for pan\-genomic analysis of closely related prokaryotic species or strains.

   :homepage: https://panoct.sourceforge.io
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`panoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoct/meta.yaml>`_

   


.. conda:package:: panoct

   |downloads_panoct| |docker_panoct|

   :versions:
      
      

      ``3.23-2``,  ``3.23-1``,  ``3.23-0``

      

   
   :depends perl: ``>=5.26.2``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install panoct

   and update with::

      mamba update panoct

  To create a new environment, run::

      mamba create --name myenvname panoct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panoct:<tag>

   (see `panoct/tags`_ for valid values for ``<tag>``)


.. |downloads_panoct| image:: https://img.shields.io/conda/dn/bioconda/panoct.svg?style=flat
   :target: https://anaconda.org/bioconda/panoct
   :alt:   (downloads)
.. |docker_panoct| image:: https://quay.io/repository/biocontainers/panoct/status
   :target: https://quay.io/repository/biocontainers/panoct
.. _`panoct/tags`: https://quay.io/repository/biocontainers/panoct?tab=tags


.. raw:: html

    <script>
        var package = "panoct";
        var versions = ["3.23","3.23","3.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panoct/README.html