:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pear'
.. highlight: bash

pear
====

.. conda:recipe:: pear
   :replaces_section_title:
   :noindex:

   paired\-end read merger

   :homepage: http://sco.h-its.org/exelixis/web/software/pear/
   :license: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
   :recipe: /`pear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear/meta.yaml>`_
   :links: biotools: :biotools:`PEAR`

   


.. conda:package:: pear

   |downloads_pear| |docker_pear|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.6-10</code>,  <code>0.9.6-9</code>,  <code>0.9.6-8</code>,  <code>0.9.6-7</code>,  <code>0.9.6-6</code>,  <code>0.9.6-5</code>,  <code>0.9.6-4</code>,  <code>0.9.6-3</code>,  <code>0.9.6-2</code>,  </span></summary>
      

      ``0.9.6-10``,  ``0.9.6-9``,  ``0.9.6-8``,  ``0.9.6-7``,  ``0.9.6-6``,  ``0.9.6-5``,  ``0.9.6-4``,  ``0.9.6-3``,  ``0.9.6-2``,  ``0.9.6-1``,  ``0.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install pear

   and update with::

      mamba update pear

  To create a new environment, run::

      mamba create --name myenvname pear

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pear:<tag>

   (see `pear/tags`_ for valid values for ``<tag>``)


.. |downloads_pear| image:: https://img.shields.io/conda/dn/bioconda/pear.svg?style=flat
   :target: https://anaconda.org/bioconda/pear
   :alt:   (downloads)
.. |docker_pear| image:: https://quay.io/repository/biocontainers/pear/status
   :target: https://quay.io/repository/biocontainers/pear
.. _`pear/tags`: https://quay.io/repository/biocontainers/pear?tab=tags


.. raw:: html

    <script>
        var package = "pear";
        var versions = ["0.9.6","0.9.6","0.9.6","0.9.6","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pear/README.html