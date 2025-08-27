:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reveal'
.. highlight: bash

reveal
======

.. conda:recipe:: reveal
   :replaces_section_title:
   :noindex:

   Graph based multi genome aligner

   :homepage: https://github.com/jasperlinthorst/reveal
   :license: MIT
   :recipe: /`reveal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reveal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reveal/meta.yaml>`_

   


.. conda:package:: reveal

   |downloads_reveal| |docker_reveal|

   :versions:
      
      

      ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends intervaltree: 
   :depends libcxx: ``>=12.0.1``
   :depends libdivsufsort: 
   :depends matplotlib: 
   :depends networkx: ``2.0.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
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

      mamba install reveal

   and update with::

      mamba update reveal

  To create a new environment, run::

      mamba create --name myenvname reveal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reveal:<tag>

   (see `reveal/tags`_ for valid values for ``<tag>``)


.. |downloads_reveal| image:: https://img.shields.io/conda/dn/bioconda/reveal.svg?style=flat
   :target: https://anaconda.org/bioconda/reveal
   :alt:   (downloads)
.. |docker_reveal| image:: https://quay.io/repository/biocontainers/reveal/status
   :target: https://quay.io/repository/biocontainers/reveal
.. _`reveal/tags`: https://quay.io/repository/biocontainers/reveal?tab=tags


.. raw:: html

    <script>
        var package = "reveal";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reveal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reveal/README.html