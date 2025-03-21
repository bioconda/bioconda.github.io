:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ococo'
.. highlight: bash

ococo
=====

.. conda:recipe:: ococo
   :replaces_section_title:
   :noindex:

   Ococo\, the first online consensus caller.

   :homepage: http://github.com/karel-brinda/ococo
   :license: MIT
   :recipe: /`ococo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ococo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ococo/meta.yaml>`_

   


.. conda:package:: ococo

   |downloads_ococo| |docker_ococo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.2.7-10</code>,  <code>0.1.2.7-9</code>,  <code>0.1.2.7-8</code>,  <code>0.1.2.7-7</code>,  <code>0.1.2.7-6</code>,  <code>0.1.2.7-5</code>,  <code>0.1.2.7-4</code>,  <code>0.1.2.7-3</code>,  <code>0.1.2.7-2</code>,  </span></summary>
      

      ``0.1.2.7-10``,  ``0.1.2.7-9``,  ``0.1.2.7-8``,  ``0.1.2.7-7``,  ``0.1.2.7-6``,  ``0.1.2.7-5``,  ``0.1.2.7-4``,  ``0.1.2.7-3``,  ``0.1.2.7-2``,  ``0.1.2.7-1``,  ``0.1.2.7-0``,  ``0.1.2.6-2``,  ``0.1.2.6-1``,  ``0.1.2.6-0``,  ``0.1.2.5-0``,  ``0.1.2.4-1``,  ``0.1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install ococo

   and update with::

      mamba update ococo

  To create a new environment, run::

      mamba create --name myenvname ococo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ococo:<tag>

   (see `ococo/tags`_ for valid values for ``<tag>``)


.. |downloads_ococo| image:: https://img.shields.io/conda/dn/bioconda/ococo.svg?style=flat
   :target: https://anaconda.org/bioconda/ococo
   :alt:   (downloads)
.. |docker_ococo| image:: https://quay.io/repository/biocontainers/ococo/status
   :target: https://quay.io/repository/biocontainers/ococo
.. _`ococo/tags`: https://quay.io/repository/biocontainers/ococo?tab=tags


.. raw:: html

    <script>
        var package = "ococo";
        var versions = ["0.1.2.7","0.1.2.7","0.1.2.7","0.1.2.7","0.1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ococo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ococo/README.html