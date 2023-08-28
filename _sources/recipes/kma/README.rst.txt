:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kma'
.. highlight: bash

kma
===

.. conda:recipe:: kma
   :replaces_section_title:
   :noindex:

   KMA is mapping a method designed to map raw reads directly against redundant databases\, in an ultra\-fast manner using seed and extend.

   :homepage: https://bitbucket.org/genomicepidemiology/kma
   :license: Apache-2.0
   :recipe: /`kma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2336-6`

   


.. conda:package:: kma

   |downloads_kma| |docker_kma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.9-2</code>,  <code>1.4.9-1</code>,  <code>1.4.9-0</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.4.9-2``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.28-1``,  ``1.3.28-0``,  ``1.3.27-0``,  ``1.3.26-0``,  ``1.3.25-0``,  ``1.3.24-0``,  ``1.3.23-0``,  ``1.3.22-0``,  ``1.3.21-0``,  ``1.3.19-0``,  ``1.3.18-0``,  ``1.3.17-0``,  ``1.3.15-0``,  ``1.3.14-0``,  ``1.3.13-1``,  ``1.3.13-0``,  ``1.3.12-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.26-0``,  ``1.2.25-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.9-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install kma

   and update with::

      mamba update kma

  To create a new environment, run::

      mamba create --name myenvname kma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kma:<tag>

   (see `kma/tags`_ for valid values for ``<tag>``)


.. |downloads_kma| image:: https://img.shields.io/conda/dn/bioconda/kma.svg?style=flat
   :target: https://anaconda.org/bioconda/kma
   :alt:   (downloads)
.. |docker_kma| image:: https://quay.io/repository/biocontainers/kma/status
   :target: https://quay.io/repository/biocontainers/kma
.. _`kma/tags`: https://quay.io/repository/biocontainers/kma?tab=tags


.. raw:: html

    <script>
        var package = "kma";
        var versions = ["1.4.9","1.4.9","1.4.9","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kma/README.html