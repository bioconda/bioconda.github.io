:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paladin'
.. highlight: bash

paladin
=======

.. conda:recipe:: paladin
   :replaces_section_title:
   :noindex:

   Protein Alignment and Detection Interface

   :homepage: http://genomebio.org/paladin/
   :developer docs: https://github.com/twestbrookunh/paladin
   :license: MIT
   :recipe: /`paladin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin/meta.yaml>`_

   PALADIN is a protein sequence alignment tool designed for the accurate
   functional characterization of metagenomes.



.. conda:package:: paladin

   |downloads_paladin| |docker_paladin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.6-5</code>,  <code>1.4.6-4</code>,  <code>1.4.6-3</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.4-0</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  </span></summary>
      

      ``1.4.6-5``,  ``1.4.6-4``,  ``1.4.6-3``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.4-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
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

      mamba install paladin

   and update with::

      mamba update paladin

  To create a new environment, run::

      mamba create --name myenvname paladin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paladin:<tag>

   (see `paladin/tags`_ for valid values for ``<tag>``)


.. |downloads_paladin| image:: https://img.shields.io/conda/dn/bioconda/paladin.svg?style=flat
   :target: https://anaconda.org/bioconda/paladin
   :alt:   (downloads)
.. |docker_paladin| image:: https://quay.io/repository/biocontainers/paladin/status
   :target: https://quay.io/repository/biocontainers/paladin
.. _`paladin/tags`: https://quay.io/repository/biocontainers/paladin?tab=tags


.. raw:: html

    <script>
        var package = "paladin";
        var versions = ["1.4.6","1.4.6","1.4.6","1.4.6","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paladin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paladin/README.html