:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagger'
.. highlight: bash

tagger
======

.. conda:recipe:: tagger
   :replaces_section_title:
   :noindex:

   tagger allows you to tag a corpus of documents with search terms that you provide. It is often used to find mentions of proteins\, species\, diseases\, tissues\, chemicals and drugs\, GO terms\, and so forth\, in articles in the Medline corpus.

   :homepage: https://github.com/larsjuhljensen/tagger
   :documentation: https://github.com/larsjuhljensen/tagger/blob/1.1/README.md
   
   :license: BSD / BSD-2-Clause
   :recipe: /`tagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger/meta.yaml>`_

   


.. conda:package:: tagger

   |downloads_tagger| |docker_tagger|

   :versions:
      
      

      ``1.1-2``,  ``1.1-0``

      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tagger

   and update with::

      mamba update tagger

  To create a new environment, run::

      mamba create --name myenvname tagger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tagger:<tag>

   (see `tagger/tags`_ for valid values for ``<tag>``)


.. |downloads_tagger| image:: https://img.shields.io/conda/dn/bioconda/tagger.svg?style=flat
   :target: https://anaconda.org/bioconda/tagger
   :alt:   (downloads)
.. |docker_tagger| image:: https://quay.io/repository/biocontainers/tagger/status
   :target: https://quay.io/repository/biocontainers/tagger
.. _`tagger/tags`: https://quay.io/repository/biocontainers/tagger?tab=tags


.. raw:: html

    <script>
        var package = "tagger";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagger/README.html