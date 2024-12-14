:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verse'
.. highlight: bash

verse
=====

.. conda:recipe:: verse
   :replaces_section_title:
   :noindex:

   VERSE\: a versatile and efficient RNA\-Seq read counting tool

   :homepage: https://github.com/qinzhu/VERSE
   :license: GPL / GPL-3.0
   :recipe: /`verse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verse/meta.yaml>`_

   


.. conda:package:: verse

   |downloads_verse| |docker_verse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.5-9</code>,  <code>0.1.5-8</code>,  <code>0.1.5-7</code>,  <code>0.1.5-6</code>,  <code>0.1.5-5</code>,  <code>0.1.5-4</code>,  <code>0.1.5-3</code>,  <code>0.1.5-2</code>,  <code>0.1.5-1</code>,  </span></summary>
      

      ``0.1.5-9``,  ``0.1.5-8``,  ``0.1.5-7``,  ``0.1.5-6``,  ``0.1.5-5``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install verse

   and update with::

      mamba update verse

  To create a new environment, run::

      mamba create --name myenvname verse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verse:<tag>

   (see `verse/tags`_ for valid values for ``<tag>``)


.. |downloads_verse| image:: https://img.shields.io/conda/dn/bioconda/verse.svg?style=flat
   :target: https://anaconda.org/bioconda/verse
   :alt:   (downloads)
.. |docker_verse| image:: https://quay.io/repository/biocontainers/verse/status
   :target: https://quay.io/repository/biocontainers/verse
.. _`verse/tags`: https://quay.io/repository/biocontainers/verse?tab=tags


.. raw:: html

    <script>
        var package = "verse";
        var versions = ["0.1.5","0.1.5","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verse/README.html