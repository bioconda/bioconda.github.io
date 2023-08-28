:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-ting'
.. highlight: bash

bio-ting
========

.. conda:recipe:: bio-ting
   :replaces_section_title:
   :noindex:

   ting is a tool clustering large scale T cell receptor repertoires by antigen\-specificity

   :homepage: https://github.com/FelixMoelder/ting
   :license: MIT
   :recipe: /`bio-ting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting/meta.yaml>`_

   


.. conda:package:: bio-ting

   |downloads_bio-ting| |docker_bio-ting|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends numpy: ``>=1.17,<=1.19``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.3,<=1.5``
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

      mamba install bio-ting

   and update with::

      mamba update bio-ting

  To create a new environment, run::

      mamba create --name myenvname bio-ting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio-ting:<tag>

   (see `bio-ting/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-ting| image:: https://img.shields.io/conda/dn/bioconda/bio-ting.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-ting
   :alt:   (downloads)
.. |docker_bio-ting| image:: https://quay.io/repository/biocontainers/bio-ting/status
   :target: https://quay.io/repository/biocontainers/bio-ting
.. _`bio-ting/tags`: https://quay.io/repository/biocontainers/bio-ting?tab=tags


.. raw:: html

    <script>
        var package = "bio-ting";
        var versions = ["1.1.0","1.0.2","1.0.1"];
    </script>





Notes
-----
The tool is available as command \`ting\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-ting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-ting/README.html