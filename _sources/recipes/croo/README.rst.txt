:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'croo'
.. highlight: bash

croo
====

.. conda:recipe:: croo
   :replaces_section_title:
   :noindex:

   CRomwell Output Organizer

   :homepage: https://github.com/ENCODE-DCC/croo
   :license: MIT
   :recipe: /`croo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo/meta.yaml>`_

   This program parses metadata JSON file generated from Cromwell and organizes its raw outputs


.. conda:package:: croo

   |downloads_croo| |docker_croo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2.1-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2.1-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends autouri: ``>=0.1.2.1``
   :depends caper: 
   :depends graphviz: 
   :depends miniwdl: 
   :depends python: ``>=3.6``
   :depends python-graphviz: 
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

      mamba install croo

   and update with::

      mamba update croo

  To create a new environment, run::

      mamba create --name myenvname croo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/croo:<tag>

   (see `croo/tags`_ for valid values for ``<tag>``)


.. |downloads_croo| image:: https://img.shields.io/conda/dn/bioconda/croo.svg?style=flat
   :target: https://anaconda.org/bioconda/croo
   :alt:   (downloads)
.. |docker_croo| image:: https://quay.io/repository/biocontainers/croo/status
   :target: https://quay.io/repository/biocontainers/croo
.. _`croo/tags`: https://quay.io/repository/biocontainers/croo?tab=tags


.. raw:: html

    <script>
        var package = "croo";
        var versions = ["0.6.0","0.5.3","0.5.2","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/croo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/croo/README.html