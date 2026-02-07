:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacy-layout'
.. highlight: bash

spacy-layout
============

.. conda:recipe:: spacy-layout
   :replaces_section_title:
   :noindex:

   Use spaCy with PDFs\, Word docs and other documents

   :homepage: https://github.com/explosion/spacy-layout
   :license: MIT
   :recipe: /`spacy-layout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacy-layout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacy-layout/meta.yaml>`_

   


.. conda:package:: spacy-layout

   |downloads_spacy-layout| |docker_spacy-layout|

   :versions:
      
      

      ``0.0.12-0``

      

   
   :depends docling: ``>=2.45.0``
   :depends pandas: 
   :depends pypdfium2: ``>=4.30.0,<5.0.0,!=4.30.1``
   :depends python: ``>=3.10``
   :depends spacy: ``>=3.7.5``
   :depends srsly: 
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

      mamba install spacy-layout

   and update with::

      mamba update spacy-layout

  To create a new environment, run::

      mamba create --name myenvname spacy-layout

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spacy-layout:<tag>

   (see `spacy-layout/tags`_ for valid values for ``<tag>``)


.. |downloads_spacy-layout| image:: https://img.shields.io/conda/dn/bioconda/spacy-layout.svg?style=flat
   :target: https://anaconda.org/bioconda/spacy-layout
   :alt:   (downloads)
.. |docker_spacy-layout| image:: https://quay.io/repository/biocontainers/spacy-layout/status
   :target: https://quay.io/repository/biocontainers/spacy-layout
.. _`spacy-layout/tags`: https://quay.io/repository/biocontainers/spacy-layout?tab=tags


.. raw:: html

    <script>
        var package = "spacy-layout";
        var versions = ["0.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacy-layout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacy-layout/README.html