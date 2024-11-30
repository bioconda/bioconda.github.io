:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprbact'
.. highlight: bash

crisprbact
==========

.. conda:recipe:: crisprbact
   :replaces_section_title:
   :noindex:

   Tools to design and analyse CRISPRi experiments

   :homepage: https://gitlab.pasteur.fr/dbikard/crisprbact
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`crisprbact <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprbact>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprbact/meta.yaml>`_

   


.. conda:package:: crisprbact

   |downloads_crisprbact| |docker_crisprbact|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.11-0</code>,  <code>0.3.10-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.75,<2.0``
   :depends click: ``>=7.0,<8.0``
   :depends numpy: ``>=1.17,<2.0``
   :depends pandas: ``>=0.25.3``
   :depends poetry: 
   :depends python: ``>=3.7``
   :depends rope: ``>=0.16.0``
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

      mamba install crisprbact

   and update with::

      mamba update crisprbact

  To create a new environment, run::

      mamba create --name myenvname crisprbact

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crisprbact:<tag>

   (see `crisprbact/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprbact| image:: https://img.shields.io/conda/dn/bioconda/crisprbact.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprbact
   :alt:   (downloads)
.. |docker_crisprbact| image:: https://quay.io/repository/biocontainers/crisprbact/status
   :target: https://quay.io/repository/biocontainers/crisprbact
.. _`crisprbact/tags`: https://quay.io/repository/biocontainers/crisprbact?tab=tags


.. raw:: html

    <script>
        var package = "crisprbact";
        var versions = ["0.3.11","0.3.10","0.3.9","0.3.8","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprbact/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprbact/README.html